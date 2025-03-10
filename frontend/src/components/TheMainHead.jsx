import React from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";

const TheMainHead = ({title , titleColor , icon}) => {

    const textColorClass = titleColor === "blue" ? "text-blue-500" : "text-black"
  return (
    <div className=''>
        <div className='w-full h-20  flex justify-start text-white'>
            <div className=' w-80 flex items-center text gap-10  ml-10'>
                <div className={`text-xl font-medium flex items-center gap-2 ${textColorClass}`}>
                    <div className='text-3xl text-white'>
                {icon}
                    </div>
                    <div className='text-white'>
                {title}
                    </div>
                </div>

                <div className='flex gap-7'>
                    <div className='flex items-center gap-1 mb-3 hover:bg-white rounded-md p-2'>
                        <div className=''>
                        <BsFillGridFill />
                        </div>
                        Grid
                    </div>

                    <div className='flex items-center gap-1 mb-3 hover:bg-white rounded-md p-2'>
                        <div className=''>
                        <CiCircleList />
                        </div>
                        List
                    </div>

                </div>
            </div>

            
        </div>
    </div>
  )
}

export default TheMainHead