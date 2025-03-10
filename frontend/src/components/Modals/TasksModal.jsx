import React from 'react'
import Modal from "react-modal" 
import { useState , useEffect , useRef } from 'react'
import { IoNotificationsOutline, IoRepeatOutline } from 'react-icons/io5'
import { CgCalendarDates } from 'react-icons/cg'
import axios from 'axios'
import UpdateModalRepeat from '../theupdatemodalcomponents/UpdateModalRepeat'
import UpdateModalReminder from '../theupdatemodalcomponents/UpdateModalReminder'
import UpdatedDateList from '../theupdatemodalcomponents/UpdateModalDate'

const UpdateTasksModal = ({
  isModalOpen ,
   setIsModalOpen ,
    handleGetTodos ,
     selectedTodoId ,
      selectedTodoValue,
      selectedTodoDate,
      selectedTodoReminder,
      selectedTodoRepeat
    }) => {

    const [isDateOpen , setIsDateOpen] = useState(false)
    const [isReminderOpen , setIsReminderOpen] = useState(false)
    const [isRepeatOpen , setIsRepeatOpen] = useState(false)
    
    const [updatedtodoValue , setUpdatedTodoValue]=useState("")
    const [updateddate , setUpdatedDate]=useState("")
    const [updatedreminder , setUpdatedReminder]=useState("")
    const [Updatedrepeat , setUpdatedRepeat]=useState("")

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

      useEffect(()=>{
        setUpdatedTodoValue(selectedTodoValue)
        setUpdatedDate(selectedTodoDate)
        setUpdatedReminder(selectedTodoReminder)
        setUpdatedRepeat(selectedTodoRepeat)
      } , [selectedTodoValue , selectedTodoDate , selectedTodoReminder , selectedTodoRepeat])
    
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

    const handleUpdateData = async ()=>{

      const data = {
        todoValue:updatedtodoValue,
        reminder:updatedreminder,
        date:updateddate,
        repeat:Updatedrepeat
      }

      if(data.todoValue===""&& data.reminder===""&&data.date===""&&data.repeat===""){
        setIsModalOpen(false)
      }
      try{
       await axios.put(`http://localhost:8000/api/todo/update-A-Task-Todo/${selectedTodoId}` , data)
       handleGetTodos()
       setIsModalOpen(false)
      }catch(error){
        console.log(error);
      }
    }

  return (
    <Modal
    isOpen={isModalOpen}
    onRequestClose={()=>{setIsModalOpen(false)}}
    overlayClassName='overlay'
    shouldCloseOnOverlayClick={true}
    className='w-96 h-44 bg-gray-600  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 rounded-md'
    ariaHideApp={false}
    >
      <div ref={containerRef} className='w-full h-full w  justify-center items-center relative'>
        <div className='absolute h-10 bg-orange-400 left-3 right-3 top-10 rounded-rounded-md'>
          <input 
          type="text" 
          className='w-full h-full rounded-md outline-none' 
          placeholder='New Value'
          value={updatedtodoValue}
          onChange={({target})=>{setUpdatedTodoValue(target.value)}}
          />
        </div>

        <div className='absolute h-10 bg-transparent left-3 right-3 bottom-10 flex justify-between items-center'>

           <div className="absolute h-10 bg-transparent left-3 right-3 bottom-2 flex justify-between items-center ">
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
                </div>

        <div 
        onClick={()=>{handleUpdateData()}}
        className='absolute bottom-2  left-1/2 transform -translate-x-1/2 bg-white hover:bg-slate-500 w-20 h-7 rounded-md flex justify-center items-center transition-all duration-500'>
          Update
        </div>
        
        <div className='absolute bottom-10'>
          {isDateOpen&&
          <UpdatedDateList 
          setUpdatedDate={setUpdatedDate} 
          setIsDateOpen={setIsDateOpen}/>}
        </div>

        <div className='absolute bottom-10 left-28'>
          {isReminderOpen&&
          <UpdateModalReminder
          setUpdatedReminder={setUpdatedReminder} 
          setIsReminderOpen={setIsReminderOpen}/>}
        </div>
        
        <div className='absolute bottom-10 right-44'>
          {isRepeatOpen&&
          <UpdateModalRepeat 
          setUpdatedRepeat={setUpdatedRepeat} 
          setIsRepeatOpen={setIsRepeatOpen}/>}
        </div>
      </div>

    </Modal>
  )
}

export default UpdateTasksModal