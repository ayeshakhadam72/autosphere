import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { FaRegClock } from "react-icons/fa";
const ContactFile = () => {
  return (
    <>
    
    <div className=' py-10 md:py-20  bg-[#fcfbfb] font-FiraSans '>
                   <div className='flex justify-center '>
                       <div className=' w-[95%] xl:w-[65%]'>
                       {/* flex justify-center sm:flex-none  sm:justify-normal sm:w-full' */}
                        <div className='  '>
<div className="sm:flex  sm:gap-5  ">
<div className='lg:flex lg:w-[50%]  lg:gap-5 '>
<div className='lg:w-[50%] text-center px-[20px] py-[20px] hover:bg-[#127384]  hover:text-white bg-white shadow-md rounded-xl  '>
<div>
<div>
    <button className='px-[22px] py-[22px] mb-[15px] rounded-full  bg-[#FF9307] '><BiPhoneCall className='text-[26px] text-[#ffffff] ' /></button>
</div>
<div>
    <h2 className=' text-[20px] font-[500] mb-[10px]  '>Phone Number</h2>
    {/* text-[#737373] */}
    <h2 className='  text-[16px]  '>(888) 888-8888    </h2>
</div>
</div>

</div>

{/*  */}
<div className='mt-5 lg:mt-0 lg:w-[50%] text-center px-[20px] py-[20px] hover:bg-[#127384]  hover:text-white bg-white shadow-md rounded-xl  '>
<div>
<div>
    <button className='px-[22px] py-[22px] mb-[15px] rounded-full  bg-[#FF9307] '>
        <AiOutlineMail className='text-[26px] text-[#ffffff] ' />
        </button>

</div>



<div>
    <h2 className=' text-[20px] font-[500] mb-[10px]  '>Email Address    </h2>
    {/* text-[#737373] */}
    <h2 className='  text-[16px]  '>johnsmith@example.com</h2>
</div>
</div>

</div>
</div>
{/*  */}
<div className='mt-5 sm:mt-0 lg:flex lg:w-[50%] lg:gap-5 '>
<div className='lg:w-[50%] text-center px-[20px] py-[20px] hover:bg-[#127384]  hover:text-white bg-white shadow-md rounded-xl  '>
<div>
<div>
    <button className='px-[22px] py-[22px] mb-[15px] rounded-full  bg-[#FF9307] '>
       
        <SlLocationPin  className='text-[26px] text-[#ffffff] '/>

        </button>
</div>

<div>
    <h2 className=' text-[20px] font-[500] mb-[10px]  '>Location</h2>
    {/* text-[#737373] */}
    <h2 className='  text-[16px]  '>367 Hillcrest Lane,USA </h2>
</div>
</div>

</div>
{/*  */}
<div className='mt-5 lg:mt-0 lg:w-[50%] text-center px-[20px] py-[20px] hover:bg-[#127384]  hover:text-white bg-white shadow-md rounded-xl  '>
<div>
<div>
    <button className='px-[22px] py-[22px] mb-[15px] rounded-full  bg-[#FF9307] '>
    <FaRegClock className='text-[26px] text-[#ffffff] '/>
   </button>
</div>

<div>
    <h2 className=' text-[20px] font-[500] mb-[10px]  '>Opening Hours</h2>
    {/* text-[#737373] */}
    <h2 className='  text-[16px]  '>Mon - Sat (10.00AM - 05.30PM)</h2>
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

export default ContactFile
