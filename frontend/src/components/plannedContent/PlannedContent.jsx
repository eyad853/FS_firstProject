import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import TheMainHead from '../TheMainHead';
import Make_a_ToDo from '../Make_a_ToDo';
import { CgCalendarDates } from "react-icons/cg";
import PlannedTodos from '../otherPagesTodos/PlannedTodos';
import Make_a_Planned_ToDo from '../MakingTodos/Make_a_Planned_Todo';



const PlannedContent = ({
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
       icon={<CgCalendarDates />} 
       title="Planned"  
       titleColor="black"/>

       <Make_a_Planned_ToDo 
       todoValue={todoValue} 
       setTodoValue={setTodoValue}/>

       <PlannedTodos 
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

export default PlannedContent