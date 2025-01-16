import Image from 'next/image'
import React from 'react'
import { BsDatabaseFillLock } from "react-icons/bs";
import Titlehead from "../../../public/titlehead.png"
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import Sidebanner from "../../../public/sidebanner.png"
const WorkHome = () => {
    return (
        <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
            <div className='flex justify-center '>
                <div className='w-[70%]'>
                    <div className=' text-center'>
                        <h2 className='text-[36px] font-[700] '>Why Choose AutoSphere?</h2>
                        <Image src={Titlehead} className=' mx-auto py-3 ' />
                        <p className='text-[18px] text-[#676767]'>From premium luxury cars like Audi to eco-friendly and high-tech innovations like Tesla, we cater to all your automotive needs.</p>
                    </div>
                    <div className=''>
                        <div className=' lg:flex    text-center py-10 gap-10'>
                            {/* 1 */}

                            <div className=' border-b-2 border-[#127384] px-5 py-5'>
                                <div>
                                    <div>
                                        <button className=' border-2 border-dashed border-[#127384] rounded-full px-3 py-3  '>
                                            <BsDatabaseFillLock className='text-7xl rounded-full px-3 py-2 bg-[#127384] text-white ' />
                                        </button>
                                    </div>

                                    <div>
                                        <h1 className='text-[24px] font-[600] pt-8'>1. Premium Selection of Cars</h1>
                                        <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>At AutoSphere, we pride ourselves on offering a handpicked collection of top brands like Audi, Hyundai, Toyota, and Tesla. Whether you're searching for luxury, performance, or eco-friendly innovation, we’ve got you covered.</p>
                                    </div>
                                </div>
                            </div>
                            {/* 2 */}

                            <div className=' border-b-2 border-[#fe9307] px-5 py-5'>
                                <div>
                                    <div>
                                        <button className=' border-2 border-dashed border-[#fe9307] rounded-full px-3 py-3  '>
                                            <MdOutlineBroadcastOnHome className='text-7xl rounded-full px-4 py-2 bg-[#fe9307] text-white ' />
                                        </button>
                                    </div>

                                    <div>
                                        <h1 className='text-[24px] font-[600] pt-8'>2. Unbeatable Quality Assurance</h1>
                                        <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>Every car in our inventory undergoes comprehensive quality checks to ensure it meets the highest standards. When you choose AutoSphere, you’re choosing excellence and peace of mind.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 3 */}
                            <div className=' border-b-2 border-black px-5 py-5'>
                                <div>
                                    <div >
                                        <button className=' border-2 border-dashed border-black rounded-full px-3 py-3  '>
                                            <IoCarSportOutline className='text-7xl rounded-full px-4 py-2 bg-black text-white ' />
                                        </button>
                                    </div>

                                    <div>
                                        <h1 className='text-[24px] font-[600] pt-8'>3. Transparent Pricing</h1>
                                        <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>Say goodbye to hidden charges! We offer competitive and transparent pricing, so you know exactly what you’re paying for. Your dream car is just a step away without breaking the bank.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHome
