import React from 'react'

const Repeat = ({repeat ,setRepeat,setIsRepeatOpen , Updatedrepeat , setUpdatedRepeat}) => {

  const selectDaily = ()=>{
    setRepeat("daily")
  }

  const selectEveryWeek = ()=>{
    setRepeat("every week")
  }

  const selectEveryMonth = ()=>{
    setRepeat("every Month")
  }
  return (
    <div>
        <div className='bg-slate-200 w-44 z-10 h-52 flex flex-col absolute left-12'>

{/* the top */}
            <div className='w-full border-b-2 border-zinc-100 h-16 flex justify-center items-center'>
                <div>Repeat</div>
            </div>
{/* the middle */}
            <div className='w-full h-full border-y border-zinc-100 flex flex-col 10  '
            >
                <div 
                onClick={()=>{
                  setIsRepeatOpen(false)
                  selectDaily()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  daily
                </div>

                <div 
                onClick={()=>{
                  setIsRepeatOpen(false)
                  selectEveryWeek()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  every week
                </div>

                <div 
                onClick={()=>{
                  setIsRepeatOpen(false)
                  selectEveryMonth()
                }}
                className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  every month
                </div>

            </div>


        </div>
    </div>
  )
}

export default Repeat