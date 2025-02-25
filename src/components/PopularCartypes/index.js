

import React from 'react'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'
import Crossover from "../../../public/Crossover.png"
import FamilyMPV from "../../../public/FamilyMPV.png"
import Sedan from "../../../public/Sedan.png"
import SportsCoupe from "../../../public/SportsCoupe.png"
import Pickup from "../../../public/Pickup.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from '../buttons';
import GeneralHeading from '../typography/general-heading';
import SubHeading from '../typography/sub-heading';
import Paragraph from '../paragraph';
const PopularMyCartypes = () => {
    return (
        <>
            <div className=' py-10 md:py-20  bg-[#fcfbfb] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] xl:w-[60%]'>

                        <div className='mb-10 text-center'>
                            <GeneralHeading  Content={'Most Popular Cartypes'} />
                            <Image src={Titlehead} className=' mx-auto py-3 ' />
                            <Paragraph Style={' text-[#676767]'} Content={'Most popular worldwide Car Category due to their  reliability, affordability, and features.'} />


                        </div>

                        <Swiper
                            // install Swiper modules
                            modules={[Navigation,]}
                            spaceBetween={15}
                            slidesPerView={4}
                            autoplay={true}
                            //   ihdr auto play lagana ha 
                            loop={true}


                            onSwiper={(swiper) => console.log(swiper)}
                            onSlideChange={() => console.log('slide change')}
                        >


                            <div className='flex justify-between  '>


                                <SwiperSlide>
                                    <div className='w-[240px]  bg-[#ffffff] px-[30px] hover:text-white py-[30px] hover:bg-[#398a98] text-center ' id='box-Shadow'>
                                        <div className=''>
                                            <Image src={Crossover} className='text-center mx-auto w-[90px] h-[40px] object-cover ' />
                                        </div>
                                        <h2 className='mt-[20px] mb-[5px] text-[18px] font-semibold'> Crossover </h2>
                                        <p className='text-sm'> 15 Cars  </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[240px]  bg-[#ffffff] px-[30px] hover:text-white py-[30px] hover:bg-[#398a98] text-center ' id='box-Shadow'>
                                        <div className=''>
                                            <Image src={FamilyMPV} className='text-center mx-auto w-[90px] h-[40px] object-cover ' />
                                        </div>
                                        <h2 className='mt-[20px] mb-[5px] text-[18px] font-semibold'> Crossover </h2>
                                        <p className='text-sm'> 15 Cars  </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[240px]  bg-[#ffffff] px-[30px] hover:text-white py-[30px] hover:bg-[#398a98] text-center ' id='box-Shadow'>
                                        <div className=''>
                                            <Image src={Sedan} className='text-center mx-auto w-[90px] h-[40px] object-cover ' />
                                        </div>
                                        <h2 className='mt-[20px] mb-[5px] text-[18px] font-semibold'> Crossover </h2>
                                        <p className=' text-sm'> 15 Cars  </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[240px]  bg-[#ffffff] px-[30px]  hover:text-white py-[30px] hover:bg-[#398a98] text-center ' id='box-Shadow'>
                                        <div className=''>
                                            <Image src={SportsCoupe} className='text-center mx-auto w-[90px] h-[40px] object-cover ' />
                                        </div>
                                        <h2 className='mt-[20px] mb-[5px] text-[18px] font-semibold'> Crossover </h2>
                                        <p className=' text-[14px] '> 15 Cars  </p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='w-[240px]  bg-[#ffffff] px-[30px] py-[30px] hover:text-white hover:bg-[#398a98] text-center ' id='box-Shadow'>
                                        <div className=''>
                                            <Image src={Pickup} className='text-center mx-auto w-[90px] h-[40px] object-cover ' />
                                        </div>
                                        <h2 className='mt-[20px] mb-[5px] text-[18px] font-semibold '>Pickup</h2>
                                        <p className='text-[14px]'> 15 Cars  </p>
                                    </div>
                                </SwiperSlide>

                            </div>


                        </Swiper>

                    </div>


                </div>
                <div className='flex justify-center  mt-10'>
                    <Buttons Style={' bg-white border-2 border-black hover:bg-[#fe9307] hover:border-[#fe9307] hover:text-white font-semibold '} Content={'View all Cars'}
                        LastIcon={<FaArrowRightLong />} />
                  
                </div>
            </div>


        </>
    )
}

export default PopularMyCartypes

