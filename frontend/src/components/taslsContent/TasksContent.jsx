import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import TheMainHead from '../TheMainHead';
import Make_a_ToDo from '../Make_a_ToDo';
import { GoHome } from "react-icons/go";
import TasksTodos from '../otherPagesTodos/TasksTodos';
import Make_a_Task_ToDo from '../MakingTodos/Make_a_Task_Todo';


const TasksContent = ({
setSelectedTodoValue,
setSelectedTodoDate,
setSelectedTodoReminder,
setSelectedTodoRepeat,
todoValue,
setTodoValue,
setSelectedTodoId,
isOpen,
handleGetTodos,
toggleLeftSideBar,
isModalOpen,
setIsModalOpen,
}) => {
  return (
    <div className={`bg-gradient-to-tr from-slate-950 to-slate-600 h-screen w-full overflow-y-auto overflow-x-hidden`}>
    {!isOpen&& <GiHamburgerMenu 
    size={25}  onClick={toggleLeftSideBar} 
    className='relative top-5 mr-10 ml-6 inline-block'/>}

     <div className='inline-block w-full'>
       <TheMainHead 
       icon={<GoHome />} 
       title="Tasks"  
       titleColor="black"/>

       <Make_a_Task_ToDo 
       todoValue={todoValue} 
       setTodoValue={setTodoValue}/>

       <TasksTodos 
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

export default TasksContent




// ____________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________