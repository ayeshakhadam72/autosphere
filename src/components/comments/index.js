


import React from 'react'
import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'

import Girl1 from "../../../public/Girl1.jpg"
import Quote from "../../../public/quote.png"
import { RiStarSFill } from "react-icons/ri";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Comments = () => {
    return (
        <>
            <div className='bg-commentsbanner py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[90%] xl:w-[75%]'>
                        <div className=' text-center'>
                            <h2 className='text-[36px] font-[700] text-white '>What People say about us?</h2>
                            <Image src={Titlehead} className=' mx-auto py-3 ' />
                            <p className='text-[18px] text-white '>At AutoSphere, customer satisfaction is our top priority. We take pride in delivering exceptional service and high-quality vehicles to meet your unique needs. Here's what our happy customers have to say:</p>
                        </div>
                        <Swiper
                            // install Swiper modules
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={0}
                            slidesPerView={1}
                            autoplay={{
                                delay: 200, 
                                disableOnInteraction: false,
                            }}
                            className="custom-swiper"
                        >

                            <SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                    <div className='px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            AutoSphere has been my trusted partner for business travel. Their cars are always clean,
                                            reliable, and perfect for any occasion. Booking with them is always hassle-free!
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                    <div className='mt-5 sm:mt-0 px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            I’ve tried many rental services, but AutoSphere stands out for their excellent customer support
                                            and wide range of cars. I always feel valued as a customer with them.
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* ==============================================================2 */}
                            <SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                    <div className='px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            AutoSphere has truly exceeded my expectations. Their seamless process and reliable vehicles make every trip stress-free and enjoyable. I highly recommend them for both short and long journeys!
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                    <div className='mt-5 sm:mt-0 px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            I’ve been using AutoSphere for years, and they never disappoint. Their attention to detail and customer care make me feel valued every single time. Truly the best in the business!
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            {/* ============================================================== */}

                            <SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                    <div className='px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            From easy booking to smooth pickups, AutoSphere has always provided a stellar experience. Their vehicles are top-notch and always ready to hit the road without a hitch!
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                    <div className='mt-5 sm:mt-0 px-5 py-5 bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>
                                        <div className='mb-[15px] flex justify-between items-center'>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div>
                                                    <Image src={Girl1} className='rounded-full w-[54px] h-[54px] border-white border-2' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500]'>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>
                                            </div>
                                            {/* 3 */}
                                            <div>
                                                <Image src={Quote} className='w-[28px] h-[28px]' />
                                            </div>
                                        </div>
                                        <p className='mb-[24px]'>
                                            Whether for a road trip or a business meeting, AutoSphere has always had the perfect vehicle for me. Their exceptional service makes every journey a delight!
                                        </p>
                                        <p className='flex gap-2 items-center'>
                                            <span className='flex text-[#ff9307] font-[900] text-[16px]'>
                                                <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300' />
                                            </span>
                                            <span className='text-[14px]'> (5.0) </span>
                                        </p>
                                    </div>

                                </div>
                            </SwiperSlide>

                            ...

                        </Swiper>
                    </div>
                </div>
            </div>

        </>


    )
}

export default Comments
