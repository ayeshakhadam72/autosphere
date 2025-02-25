import React from 'react'
import Titleehead from "../../../public/titlehead.png"
import Image from 'next/image'

import FastBooking from "../../../public/FastBooking.png"
import PickupLocation from "../../../public/PickupLocation.png"
import Satisfaction from "../../../public/Satisfaction.png"
import GeneralHeading from '../typography/general-heading'
import SubHeading from '../typography/sub-heading'
import Paragraph from '../paragraph'
import WhyChooseReuse from '../whychosereuse'

const Whychoose = () => {
    return (
        <>
            <div className=' py-10 md:py-20  bg-[#f4f4f8] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] 2xl:w-[75%] '>
                        <div className=' text-center'>
                        <GeneralHeading  Content={'Why Choose Us'} />

                            <Image src={Titleehead} className=' mx-auto py-3 ' />
                            <Paragraph Style={'text-[#676767]'} Content={'At AutoSphere, we strive to make your car-buying experience seamless and rewarding. From offering top-quality vehicles to delivering exceptional customer service, we are dedicated to exceeding your expectations at every step.'} />
                            
                        </div>

                        {/*  */}
                        <div className='lg:flex  gap-10 my-10 '>
                            <WhyChooseReuse IconStyle={'bg-black '} imgIcon={FastBooking}
                            heading={'Wide Range of Premium Cars'}

                          description={'  We offer an extensive selection of vehicles from top brands like Audi, Toyota, Hyundai, and Tesla. Whether you seek luxury, reliability, or cutting-edge technology, we have the perfect car for you.'} />
{/* 2 */}
                           <WhyChooseReuse Style={' my-10 lg:my-0'} IconStyle={'bg-[#127384] '} imgIcon={PickupLocation}
                            heading={'Trusted Quality and Transparency'}

                          description={'  We offer an extensive selection of vehicles from top brands like Audi, Toyota, Hyundai, and Tesla. Whether you seek luxury, reliability, or cutting-edge technology, we have the perfect car for you.'} />
{/* 3 */}
<WhyChooseReuse  IconStyle={'bg-[#ffa633]  '} imgIcon={PickupLocation}
                            heading={'Exceptional Customer Support'}

                          description={'Our experienced team is always ready to guide you in choosing the right car. From personalized recommendations to post-purchase assistance, we’re here to make your journey smooth and stress-free.'} />
                          
                            {/*  */}
                           
                           
                            {/*  */}
                            {/* <div className='bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg ' id='box-Shadow ' >
                                <div className='  px-[40px] py-[40px] text-black hover:text-white '>

                                    <div className=' px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
                                        <Image src={Satisfaction} className='mx-auto  ' />
                                    </div>
                                    <SubHeading StyleSub={'text-center text-[22px] lg:text-[24px] mb-[20px] pt-0'}  Content={''} />
                                   
                                    <Paragraph Style={'text-center'} Content={''} />
                                   
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Whychoose
