import React from 'react'
import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'
import Reusecard from '../reusecard'

// import Girl1 from "../../../public/girl1.jpg"
// import Girl2 from "../../../public/girl2.jpg"
// import Girl3 from "../../../public/girl3.jpg"

// import Insight2 from "../../../public/insight2.jpg"
// import Insight3 from "../../../public/insight3.jpg"
import { FaArrowRightLong } from "react-icons/fa6";
import Buttons from '../buttons'
import GeneralHeading from '../typography/general-heading'
import InsightProductData from '../insightproductdata';

const NewInsight = () => {
    return (
        <>
            <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] xl:w-[75%]'>
                        <div className=' text-center'>
                            <GeneralHeading  Content={'News & Insights For You'} />

                            <Image src={Titlehead} className=' mx-auto py-3 ' />
                            <p className='text-[18px] text-[#676767] '>This blog post provides valuable insights into the  <br />benefits</p>
                        </div>

                        <div className='flex justify-center'>
                            <div className='lg:flex gap-5 sm:w-[80%] lg:w-full'>
                                {
                                    InsightProductData.map((value) => {
                                        return(
                                            <Reusecard
                                            myInsight1={ value.Image}
                                            Journey={value.Name}
                                            mypaara={value.heading}
                                            explaination={value.Explanation}
                                            myimg={value.GirlImage}
                                            date={value.InsightDate}
                                        />
                                        )
                                    })
                                }
                              



                                {/* <Reusecard
                                    myInsight1={Insight2}
                                    Journey={'Tour & Tip'}
                                    mypaara={'The Future of E-commerce: Trends to Watch in 2025'}
                                    explaination={`The e-commerce landscape is evolving rapidly, driven by technological advancements and changing consumer behavior. This blog explores the key trends shaping the future of online shopping in 2025, from AI-powered personalization to the rise of sustainable practices. Stay ahead of the curve and learn how to adapt your business to these transformative changes.`}
                                    myimg={Girl2}
                                    date={'March 6, 2023'}
                                /> */}

                                {/* <Reusecard
                                    myInsight1={Insight3}
                                    Journey={'Updates'}
                                    mypaara={'Mastering Work-Life Balance: Tips for Professionals'}
                                    explaination={`Balancing a demanding career and personal life can feel overwhelming, but it doesn't have to be. In this blog, we share practical tips and strategies to help you achieve harmony between work and life. Discover how to set boundaries, prioritize self-care, and make the most of your time without compromising on your professional goals.`}
                                    myimg={Girl3}
                                    date={'March 6, 2023'}
                                /> */}
                            </div>
                        </div>


                        <div className='flex justify-center  mt-10'>
                        <Buttons Style={' bg-white border-2 border-black hover:bg-[#fe9307] hover:border-[#fe9307] hover:text-white font-semibold '} Content={'View all Cars'}
                        LastIcon={<FaArrowRightLong />} />
                          

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewInsight
