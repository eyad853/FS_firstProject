import { IoRepeatOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import React, { useState , useRef , useEffect} from 'react'
import { CgCalendarDates } from "react-icons/cg";
import DateList from "../pops/date/Date";
import Reminder from "../pops/reminder/reminder";
import Repeat from "../pops/repeat/Repeat";
import axios from "axios"

const Make_an_Important_ToDo = ({todoValue , setTodoValue}) => {

  const [date , setDate]=useState("")
  const [reminder , setReminder]=useState("")
  const [repeat , setRepeat]=useState("")



  const [isDateOpen , setIsDateOpen] = useState(false)
  const [isReminderOpen , setIsReminderOpen] = useState(false)
  const [isRepeatOpen , setIsRepeatOpen] = useState(false)

  const containerRef = useRef(null)

  useEffect(()=>{
    const handleClickOutside = (event)=>{
      if(containerRef.current && !containerRef.current.contains(event.target)){
        setIsDateOpen(false);
      setIsReminderOpen(false);
      setIsRepeatOpen(false);
      }

    }

    document.addEventListener("click" , handleClickOutside)
    return ()=>{
      document.removeEventListener("click" , handleClickOutside)
    }
  },[])

const toggleDate = ()=>{
setIsDateOpen(!isDateOpen)
setIsReminderOpen(false);
setIsRepeatOpen(false)

}

const toggleReminder = ()=>{
setIsReminderOpen(!isReminderOpen)
setIsDateOpen(false);
setIsRepeatOpen(false);

}

const toggleRepeat = ()=>{
setIsRepeatOpen(!isRepeatOpen)
setIsDateOpen(false);
setIsReminderOpen(false);
}

// api
const handleCreateTodo = async ()=>{
  if (!todoValue.trim()) {
    alert('Please enter a Todo!');
    return;
  }

  const data = {
    todoValue,
    date,
    reminder,
    repeat
  }
  try{
    const response = await axios.post("https://fs-first-projectserverapi.vercel.app/api/todo/make-An-Important-Todo" , data )
    console.log(response);
    setTodoValue("")
    setDate("")
    setReminder("")
    setRepeat("")
  }catch(error){
    console.log(error);
  }
  
}




  return (
    <div className="relative " ref={containerRef}>
      <div className='w-full max-w-full flex flex-col h-24 rounded-2xl  mt-4 box-border mx-4 shadow-xl  '>
        {/* the first part */}

            <div className='w-full  h-16 flex  '>
                
              <div className='w-16 h-full flex items-center justify-center bg-white rounded-tl-2xl bg-gradient-to-bl from-slate-950 to-slate-600'>
                <div className=' w-4 h-4 rounded-full border border-blue-500'></div>
              </div>
                
              <div className='h-full w-full bg-white rounded-md'>
                  <input 
                  type="text" 
                  className='w-full h-full border-none outline-none bg-gradient-to-tr from-slate-600 to-slate-600 text-white rounded-md font-medium'
                  value={todoValue}
                  onChange={({target})=>{setTodoValue(target.value)}}
                  />
              </div>

            </div>

      {/* the second part */}
          <div className='w-full  h-14 flex bg-gradient-to-bl from-slate-950 to-slate-600 justify-between items-center rounded-bl-2xl'>

            <div className="flex"> 
              <div onClick={(e)=>{
                e.stopPropagation()
                toggleDate()}} 
                className="flex justify-center items-center ml-4 bg-zinc-50  px-1 h-6 rounded-md hover:shadow-xl p-1"> 
                <CgCalendarDates   className="h-full w-full"/>
              </div>

              <div onClick={(e)=>{
                e.stopPropagation()
                toggleReminder()}}  
                className="flex justify-center items-center ml-4 bg-zinc-50  px-1 h-6 rounded-md hover:shadow-xl p-1"> 
                <IoNotificationsOutline className="h-full w-full"/>
              </div>

              <div onClick={(e)=>{
                e.stopPropagation()
                toggleRepeat()}}  
                className="flex justify-center items-center ml-4  px-1 bg-zinc-50 h-6 rounded-md hover:shadow-xl p-1"> 
                <IoRepeatOutline  className="h-full w-full"/>
              </div>

            </div>

            <div 
            onClick={handleCreateTodo} 
            className="w-10 h-7 mr-5 p-1 rounded-md bg-white flex justify-center items-center hover:shadow-xl ">
              <button className="h-full w-full mb-1 ">add</button>
            </div>


          </div>

      </div>


          {isDateOpen&&<DateList date={date} setDate={setDate} setIsDateOpen={setIsDateOpen}/>}
          {isReminderOpen&&<Reminder reminder={reminder} setReminder={setReminder} setIsReminderOpen={setIsReminderOpen}/>}
          {isRepeatOpen&&<Repeat repeat={repeat} setRepeat={setRepeat} setIsRepeatOpen={setIsRepeatOpen}/>}
    </div>

  )
}

export default Make_an_Important_ToDo;
