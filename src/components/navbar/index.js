import Image from 'next/image'
import React, { useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../../public/rentcar1.jpg"
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(true)
    const toggleButtton = () => {
      setMenuOpen(!menuOpen)
      
    }
 
  return (
   <>
   <div className='flex bg-[#ffffff] py-6 px-[27px] '>
    <div className= {` sm:w-[40%] lg:w-[20%] flex items-center gap-10 justify-start`} >
        {/* sidebar */}
        
        <div className={`    lg:hidden`} >
<div    >
    <div onClick={toggleButtton} className={``}>
    <HiMiniBars3BottomLeft className= {` text-3xl text-[#ffae46]`}  />  
    </div>
    </div>
   
    <div id=  'mysidebar' className={`   ${menuOpen ? 'block' : 'hidden'}  `} >
{/* step1 */}
        <div className='bg-white py-4 px-2 flex items-center justify-between '>
            <div>
  <Image src={Logo} className=' w-[160px] h-[26px] ' />
  </div>
  <div onClick={toggleButtton} className= {` text-[#ffae46] font-[600] text-2xl`}>  
  <RxCross2 className='text-[#ffae46]'  />
  </div>
 
  </div>
{/* step2 */}

<div>
<ul className=' text-white  font-FiraSans '>
            <li className='hover:text-[#ffae46]'>
                <Link href={'/'} className='flex items-center justify-between border-b-white border-[1px] px-3 py-4'> Home <MdKeyboardArrowDown  className='text-[20px] font-[500]'/> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'about'}  className='flex items-center justify-between border-b-white border-[1px] px-3 py-4  '> About <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'contact'}  className='flex items-center justify-between border-b-white border-[1px] px-3 py-4'> Contact <MdKeyboardArrowDown className='text-[20px] font-[500]'/> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'gallery'}  className='flex items-center justify-between border-b-white border-[1px] px-3 py-4' > Gallery <MdKeyboardArrowDown  className='text-[20px] font-[500]'/> </Link>
            </li>
        </ul>




    {/* buttonns */}
<p className=' px-3 py-4 text-[16px] font-[500] font-FiraSans   border-b-[1px] border-white  flex gap-2  items-center  text-white hover:text-[#ffae46]  '> <BsPerson className='text-[16px] font-[500]' /> Sign In</p>

<p className='pl-2 pt-2 text-[16px] font-[500]  font-FiraSans border-b-[1px] border-black  flex gap-2  items-center  text-white  hover:text-[#ffae46] '><FaLock className='text-[16px] font-[500]' /> Sign Up</p>
</div>
 {/*  */}
    </div>
    </div>
    
    {/*  */}
    <div>
    <Image src={Logo} className=' w-[208px] h-[35px] ' />
    </div>  
    </div>

    <div className=' hidden  lg:flex justify-center items-center w-[50%] 2xl:w-[60%] '>
        <ul className='flex space-x-12 text-[16px] font-[500] font-FiraSans '>
            <li className='hover:text-[#ffae46]'>
                <Link href={'/'} className='flex items-center gap-1'> Home <MdKeyboardArrowDown  className='text-[20px] font-[500]'/> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'about'}  className='flex items-center gap-1  '> About <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'contact'}  className='flex items-center gap-1'> Contact <MdKeyboardArrowDown className='text-[20px] font-[500]'/> </Link>
            </li>
            <li className='hover:text-[#ffae46]'>
                <Link href={'gallery'}  className='flex items-center gap-1' > Gallery <MdKeyboardArrowDown  className='text-[20px] font-[500]'/> </Link>
            </li>
        </ul>
    </div>

    <div className='text-black sm:w-[60%] lg:w-[30%]  2xl:w-[20%] flex justify-end '>
        <div className='hidden sm:flex gap-4 '>
        <button className='px-1 sm:px-6  py-2 text-[16px] font-[500] font-FiraSans rounded-md  border-[1px] border-black  flex gap-2  items-center bg-black text-white  hover:bg-white hover:text-black '> <BsPerson className='text-[16px] font-[500]' /> Sign In</button>

        <button className='px-1 sm:px-6 py-2 text-[16px] font-[500] rounded-md font-FiraSans hover:border-[1px] border-black  flex gap-2  items-center   bg-[#ffae46] text-white hover:bg-white hover:text-[#ffae46] '><FaLock className='text-[16px] font-[500]' /> Sign Up</button>
        </div>
    </div>
   </div>
  
   </>
  )
}

export default Navbar
