import React from 'react'

const Settings = () => {
  return (
    <div>
        <div className='bg-white w-44 z-50 h-52 flex flex-col  absolute right-10 top-11 '>

{/* the top */}
            <div className='w-full border-b-2 border-zinc-100 h-16 flex justify-center items-center'>
                <div>Settings</div>
            </div>
{/* the middle */}
            <div className='w-full h-full border-y border-zinc-100 flex flex-col 10  '
            >
                <div className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                   Dark mode
                </div>

                <div className='flex items-center justify-center h-10  hover:bg-zinc-100'>
                  light mode
                </div>


            </div>


        </div>
    </div>
  )
}

export default Settings