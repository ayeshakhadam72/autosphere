import React from 'react'
import Titleehead from "../../../public/titlehead.png"
import Image from 'next/image'

import FastBooking from "../../../public/FastBooking.png"
import PickupLocation from "../../../public/PickupLocation.png"
import Satisfaction from "../../../public/Satisfaction.png"

const Whychoose = () => {
  return (
   <>
   <div className=' py-10 md:py-20  bg-[#f4f4f8] font-FiraSans '>
               <div className='flex justify-center '>
                   <div className=' w-[95%] 2xl:w-[75%] '>
                       <div className=' text-center'>
                           <h2 className='text-[36px] font-[700] '>Why Choose Us</h2>
                           <Image src={Titleehead} className=' mx-auto py-3 ' />
                           <p className='text-[18px] text-[#676767] '>We are innovative and passionate about the work   we do.</p>
                           </div>

{/*  */}
      <div className='lg:flex  gap-10 my-10 '>
<div className= 'bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg ' id='box-Shadow ' >
<div className='  px-[40px] py-[40px] text-black hover:text-white '>

<div className='bg-black hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
    <Image  src={FastBooking} className='mx-auto  ' />
</div>
<p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '>Easy & Fast Booking</p>
<p className='text-center'>Completely carinate e business testing process whereas fully researched customer service. Globally extensive content with quality.</p>

</div>
</div>
{/*  */}
<div className=  ' my-10 lg:my-0 bg-white hover:bg-black hover:text-white lg:w-1/3  rounded-lg ' id='box-Shadow ' >
<div className='  px-[40px] py-[40px] text-black hover:text-white '>

<div className='bg-[#127384] hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
    <Image  src={PickupLocation} className='mx-auto  ' />
</div>
<p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '>Many Pickup Location</p>
<p className='text-center'>Enthusiastically magnetic initiatives with cross-platform sources. Dynamically target testing procedures through effective quality quality.</p>

</div>
</div>
{/*  */}
<div className= 'bg-white hover:bg-black hover:text-white  lg:w-1/3 rounded-lg ' id='box-Shadow ' >
<div className='  px-[40px] py-[40px] text-black hover:text-white '>

<div className='bg-[#ffa633] hover:bg-white  px-[20px] py-[15px] rounded-lg mb-[20px]  ' >
    <Image  src={Satisfaction} className='mx-auto  ' />
</div>
<p className='text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   '>Customer Satisfaction</p>
<p className='text-center'>Globally user centric method interactive. Seamlessly revolutionize unique portals orporate collaboration quality quality.</p>

</div>
</div>
      </div>

                           </div>
                           
                           
                           
                           </div>
                           </div>
                           </>
  )
}

export default Whychoose
