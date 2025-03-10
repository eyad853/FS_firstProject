import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FiSun } from "react-icons/fi";
import { MdOutlineLabelImportant } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { GoHome } from "react-icons/go";

const Sidebar = ({isOpen ,toggleLeftSideBar , isLight}) => {

  



  return (

    <div className=''>
            <div className={`h-screen ${isOpen?"w-72  ":"w-0 "} bg-gradient-to-tl text-white  from-slate-950 to-slate-600 flex flex-col  overflow-hidden`}>
                    <GiHamburgerMenu size={25} onClick={toggleLeftSideBar} className='mt-7 mb-0 ml-6 '/>


                    <div className='flex flex-col mt-4'>

                    <Link 
                    to={"/"} 
                    className={`w-full justify-center h-10    hover:bg-slate-800 transition-all duration-200 flex items-center `}
                    >
                      <div className='absolute left-16 font-extralight flex items-center gap-2'>
                        <FiSun />
                        <div className='flex items-center justify-center mb-1 font-bold'>
                        My Days
                        </div>
                      </div>
                    </Link>

                    <Link 
                    to={"/important"} 
                    className={`w-full justify-center h-10  hover:bg-slate-800 transition-all duration-200 flex items-center `}
                    
                    >
                      <div className='absolute left-16 font-extralight flex items-center gap-2'>
                        <MdOutlineLabelImportant />
                        <div className='flex items-center justify-center mb-1 font-bold'>
                        Important
                        </div>
                      </div>
                    </Link>

                    <Link to={"/planned"}
                    className={`w-full justify-center h-10  hover:bg-slate-800 transition-all duration-200 flex items-center `}>
                      <div className='absolute left-16 font-extralight flex items-center gap-2'>
                        <CgCalendarDates />
                        <div className='flex items-center justify-center mb-1 font-bold'>
                        Planned
                        </div>
                      </div>
                    </Link>


                    <Link to={"/tasks"}
                    className={`w-full justify-center h-10  hover:bg-slate-800 transition-all duration-200 flex items-center `}>
                      <div className='absolute left-16 font-extralight flex items-center gap-2'>
                      <GoHome />
                      <div className='flex items-center justify-center mb-1 font-bold'>
                        Tasks
                      </div>
                      </div>
                    </Link>
                    </div>

            </div>
    </div>
  )
}

export default Sidebar