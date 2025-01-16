import Image from 'next/image'
import React from 'react'


import Girl1 from "../../../public/girl1.jpg"
import { FaCalendarAlt } from "react-icons/fa";
const Reusecard = (   { Journey , mypaara , explaination  , myimg , date, myInsight1} ) => {
  return (
    <>
    <div  className='bg-white font-FiraSans  rounded-lg w-[100%] lg:w-[33%] mt-10 '>
        <div>
<Image src={myInsight1} className='h-[285px] object-cover rounded-t-lg' />
        </div>
        <div className=' px-[20px] py-[20px] '>
      <button className='py-[5px] px-[14px] text-sm rounded-md mb-[20px] text-white bg-[#127384] hover:bg-black '> {Journey} </button>
      <h1 className='text-[24px] font-[700] hover:text-[#127384] mb-[20px]' >{mypaara}</h1>
      <p className=' text-[#676767] text-[16px] mb-[20px]'>{ explaination}</p>

<div className='bg-[#F2F7F6] rounded-lg  px-[13px] py-[13px] text-[#676767] '>
  <div className='flex justify-between'>
    <div className='flex gap-2'>
  <span className='rounded-full '>
    <Image src={myimg} className='rounded-full h-[23px] w-[23px] '/>
  </span>
  <span>
    Hellan
    </span>
    </div>
{/*  */}
    <div  className='flex items-center gap-2 '>
        <span><FaCalendarAlt /> </span>
       <span>{date}</span>
    </div>
  </div>

</div>




{/*  */}
        </div>

        {/*  */}
    </div>

    
    </>
  )
}

export default Reusecard
