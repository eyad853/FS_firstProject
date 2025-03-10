import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import UpdateModal from '../../components/Modal/Modal'
import TasksContent from '../../components/taslsContent/TasksContent'
import UpdateTasksModal from '../../components/Modals/TasksModal'

const TasksPage = () => {

    const [isOpen , setIsOpen]=useState(true)
    const [isModalOpen , setIsModalOpen]=useState(false)
    const [selectedTodoId , setSelectedTodoId]=useState(null)
    const [selectedTodoValue , setSelectedTodoValue] = useState("")
    const [selectedTodoDate , setSelectedTodoDate] = useState("")
    const [selectedTodoReminder , setSelectedTodoReminder] = useState("")
    const [selectedTodoRepeat , setSelectedTodoRepeat] = useState("")
    const [todoValue , setTodoValue]=useState("")


const toggleLeftSideBar=()=>{
  setIsOpen((prevState)=>{
    return !prevState
  })
}

const handleGetTodos = async()=>{
  try{
      const response = await axios.get("http://localhost:8000/api/todo/get-All-Todos")
      setApiResponse(response.data.data)
  }catch(error){
      console.log(error);
  }
}

  return (
    <div className='flex flex-col w-screen  h-screen'>
      {/* nav */}
      <Nav />
      <div className='flex w-full'>

        {isOpen&&<Sidebar 
        isOpen={isOpen} 
        toggleLeftSideBar={toggleLeftSideBar}/>}

        <TasksContent
        setSelectedTodoValue={setSelectedTodoValue}
        setSelectedTodoDate={setSelectedTodoDate}
        setSelectedTodoReminder={setSelectedTodoReminder}
        setSelectedTodoRepeat={setSelectedTodoRepeat}
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        setSelectedTodoId={setSelectedTodoId} 
        isOpen={isOpen} handleGetTodos={handleGetTodos} 
        toggleLeftSideBar={toggleLeftSideBar} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}/>

        

      </div>
      <UpdateTasksModal 
      selectedTodoValue={selectedTodoValue} 
      selectedTodoDate={selectedTodoDate}
      selectedTodoReminder={selectedTodoReminder}
      selectedTodoRepeat={selectedTodoRepeat}
      selectedTodoId={selectedTodoId} 
      isModalOpen={isModalOpen} 
      handleGetTodos={handleGetTodos} 
      setIsModalOpen={setIsModalOpen}/>
    </div>
  )
}

export default TasksPage