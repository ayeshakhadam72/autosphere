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
                        <h2 className='text-[36px] font-[700] '>How It Works</h2>
                        <Image src={Titlehead} className=' mx-auto py-3 ' />
                        <p className='text-[18px] text-[#676767]'>Booking a car rental is a straightforward process that <br /> typically involves the following steps</p>
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
                                <h1 className='text-[24px] font-[600] pt-8'>1. Choose Date & Locations</h1>
                                <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>Determine the date & location for your car rental. Consider factors such as your travel itinerary, pickup/drop-off locations (e.g., airport, city center), and duration of rental.</p>
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
                                <h1 className='text-[24px] font-[600] pt-8'>2. Pick-Up Locations</h1>
                                <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>Check the availability of your desired vehicle type for your chosen dates and location. Ensure that the rental rates, taxes, fees, and any additional charges.</p>
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
                                <h1 className='text-[24px] font-[600] pt-8'>3. Book your Car</h1>
                                <p className=' text-[16px] font-[400] pt-2 text-[#212529] '>Once you've found car rental option, proceed to make a reservation. Provide the required information, including your details, driver's license, contact info, and payment details.</p>
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
