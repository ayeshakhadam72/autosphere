import Image from 'next/image'
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Bannercar from "../../../public/bannerhome.png"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Buttons from '../buttons';
import Heading from '../typography/heading';
import SubHeading from '../typography/sub-heading';
import FirstContentData from '../firstcontentreuse';
import HomeData from '../firstcontentreuse';
import Paragraph from '../paragraph';
const HomeBanner = () => {
    return (
        <>
            <div className='bg-banner bg-[#f2f7f6] py-[70px]  font-FiraSans flex items-center '>
                <div className='px-4 lg:px-0'>
                    <div className='flex gap-10  '>
                        {
                           HomeData.map((value) => {
                                return(
                                <div className='sm:pl-4 2xl:pl-0 lg:w-[55%] flex 2xl:justify-end '>
                                <div className='2xl:w-[60%] '>
                                                <button className='text-sm flex gap-2 bg-white py-2 sm:py-4 px-6 rounded-full '>
                                                    <span className='text-[#ffae46] text-sm md:text-[20px] '> <FaThumbsUp /> </span>
                                                   {value.banner.SubHeading}
                                                </button>
                
               
                                                <Heading ContentStyle={'text-[36px] text-[#ffae46]'} content={value.banner.heading.first} />
                                                
                                                <Heading ContentStyle={'text-[30px] text-black'} content={value.banner.heading.second} />

                                                <Paragraph Style={'text-[#676767] pb-6 '} Content={value.banner.Description} />
                                               
                
                                                <Buttons Style={' bg-white border-2 border-black hover:bg-[#fe9307] hover:border-[#fe9307] hover:text-white font-semibold '}
                                                 Content={value.banner.Button}
                                                IconStyle={'text-[16px] font-[500]'} LastIcon={<FaArrowRightLong />}   />
                                        
                                            </div>
                                </div>
                                
                                )
                            })
                        }
                      <div className='hidden lg:block  lg:w-[45%] '>
                                     <Image src= {Bannercar} className=' w-[626px] h-[406px] ' />
                                 </div>
                    </div>
                </div>
            </div>

            {/* second section */}
            <div className='  bg-[#fcfbfb] w-full md:flex md:justify-center'>
                <div className='mx-4 md:mx-0 font-FiraSans  bg-white rounded-xl  mt-[-40px] ' >
                    <div className=''>
                        <div className='py-[20px] px-[20px] lg:py-[30px] lg:px-[30px] 2xl:flex gap-5 '>
                            {/* 1 */}
                            <div className=' md:flex  md:gap-5'>
                                <div>
                                    <h2 className='text-[16px] font-[600] pb-3 '>Pickup Location</h2>
                                    <div className='flex items-center bg-[#F5F7F6] rounded-lg '>
                                        <span className='pl-2'><CiLocationOn className='text-xl font-[600]' /></span>
                                        <input type="text" placeholder=' Enter City, Airport, or Address' className='text-sm  py-4 bg-[#F5F7F6]
             w-[220px] rounded-lg' />
                                    </div>
                                </div>

                                {/* 2 */}
                                <div className='pt-5 md:pt-0'>
                                    <h2 className=' text-[16px] font-[600] pb-3 '>Pickup Date</h2>

                                    <div className='md:flex md:gap-5'>

                                        <div className='flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'>  <MdOutlineDateRange className='text-xl font-[600]' /> </span>
                                            {/* all input first ko chord k w-[150px] */}
                                            <input type="text" placeholder=' 04/11/2023' className='text-sm  py-4 bg-[#F5F7F6]  rounded-lg' />

                                        </div>
                                        <div className='mt-3 md:mt-0 flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'>  <MdOutlineAccessTime className='text-xl font-[600]' /></span>
                                            <input type="text" placeholder=' 10:11:22' className=' text-sm py-4 bg-[#F5F7F6]  rounded-lg' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='pt-5 2xl:pt-0'>
                                <h2 className='text-[16px] font-[600] pb-3 '>Return Date</h2>

                                <div className='md:flex md:gap-5'>
                                    <div className='flex items-center bg-[#F5F7F6] rounded-lg '>
                                        <span className='pl-2'><MdOutlineDateRange className='text-xl font-[600]' /></span>
                                        <input type="text" placeholder=' 04/11/2023' className='text-sm  py-4 bg-[#F5F7F6]  rounded-lg' />
                                    </div>

                                    <div className='my-3 md:my-0 flex items-center bg-[#F5F7F6] rounded-lg '>
                                        <span className='pl-2'>   <MdOutlineAccessTime className='text-xl font-[600]' /></span>
                                        <input type="text" placeholder=' 10:11:22' className=' text-sm py-4 bg-[#F5F7F6] rounded-lg' />
                                    </div>
                                    {/* btn */}
                                    <div>
                                    <Buttons FirstIcon={  <FaSearch /> }  Style={'hover:text-black rounded-xl text-white hover:border-2 border-black bg-[#fe9307] hover:bg-white 2xl:px-10 px-[88px] py-4 '} Content={'Search'}
                                 />
                                 {/* */}
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner
