import Image from 'next/image'
import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

import Bgabout from "../../../public/bgabout.png"
const Ourcompanyabout = () => {
  return (
    <>
      <div></div>
      <div className=' '>
        <div className=' py-10 md:py-[80px] bg-[#fcfbfb]  font-FiraSans '>
          <div className='flex justify-center '>
            <div className='w-[95%] xl:w-[98%] 2xl:w-[80%]'>
              <div className='xl:flex justify-between gap-1'>
                {/* 1 */}
                <div className=' xl:w-[50%]   flex '>
                  <div className='hidden xl:block  rounded-xl  pr-40 bg-[#FFA633]'>
                    <div className='text-[28px]   inline-block text-[#ffffff] font-[500]
 -rotate-90  xl:ml-[-122px] my-[250px]'>5+ years of experiences
                    </div>
                  </div>
                  <div className='xl:ml-[-280px] flex items-center z-10  '>
                    <Image src={Bgabout} className=' xl:w-[550px] xl:h-[500px] rounded-xl ' />
                  </div>
                </div>


                {/* 2 */}
                <div className='xl:w-[50%] flex items-center p-2 '>
                  <div>
                    <h2 className=' text-[18px] text-[#127384] font-[500] mb-[12px] '>ABOUT OUR COMPANY</h2>
                    <h2 className='text-[30px] sm:text-[38px] font-[500] mb-[30px] '>Best Solution For Car Services</h2>
                    <p className=' mb-[14px] text-[#676767] '>At AutoSphere, we believe in innovation, creativity, and delivering exceptional results. We are a team of passionate professionals dedicated to helping businesses grow and thrive in the ever-evolving digital world. With years of experience and expertise in digital marketing, IT services, website development, and more, we provide tailored solutions that align with your unique goals and challenges.



                    </p>

                    <p className=' mb-[14px] text-[#676767] '> Whether you're a startup or an established brand, our approach is always customer-centric. We prioritize building strong, long-lasting relationships and deliver solutions that ensure success in the digital age.</p>

                    <div className='sm:flex gap-36'>
                      <div>
                        <div className='flex gap-2 mb-[15px]'>
                          <div>
                            <button className='bg-[#127384] rounded-full '>
                              <IoIosCheckmark className='text-white' />
                            </button>
                          </div>
                          <div>
                            <span className='text-[#828282] text-[16px] '>
                              Quality Assurance at Every Step<br />
                            
                            </span>
                          </div>
                        </div>
                        {/*  */}
                        <div className='flex gap-2'>
                          <div>
                            <button className='bg-[#127384] rounded-full '>
                              <IoIosCheckmark className='text-white' />
                            </button>
                          </div>
                          <div>
                            <span className='text-[#828282] text-[16px] '>
                              Customer-Centric Approach<br />
                             
                            </span>
                          </div>
                        </div>
                      </div>

                      {/*  */}
                      <div>
                        <div className='flex gap-2 mb-[15px]'>
                          <div>
                            <button className='bg-[#127384] rounded-full '>
                              <IoIosCheckmark className='text-white' />
                            </button>
                          </div>
                          <div>
                            <span className='text-[#828282] text-[16px] '>
                              Innovative Solutions for Modern Challenges<br />
                              
                            </span>
                          </div>
                        </div>
                        {/*  */}
                        <div className='flex gap-2'>
                          <div>
                            <button className='bg-[#127384] rounded-full '>
                              <IoIosCheckmark className='text-white' />
                            </button>
                          </div>
                          <div>
                            <span className='text-[#828282] text-[16px] '>
                              Building Long-Term Relationships<br />
                              
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

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

export default Ourcompanyabout
