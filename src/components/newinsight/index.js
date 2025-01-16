import React from 'react'
import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'
import Reusecard from '../reusecard'
import Girl1 from "../../../public/girl1.jpg"
import Girl2 from "../../../public/girl2.jpg"
import Girl3 from "../../../public/girl3.jpg"

import Insight1 from "../../../public/insight1.jpg"
import Insight2 from "../../../public/insight2.jpg"
import Insight3 from "../../../public/insight3.jpg"
import { FaArrowRightLong } from "react-icons/fa6";

const NewInsight = () => {
    return (
        <>
            <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] xl:w-[75%]'>
                        <div className=' text-center'>
                            <h2 className='text-[36px] font-[700] '>News & Insights For You</h2>
                            <Image src={Titlehead} className=' mx-auto py-3 ' />
                            <p className='text-[18px] text-[#676767] '>This blog post provides valuable insights into the  <br />benefits</p>
                        </div>

                        <div className='flex justify-center'>
    <div className='lg:flex gap-5 sm:w-[80%] lg:w-full'>
        <Reusecard 
            myInsight1={Insight1} 
            Journey={'Journey'} 
            mypaara={'5 Proven Strategies to Boost Your Business with Digital Marketing'} 
            explaination={`In today's fast-paced digital world, having a strong online presence is crucial for any business. This blog dives into five tried-and-tested strategies that can elevate your brand's visibility, attract more customers, and drive measurable growth using digital marketing techniques. Whether you're new to the digital space or looking to refine your approach, these insights will help you succeed.`} 
            myimg={Girl1} 
            date={'October 6, 2022'} 
        />

        <Reusecard 
            myInsight1={Insight2} 
            Journey={'Tour & Tip'} 
            mypaara={'The Future of E-commerce: Trends to Watch in 2025'} 
            explaination={`The e-commerce landscape is evolving rapidly, driven by technological advancements and changing consumer behavior. This blog explores the key trends shaping the future of online shopping in 2025, from AI-powered personalization to the rise of sustainable practices. Stay ahead of the curve and learn how to adapt your business to these transformative changes.`} 
            myimg={Girl2} 
            date={'March 6, 2023'} 
        />

        <Reusecard 
            myInsight1={Insight3} 
            Journey={'Updates'} 
            mypaara={'Mastering Work-Life Balance: Tips for Professionals'} 
            explaination={`Balancing a demanding career and personal life can feel overwhelming, but it doesn't have to be. In this blog, we share practical tips and strategies to help you achieve harmony between work and life. Discover how to set boundaries, prioritize self-care, and make the most of your time without compromising on your professional goals.`} 
            myimg={Girl3} 
            date={'March 6, 2023'} 
        />
    </div>
</div>


                        <div className='flex justify-center  mt-10'>
                            <button className='flex items-center rounded-md gap-2 py-2 px-6 text-[16px] bg-white border-2 border-black hover:bg-[#fe9307] hover:border-[#fe9307] hover:text-white font-semibold '>View all Blogs <span><FaArrowRightLong /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewInsight
