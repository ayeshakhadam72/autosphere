import React from 'react'
import Titleehead from "../../../public/titlehead.png"
import Image from 'next/image'

import FastBooking from "../../../public/FastBooking.png"
import PickupLocation from "../../../public/PickupLocation.png"
import Satisfaction from "../../../public/Satisfaction.png"

const Whychoose = () => {
    return (
        <>
            <div className=' py-10 md:py-20  bg-[#f4f4f8] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] 2xl:w-[75%] '>
                        <div className=' text-center'>
                            <h2 className='text-[36px] font-[700] '>Why Choose Us</h2>
                            <Image src={Titleehead} className=' mx-auto py-3 ' />
                            <p className='text-[18px] text-[#676767] '>At AutoSphere, we strive to make your car-buying experience seamless and rewarding. From offering top-quality vehicles to delivering exceptional customer service, we are dedicated to exceeding your expectations at every step.</p>
                        </div>

                        {/*  */}
                        <div className='lg:flex  gap-10 my-10 '>
                            <div className='bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg ' id='box-Shadow ' >
                                <div className='  px-[40px] py-[40px] text-black hover:text-white '>

                                    <div className='bg-black hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
                                        <Image src={FastBooking} className='mx-auto  ' />
                                    </div>
                                    <p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '> Wide Range of Premium Cars</p>
                                    <p className='text-center'>We offer an extensive selection of vehicles from top brands like Audi, Toyota, Hyundai, and Tesla. Whether you seek luxury, reliability, or cutting-edge technology, we have the perfect car for you.</p>

                                </div>
                            </div>
                            {/*  */}
                            <div className=' my-10 lg:my-0 bg-white hover:bg-black hover:text-white lg:w-1/3  rounded-lg ' id='box-Shadow ' >
                                <div className='  px-[40px] py-[40px] text-black hover:text-white '>

                                    <div className='bg-[#127384] hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
                                        <Image src={PickupLocation} className='mx-auto  ' />
                                    </div>
                                    <p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '>Trusted Quality and Transparency</p>
                                    <p className='text-center'>Each car in our inventory is thoroughly inspected to ensure the highest quality standards. With clear and competitive pricing, you can trust us to provide honest and reliable service.</p>

                                </div>
                            </div>
                            {/*  */}
                            <div className='bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg ' id='box-Shadow ' >
                                <div className='  px-[40px] py-[40px] text-black hover:text-white '>

                                    <div className='bg-[#ffa633] hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
                                        <Image src={Satisfaction} className='mx-auto  ' />
                                    </div>
                                    <p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '>Exceptional Customer Support</p>
                                    <p className='text-center'>Our experienced team is always ready to guide you in choosing the right car. From personalized recommendations to post-purchase assistance, we’re here to make your journey smooth and stress-free.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychoose
