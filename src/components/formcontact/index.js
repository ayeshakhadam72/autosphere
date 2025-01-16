import Image from 'next/image'
import React from 'react'
import Mykeepkey from "../../../public/keepkey.jpg"
const Contactform = () => {
  return (
   <>
   <div className=' py-10 md:py-5  bg-[#fcfbfb] font-FiraSans '>
                   <div className='flex justify-center '>
                       <div className=' w-[95%] 2xl:w-[65%]'>
<div className='bg-white rounded-lg px-[20px] py-[20px] shadow-md md:flex gap-4'>
    <div className='hidden md:block '>
<Image src={Mykeepkey} className=' w-[610px] h-[588px] object-cover rounded-md ' />


    </div>
    <div className=' px-1 lg:px-3 md:w-[50%] '>
<h2 className=' text-[38px] text-[#28283C] mb-[30px] font-[700] '>
Get in touch!
</h2>
<form action="">
    <div >
        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Name<span className=' text-[#FF0000]'>*</span> </label>
<br></br>
        <input  type="text" placeholder='' className=' mb-[15px] w-full  py-[9px] px-[15px] text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
    </div>
    {/* 2 */}
    <div>
        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Email Address<span className=' text-[#FF0000]'>*</span> </label>
<br></br>
        <input  type="text" placeholder='' className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
    </div>
    {/* 3 */}
    <div>
        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Phone number<span className=' text-[#FF0000]'>*</span> </label>
<br></br>
        <input  type="text" placeholder='' className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
    </div>
    {/* 4 */}
    <div>
        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Comments<span className=' text-[#FF0000]'>*</span> </label>
<br></br>
<textarea rows={4} cols={50} className='h-[120px] mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' ></textarea>
    </div>
    {/* 5 */}
    <div> 
        <button className='font-[700] py-[12px] px-[15px] rounded-lg text-center bg-[#201F1D] border-2 border-[#201F1D] text-[#ffffff] text-[16px] '> Send Enquiry </button>
       
    </div>
</form>
    </div>
</div>



                       </div>
                       </div>
                       </div>
   </>
  )
}

export default Contactform
