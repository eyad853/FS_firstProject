import React from 'react'

const UpdateModalReminder = ({ setIsReminderOpen , setUpdatedReminder}) => {

  const selectLaterToday = ()=>{
    const today = new Date()
    const Later = new Date(today)
    Later.setHours(today.getHours() + 4)
    const formattedDate = Later.toLocaleDateString('en-CA');
    setUpdatedReminder(formattedDate)
  }
  
  const selectNextWeek = ()=>{
    const today = new Date()
    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + 7)
    const formattedDate = nextWeek.toLocaleDateString('en-CA');
    setUpdatedReminder(formattedDate)
  
  }

  const selectNextMonth = ()=>{
    const today = new Date()
     const nextMonth = new Date(today);
     nextMonth.setMonth(today.getMonth() + 1)
     const formattedDate = nextMonth.toLocaleDateString('en-CA');
     setUpdatedReminder(formattedDate)
   }


  return (
    <div>
        <div className='bg-slate-200 w-44 z-50 h-52 flex flex-col absolute'>

{/* the top */}
            <div className='w-full border-b-2 border-zinc-100 h-16 flex justify-center items-center'>
                <div>Reminder</div>
            </div>
{/* the middle */}
            <div className='w-full h-full border-y border-zinc-100 flex flex-col 10  '
            >
                <div 
                onClick={()=>{
                  setIsReminderOpen(false)
                  selectLaterToday()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  later today 
                </div>

                <div 
                onClick={()=>{
                  setIsReminderOpen(false)
                  selectNextWeek()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  next week
                </div>

                <div 
                onClick={()=>{
                  setIsReminderOpen(false)
                  selectNextMonth()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  next month
                </div>

            </div>


        </div>
    </div>
  )
}

export default UpdateModalReminder