import Image from 'next/image'
import React from 'react'
import { BsDatabaseFillLock } from "react-icons/bs";
import Titlehead from "../../../public/titlehead.png"
import { MdOutlineBroadcastOnHome } from "react-icons/md";
import { IoCarSportOutline } from "react-icons/io5";
import Sidebanner from "../../../public/sidebanner.png"
import GeneralHeading from '../typography/general-heading';
import SubHeading from '../typography/sub-heading';
import Paragraph from '../paragraph';
import ChooseProductData from '../chooseproductdata';
const WorkHome = () => {
    return (
        <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
            <div className='flex justify-center '>
                <div className='w-[70%]'>
                    <div className=' text-center'>

                        <GeneralHeading  Content={'Why Choose AutoSphere?'} />
                        <Image src={Titlehead} className=' mx-auto py-3 ' />
                        <Paragraph Style={'text-[18px] text-[#676767]'}  Content={'From premium luxury cars like Audi to eco-friendly and high-tech innovations like Tesla, we cater to all your automotive needs.'} />
                        
                      
                    </div>
                    <div className=''>
                        <div className=' lg:flex    text-center py-10 gap-10'>
                            {/* 1 */}
                            <ChooseProductData border={'border-b-2 border-[#127384]'} btnBorder={'border-2 border-dashed border-[#127384]'}
                             icon= {< BsDatabaseFillLock className='text-7xl rounded-full px-3 py-2 bg-[#127384] text-white ' />} 
                              heading={'1. Premium Selection of Cars'}

                              Description ={'At AutoSphere, we pride ourselves on offering a handpicked collection of top brands like Audi, Hyundai, Toyota, and Tesla. Whether you are searching for luxury, performance, or eco-friendly innovation, we ve got you covered.'} />
                              {/* 2 */}
                              <ChooseProductData border={'border-b-2 border-[#fe9307]'}  btnBorder={'border-2 border-dashed border-[#fe9307]'}
                              icon={ <MdOutlineBroadcastOnHome className='text-7xl rounded-full px-4 py-2 bg-[#fe9307] text-white ' />}
                              heading={'2. Unbeatable Quality Assurance'}
                              Description={'Every car in our inventory undergoes comprehensive quality checks to ensure it meets the highest standards. When you choose AutoSphere, you’re choosing excellence and peace of mind.'}
                              />
                              {/* 3 */}
                              <ChooseProductData border={'border-b-2 border-black'} btnBorder={'border-2 border-dashed border-black'}
                              icon={<IoCarSportOutline className='text-7xl rounded-full px-4 py-2 bg-black text-white ' />
                              }
                              heading={'3. Transparent Pricing'}
                              Description={'Say goodbye to hidden charges! We offer competitive and transparent pricing, so you know exactly what you’re paying for. Your dream car is just a step away without breaking the bank.'}
                              />

       
                            
               

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkHome
