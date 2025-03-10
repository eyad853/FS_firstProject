import React, { useEffect, useState } from 'react'
import { VscSearch } from "react-icons/vsc";
import { CiSettings } from "react-icons/ci";
import { useRef } from 'react';
import Settings from '../pops/settings/Settings';

const Nav = ({setIsLightOrDark , setSearchTerm}) => {
  const [isSettingsOpen , setIsSettingsOpen] = useState(false)
  const containerRef = useRef(null)
  
  const handleSearch=({target})=>{
    setSearchTerm(target.value)
  }

  useEffect(()=>{
    const handleClickout = (e)=>{
      if(containerRef.current && !containerRef.current.contains(e.target)){
        setIsSettingsOpen(false)
      }

    }
    document.addEventListener("click" , handleClickout)

    return ()=>{
      document.removeEventListener("click" , handleClickout)
    }

  },[])

  const toggleSettings = ()=>{
    setIsSettingsOpen(!isSettingsOpen)
    }

const ref = useRef(null)
const handleFocus=()=>{
  ref.current.focus()
}




  return (
    <div className=' relative' >
        <div className='bg-gradient-to-tl from-slate-950 to-slate-800 w-screen h-14 flex items-center justify-between text-white'>
            <div className='ml-10 font-bold cursor-pointer hover:underline'>
                TO DO
            </div>

{/* search */}
            <div 
            className='w-96 h-8 relative rounded-md outline-none text-black cursor-pointer bg-white flex flex-row items-center '
             onClick={handleFocus} >

              <div className='flex items-center justify-center  transition-all duration-150 h-full w-10 '>
                <VscSearch  className=''/>
              </div>

              <div>
                <input type="text" onChange={handleSearch} className='w-full h-full outline-none text-black cursor-pointer'ref={ref} />
              </div>

            </div>

{/* right part */}
            <div className=' flex items-center h-full ' ref={containerRef}>  

              <div className='hover:bg-blue-800 transition-all duration-150 text-2xl flex items-center w-40  h-full  justify-center' onClick={(e)=>{
                toggleSettings()
                e.stopPropagation()
              }}>
              <CiSettings  className='cursor-pointer'/>
              </div>

            </div>
        </div>
{isSettingsOpen&&<Settings setIsLightOrDark={setIsLightOrDark} />}
    </div>
  )
}

export default Nav