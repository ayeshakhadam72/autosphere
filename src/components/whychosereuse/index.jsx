import React from 'react'
import SubHeading from '../typography/sub-heading'
import Paragraph from '../paragraph'
import Image from 'next/image'
import style from "./whychoosereuse.module.css"


const WhyChooseReuse = ({ Style, IconStyle , imgIcon , heading , description}) => {
  return (
    <>
    <div className={ `${Style} ${style.hoverEffect}   bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg `} 
    id='box-Shadow ' >
                                <div className='  px-[40px] py-[40px] text-black hover:text-white '>

                                    <div className={` ${IconStyle} ${style.imgBg} px-[20px] py-[15px] rounded-lg mb-[20px]`}>
                                        <Image src={imgIcon} className='mx-auto  ' />
                                    </div>

                                    <SubHeading StyleSub={'text-center text-[22px] lg:text-[24px] mb-[20px] pt-0'} 

                                    Content={heading}/>
                                  
                                    <Paragraph Style={'text-center'} Content={description} />
                                  

                                </div>
                            </div>
    </>
  )
}

export default WhyChooseReuse
