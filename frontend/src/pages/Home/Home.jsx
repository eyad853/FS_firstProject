import React, { useState } from 'react'
import Nav from '../../components/Nav/Nav'
import Sidebar from '../../components/Sidebar/Sidebar'
import MainPage from '../../components/MainPage/MainPage'
import UpdateModal from '../../components/Modal/Modal'

const Home = () => {

    const [isOpen , setIsOpen]=useState(true)
    const [isModalOpen , setIsModalOpen]=useState(false)
    const [selectedTodoId , setSelectedTodoId]=useState(null)
    const [selectedTodoValue , setSelectedTodoValue] = useState("")
    const [selectedTodoDate , setSelectedTodoDate] = useState("")
    const [selectedTodoReminder , setSelectedTodoReminder] = useState("")
    const [selectedTodoRepeat , setSelectedTodoRepeat] = useState("")
    const [todoValue , setTodoValue]=useState("")
    const [searchTerm , setSearchTerm]=useState("")

const toggleLeftSideBar=()=>{
  setIsOpen((prevState)=>{
    return !prevState
  })
}

const handleGetTodos = async()=>{
  try{
      const response = await axios.get("https://fs-first-projectserverapi.vercel.app/api/todo/get-All-Todos")
      setApiResponse(response.data.data)
  }catch(error){
      console.log(error);
  }
}

  return (
    <div className='flex flex-col w-screen    h-screen'>
      {/* nav */}
      <Nav setSearchTerm={setSearchTerm}/>
      <div className='flex w-full'>

        {isOpen&&<Sidebar 
        isOpen={isOpen} 
        toggleLeftSideBar={toggleLeftSideBar}/>}

        <MainPage 
        searchTerm={searchTerm}
        setSelectedTodoValue={setSelectedTodoValue}
        setSelectedTodoDate={setSelectedTodoDate}
        setSelectedTodoReminder={setSelectedTodoReminder}
        setSelectedTodoRepeat={setSelectedTodoRepeat}
        todoValue={todoValue} 
        setTodoValue={setTodoValue} 
        setSelectedTodoId={setSelectedTodoId} 
        isOpen={isOpen} 
        handleGetTodos={handleGetTodos} 
        toggleLeftSideBar={toggleLeftSideBar} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}/>

        

      </div>
      <UpdateModal 
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

export default Home