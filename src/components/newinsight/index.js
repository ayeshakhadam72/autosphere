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
                              <p className='text-[18px] text-[#676767] '>This blog post provides valuable insights into the  <br/>benefits</p>
                              </div>

<div className=' flex justify-center'>
<div className='lg:flex gap-5 sm:w-[80%] lg:w-full'>
<Reusecard myInsight1={Insight1}  Journey={'Journey'} mypaara={'The 2023 Ford F-150 Raptor – A First Look'}  explaination={'Covers all aspects of the automotive industry with a focus on accessibility and consumer relevance.....'} myimg={Girl1} date={'October 6, 2022'} />

<Reusecard myInsight1={Insight2}  Journey={'Tour & tip'} mypaara={'Tesla Model S: Top Secret Car Collector’s Garage'} explaination={'Catering to driving enthusiasts, Road & Track provides engaging content on...'} myimg={Girl2} date={' March 6, 2023'} />


<Reusecard myInsight1={Insight3} Journey={'Updates'} mypaara={'Dedicated To Cars, Covering Everything'} explaination={'Known for its irreverent take on car culture, offers a mix of news, reviews...'} myimg={Girl3} date={' March 6, 2023'} />
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
