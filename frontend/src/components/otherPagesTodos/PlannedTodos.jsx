import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PlannedTodos = ({
    setIsModalOpen , 
    isModalOpen , 
    setSelectedTodoId , 
    setSelectedTodoValue ,
    setSelectedTodoDate,
    setSelectedTodoReminder,
    setSelectedTodoRepeat,
}) => {
    const [apiResponse , setApiResponse]=useState([])
    const [completed , setCompleted]=useState(false)
    const [editValue , setEditValue]=useState("")


    const handleUpdateModal = (id , value , date , reminder , repeat)=>{
        setSelectedTodoDate(date)
        setSelectedTodoReminder(reminder)
        setSelectedTodoRepeat(repeat)
        setSelectedTodoValue(value)
        setSelectedTodoId(id)
        setIsModalOpen(true)
        console.log(isModalOpen);
    }
    

    const handleGetTodos = async()=>{
        try{
            const response = await axios.get("http://localhost:8000/api/todo/get-All-Planned-Todos")
            setApiResponse(response.data.data)
        }catch(error){
            console.log(error);
        }
    }

    const handleDeleteTodos = async (id)=>{
        try{
            await axios.delete(`http://localhost:8000/api/todo/delete-Planned-Todo/${id}`)
            handleGetTodos()
        }catch(error){
            console.log(error);
        }
    }

    const handleCompleted = ()=>{
        setCompleted(!completed)
    }

    useEffect(()=>{
        handleGetTodos()
    } , [apiResponse])

    const handleUpdateTodo = async (id)=>{
        try{
            await axios.put(`http://localhost:8000/api/todo/update-A-Todo/${id}` , {
                todoValue:editValue
            })

            handleGetTodos()

        }catch(error){
            console.log(error);
        }
    }

    
  return (
    <div className="overflow-y-auto pb-28 h-full overflow-x-hidden">
    {apiResponse.length === 0 ? (
   <div className='w-full mt-44 text-white flex justify-center items-center'>No todos available</div>
) : (
   apiResponse.map((todo) => (
       <div key={todo._id}>
           <div className='w-full max-w-full flex items-center justify-between h-14 bg-gradient-to-tr from-slate-800 to-slate-600 text-white font-medium mt-10 box-border mx-4 shadow-xl relative mb-20 rounded-t-2xl'>

               <div className='flex items-center justify-center '>
                   {/* the circle */}
                   <div 
                   onClick={handleCompleted}
                   className='w-4 h-4 bg-white border border-zinc-950 rounded-full ml-3 '></div>
                   {/* the value */}
                   <div className='mb-1 ml-5'>
                       {todo.todoValue}
                   </div>
               </div>
               {/* delete  and edit*/}
               <div className='flex '>

                   <div 
                   className='bg-gray-500 mr-4 p-2 rounded-md hover:bg-black hover:text-white transition-all duration-500'>
                       <button
                        onClick={()=>{
                           handleUpdateModal(todo._id , todo.todoValue , todo.date , todo.reminder , todo.repeat)
                       }}
                       className='w-full h-full'>Edit</button>
                   </div>

                   <button 
                   onClick={()=>{
                       handleDeleteTodos(todo._id)
                   }}
                   className='bg-gray-500 mr-8 p-2 rounded-md hover:bg-black hover:text-white transition-all duration-500'>
                       delete
                   </button>
               </div>

               <div className="absolute -bottom-11 bg-gradient-to-tr from-slate-800 to-slate-600  w-full h-10  flex items-center justify-between">
                   
                   <div>
                       Date : {todo.date}
                   </div>
                   
                   <div>
                       Reminder: {todo.reminder}
                   </div>

                   <div className='mr-10'>
                       Repeat : {todo.repeat}
                   </div>

               </div>

           </div>
       </div>
   ))
)}
   </div>
  )
}

export default PlannedTodos


