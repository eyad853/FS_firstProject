import React, { useState } from 'react'

const UpdatedDateList = ({setIsDateOpen  , setUpdatedDate}) => {

const selectToday = ()=>{
  const today = new Date()
  const formattedDate = today.toLocaleDateString('en-CA');
  setUpdatedDate(formattedDate)
}

const selectTomorrow = ()=>{
 const today = new Date()
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1)
  const formattedDate = tomorrow.toLocaleDateString('en-CA');
  setUpdatedDate(formattedDate)
}

const selectNextWeek = ()=>{
  const today = new Date()
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7)
  const formattedDate = nextWeek.toLocaleDateString('en-CA');
  setUpdatedDate(formattedDate)

}


  return (
    <div>
        <div className='bg-slate-200 w-44 z-50 h-52 flex flex-col  absolute -left-10'>

{/* the top */}
            <div className='w-full border-b-2 border-zinc-100 h-16 flex justify-center items-center'>
                <div>Due</div>
            </div>
{/* the middle */}
            <div className='w-full h-full border-y border-zinc-100 flex flex-col 10  '
            >
                <div 
                onClick={()=>{
                  selectToday()
                  setIsDateOpen(false)
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  Today
                </div>

                <div 
                onClick={()=>{
                  selectTomorrow()
                  setIsDateOpen(false)
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  Tomorrow
                </div>

                <div 
                onClick={()=>{
                  selectNextWeek()
                  setIsDateOpen(false)
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  next week
                </div>

            </div>


        </div>
    </div>
  )
}

export default UpdatedDateList