import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsPerson } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Logo from "../../../public/rentcar1.png"
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Link from 'next/link'
import { RxCross2 } from "react-icons/rx";
import Buttons from '../buttons';
import { toast } from 'react-toastify';
const Navbar = () => {
    const [isAdmin, setIsAdmin] = useState('')
    const [menuOpen, setMenuOpen] = useState(true)
    const toggleButtton = () => {
        setMenuOpen(!menuOpen)

    }

    const getData = localStorage.getItem('username')
    useEffect(() => {
        setIsAdmin(getData)

    }, [getData])
    const onClear = () => {
        localStorage.clear()
        toast.success('Logout successfully')
    }

    return (
        <>
            {/* py-6 */}
            <div className='flex bg-[#ffffff]  px-[27px] '>
                <div className={` sm:w-[40%] lg:w-[20%] flex items-center gap-10 justify-start`} >
                    {/* sidebar */}

                    <div className={`    lg:hidden`} >
                        <div    >
                            <div onClick={toggleButtton} className={``}>
                                <HiMiniBars3BottomLeft className={` text-3xl text-[#ffae46]`} />
                            </div>
                        </div>

                        <div id='mysidebar' className={`   ${menuOpen ? 'block' : 'hidden'}  `} >
                            {/* step1 */}
                            <div className='bg-white py-4 px-2 flex items-center justify-between '>
                                <div>
                                    <Image src={Logo} className=' w-[160px] h-[90px] ' />
                                </div>
                                <div onClick={toggleButtton} className={` text-[#ffae46] font-[600] text-2xl`}>
                                    <RxCross2 className='text-[#ffae46]' />
                                </div>

                            </div>
                            {/* step2 */}

                            <div>
                                <ul className=' text-white  font-FiraSans '>
                                    <li className='hover:text-[#ffae46]'>
                                        <Link href={'/'} className='flex items-center justify-between border-b-white border-[1px] px-3 py-4'> Home <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                                    </li>
                                    <li className='hover:text-[#ffae46]'>
                                        <Link href={'about'} className='flex items-center justify-between border-b-white border-[1px] px-3 py-4  '> About <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                                    </li>
                                    <li className='hover:text-[#ffae46]'>
                                        <Link href={'contact'} className='flex items-center justify-between border-b-white border-[1px] px-3 py-4'> Contact <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                                    </li>
                                    <li className='hover:text-[#ffae46]'>
                                        <Link href={'product'} className='flex items-center justify-between border-b-white border-[1px] px-3 py-4' > Product <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                                    </li>
                                </ul>




                                {/* buttonns */}
                                <div className='mt-5 pl-2'>
                                    <Buttons FirstIcon={<BsPerson />}
                                        Style={'  border-[1px] border-white hover:bg-white hover:text-[#ffae46] bg-black text-white '}
                                        Content={'Sign In'} />

                                    <Buttons FirstIcon={<FaLock />}
                                        Style={'  bg-[#ffae46] hover:bg-white  mt-3 text-white hover:text-[#ffae46]  hover:border-[1px] border-black '}
                                        Content={'Sign Up'} />
                                </div>
                                {/* <p className=' px-3 py-4 text-[16px] font-[500] font-FiraSans   border-b-[1px] border-white  flex gap-2  items-center  text-white hover:text-[#ffae46]  '> <BsPerson className='text-[16px] font-[500]' /> Sign In</p>

<p className='pl-2 pt-2 text-[16px] font-[500]  font-FiraSans border-b-[1px] border-black  flex gap-2  items-center  text-white  hover:text-[#ffae46] '><FaLock className='text-[16px] font-[500]' /> Sign Up</p> */}
                            </div>








                            {/*  */}
                        </div>
                    </div>

                    {/*  */}
                    <div>
                        <Image src={Logo} className=' w-[208px] h-[100px] ' />
                    </div>
                </div>

                <div className=' hidden  lg:flex justify-center items-center w-[50%] 2xl:w-[60%] '>
                    <ul className='flex space-x-12 text-[16px] font-[500] font-FiraSans '>
                        <li className='hover:text-[#ffae46]'>
                            <Link href={'/'} className='flex items-center gap-1'> Home <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                        </li>
                        <li className='hover:text-[#ffae46]'>
                            <Link href={'about'} className='flex items-center gap-1  '> About <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                        </li>
                        <li className='hover:text-[#ffae46]'>
                            <Link href={'contact'} className='flex items-center gap-1'> Contact <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                        </li>
                        <li className='hover:text-[#ffae46]'>
                            <Link href={'product'} className='flex items-center gap-1' > Product <MdKeyboardArrowDown className='text-[20px] font-[500]' /> </Link>
                        </li>
                    </ul>
                </div>

                <div className='text-black sm:w-[60%] lg:w-[30%]  2xl:w-[20%] flex justify-end '>
                    <div className='hidden sm:flex gap-4 '>

                        {
                           !isAdmin ? <Buttons FirstIcon={<BsPerson />}
                                url={'/login_form'} Style={'  border-[1px] border-black hover:bg-white hover:text-black bg-black text-white '}
                                Content={'  Sign In '} />
                                : <Buttons Onclick={onClear} FirstIcon={<BsPerson />}
                                url={'/'}   Style={'  border-[1px] border-black hover:bg-white hover:text-black bg-black text-white '}
                                    Content={'  logout'} />

                        }
                        <Buttons FirstIcon={<FaLock />}
                            Style={'  bg-[#ffae46] hover:bg-white  text-white hover:text-[#ffae46]  hover:border-[1px] border-black '}
                            Content={'Sign Up'} />


                        {/* isAdmin ? 'logout' : */}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
