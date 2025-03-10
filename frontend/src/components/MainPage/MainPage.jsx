import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import TheMainHead from '../TheMainHead';
import Make_a_ToDo from '../Make_a_ToDo';
import { FiSun } from "react-icons/fi";
import Todos from '../Todos/Todos';



const MainPage = ({
  setSelectedTodoDate,
  searchTerm,
  setSelectedTodoReminder,
  setSelectedTodoRepeat,
  setSelectedTodoValue,
  isOpen,
  toggleLeftSideBar,
  setIsModalOpen,
  isModalOpen,
  handleGetTodos,
  setSelectedTodoId,
  todoValue,
  setTodoValue}) => {

  
  return (
    <div className={`bg-gradient-to-tr from-slate-950 to-slate-600   h-screen w-full overflow-y-auto overflow-x-hidden`}>
     {!isOpen&& <GiHamburgerMenu 
     size={25}  onClick={toggleLeftSideBar} 
     className='relative text-white top-5 mr-10 ml-6 inline-block'/>}

      <div className='inline-block w-full'>
        <TheMainHead 
        icon={<FiSun />} 
        title="My Day"  
        titleColor="black"/>

        <Make_a_ToDo 
        todoValue={todoValue} 
        setTodoValue={setTodoValue}/>

        <Todos 
        searchTerm={searchTerm}
        handleGetTodos={handleGetTodos} 
        setSelectedTodoId={setSelectedTodoId} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen}
        setSelectedTodoValue={setSelectedTodoValue } 
        setSelectedTodoDate={setSelectedTodoDate}
        setSelectedTodoReminder={setSelectedTodoReminder}
        setSelectedTodoRepeat={setSelectedTodoRepeat}
        />
      </div>
    </div>
  )
}

export default MainPage