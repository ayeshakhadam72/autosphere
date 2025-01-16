


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
                            <p className='text-[18px] text-white '>Discover what our customers have think about us</p>
                        </div>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar, A11y]}
                                spaceBetween={0}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                onSwiper={(swiper) => console.log(swiper)}
                                onSlideChange={() => console.log('slide change')}
                                 className="custom-swiper"
                            >

                                <SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                <div className='px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%] '>

<div className='mb-[15px] flex justify-between items-center '>
    <div className='flex gap-2'>
        {/* 1 */}
        <div >
            <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
        </div>
        {/* 2 */}
        <div>
            <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
            <p>Nevada, USA</p>
        </div>

    </div>
    {/* 3 */}

    <div>
        <Image src={Quote} className=' w-[28px] h-[28px] ' />
    </div>

</div>
<p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

<p className='flex gap-2 items-center'>
    <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
    <span className='  text-[14px] '> (5.0) </span>

</p>
                                </div>

                               <div className='mt-5 sm:mt-0 px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>

                                        <div className='mb-[15px] flex justify-between items-center '>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div >
                                                    <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>

                                            </div>
                                            {/* 3 */}

                                            <div>
                                                <Image src={Quote} className=' w-[28px] h-[28px] ' />
                                            </div>

                                        </div>
                                        <p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

                                        <p className='flex gap-2 items-center'>
                                            <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
                                            <span className='  text-[14px] '> (5.0) </span>

                                        </p>
                                        </div>
                                        {/*  */}
 
                                        </div>
                                        </SwiperSlide>
{/* ==============================================================2 */}
<SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                <div className='px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%] '>

<div className='mb-[15px] flex justify-between items-center '>
    <div className='flex gap-2'>
        {/* 1 */}
        <div >
            <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
        </div>
        {/* 2 */}
        <div>
            <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
            <p>Nevada, USA</p>
        </div>

    </div>
    {/* 3 */}

    <div>
        <Image src={Quote} className=' w-[28px] h-[28px] ' />
    </div>

</div>
<p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

<p className='flex gap-2 items-center'>
    <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
    <span className='  text-[14px] '> (5.0) </span>

</p>
                                </div>

                               <div className='mt-5 sm:mt-0 px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>

                                        <div className='mb-[15px] flex justify-between items-center '>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div >
                                                    <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>

                                            </div>
                                            {/* 3 */}

                                            <div>
                                                <Image src={Quote} className=' w-[28px] h-[28px] ' />
                                            </div>

                                        </div>
                                        <p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

                                        <p className='flex gap-2 items-center'>
                                            <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
                                            <span className='  text-[14px] '> (5.0) </span>

                                        </p>
                                        </div>
                                        {/*  */}
 
                                        </div>
                                        </SwiperSlide>
{/* ==============================================================3 */}
<SwiperSlide>
                                <div className='sm:flex gap-4 my-10'>

                                <div className='px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%] '>

<div className='mb-[15px] flex justify-between items-center '>
    <div className='flex gap-2'>
        {/* 1 */}
        <div >
            <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
        </div>
        {/* 2 */}
        <div>
            <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
            <p>Nevada, USA</p>
        </div>

    </div>
    {/* 3 */}

    <div>
        <Image src={Quote} className=' w-[28px] h-[28px] ' />
    </div>

</div>
<p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

<p className='flex gap-2 items-center'>
    <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
    <span className='  text-[14px] '> (5.0) </span>

</p>
                                </div>

                               <div className='mt-5 sm:mt-0 px-5 py-5  bg-white hover:bg-[#127384] hover:text-white rounded-lg sm:w-[50%]'>

                                        <div className='mb-[15px] flex justify-between items-center '>
                                            <div className='flex gap-2'>
                                                {/* 1 */}
                                                <div >
                                                    <Image src={Girl1} className=' rounded-full w-[54px] h-[54px] border-white border-2 ' />
                                                </div>
                                                {/* 2 */}
                                                <div>
                                                    <p className='mb-[5px] text-[22px] sm:text-[20px] md:text-[25px] font-[500] '>Laverne Marier</p>
                                                    <p>Nevada, USA</p>
                                                </div>

                                            </div>
                                            {/* 3 */}

                                            <div>
                                                <Image src={Quote} className=' w-[28px] h-[28px] ' />
                                            </div>

                                        </div>
                                        <p className='mb-[24px]'>As a frequent business traveller, I rely on Dreams rent for all my needs. Their wide selection of vehicles, convenient locations, and competitive prices make them my go-to choice every time. Plus, their customer service is top-notch!</p>

                                        <p className='flex gap-2 items-center'>
                                            <span className='flex  text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
                                            <span className='  text-[14px] '> (5.0) </span>

                                        </p>
                                        </div>
                                        {/*  */}
 
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
