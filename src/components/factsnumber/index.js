import React from 'react'
import Titlehead from "../../../public/titlehead.png"

import Countbg from "../../../public/countbg.jpg"

import Myicon1 from "../../../public/myicon1.png"
import Myicon2 from "../../../public/myicon2.png"
import Myicon3 from "../../../public/myicon3.png"
import Myicon4 from "../../../public/myicon4.png"



import Aboutimg2 from "../../../public/aboutimg2.png"
import Image from 'next/image'
const Factsnumber = () => {
  return (
   <>
       <div className=' py-10 md:py-20  bg-[#201f1d] font-FiraSans  flex'>
        <div className='hidden md:block md:w-[8%] '>
            <Image src={Aboutimg2} className=' w-[189px] h-[344px] ' />
        </div>
        <div className='flex justify-center w-[100%] md:w-[92%] '>
                   <div className='md:w-[100%]'>
                       <div className=' text-center'>
                           <h2 className='text-[30px] sm:text-[36px] font-[700] text-white '>Facts By The Numbers
                           </h2>
                           <Image src={Titlehead} className=' mx-auto py-3 ' />
                           <p className='text-[18px] text-white'>Lorem Ipsum has been the industry's standard  <br /> dummy text ever since the 1500s,</p>
                           </div>
{/* 1 */} <div className='flex justify-center mt-10 '>
<div className='2xl:flex  gap-5'>
<div className='sm:flex  gap-5'>
<div className=' mt-5 sm:mt-0 '>
    <div className='count-bg px-[20px] py-[20px]  '>
        <div className='flex gap-2'>
            <div className=' bg-[#201F1D] hover:bg-[#127384] rounded-xl px-[24px] py-[24px] '> 
               <Image src={Myicon4}/> 
            </div>
<div className='flex items-center'>
            <div>
                <h2 className=' text-[#111] font-[700] text-[28px] '>5K+</h2>
                <p className='text-[#676767]'>Happy Customers</p>
            </div>
            </div>
        </div>
    </div>
</div>
{/* 1 */}
<div  className=' mt-5 sm:mt-0 '>
    <div className='count-bg px-[20px] py-[20px]  '>
        <div className='flex gap-2'>
            <div className=' bg-[#201F1D] hover:bg-[#127384] rounded-xl px-[24px] py-[24px] '> 
               <Image src={Myicon3}/> 
            </div>
<div className='flex items-center'>
            <div>
                <h2 className=' text-[#111] font-[700] text-[28px] '>815+</h2>
                <p className='text-[#676767]'>Count of Cars</p>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
{/*  */}
<div className='sm:flex  gap-5'>

<div className='mt-5 2xl:mt-0'>
    <div className='count-bg px-[20px] py-[20px]  '>
        <div className='flex gap-2'>
            <div className=' bg-[#201F1D] hover:bg-[#127384] rounded-xl px-[24px] py-[24px] '> 
               <Image src={Myicon2}/> 
            </div>
<div className='flex items-center'>
            <div>
                <h2 className=' text-[#111] font-[700] text-[28px] '>200K+</h2>
                <p className='text-[#676767]'>Car Center Solutions</p>
            </div>
            </div>
        </div>
    </div>
</div>
{/*  */}
<div className='mt-5 2xl:mt-0'>
    <div className='count-bg px-[20px] py-[20px]  '>
        <div className='flex gap-2'>
            <div className=' bg-[#201F1D] hover:bg-[#127384] rounded-xl px-[24px] py-[24px] '> 
               <Image src={Myicon1}/> 
            </div>
<div className='flex items-center'>
            <div>
                <h2 className=' text-[#111] font-[700] text-[28px] '>64K+</h2>
                <p className='text-[#676767]'>Total Kilometer</p>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
{/*  */}
</div>
</div>

                           </div>
                           </div>
               
                           </div>
                           </>
  )
}

export default Factsnumber
