import Image from 'next/image'
import React from 'react'
import { FaThumbsUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import redcar from "../../../public/redcar.png"
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
 
import Orangeclr from "../../../public/orangeclr.png"
import Blackclr from "../../../public/blackclr.png"
import Lineorange from "../../../public/lineorange.png"
import Dots from "../../../public/dots.png"

const Bannermiddle = () => {
  return (
   <>
   <div className=' bg-black py-[70px]  font-FiraSans flex justify-center items-center '>
    <div className='px-4 lg:px-0'>

    <div className='md:flex gap-10  '>

<div className='sm:pl-4 2xl:pl-0 lg:w-[55%] flex 2xl:justify-center '>
<div className='2xl:w-[80%] '>
   

        <h2 className='text-[36px]  lg:text-[62px] font-[700] text-white leading-normal '>Dreamsrental User </h2>
        <h1 className='text-[30px] sm:text-[36px]  lg:text-[62px] font-[700] text-white '>Friendly App Available</h1>
        <p className='text-white  text-[18px] pb-10'>Appropriately monetize one-to-one interfaces rather than cutting-edge Competently disinte rmediate backward.
</p>
<div className='mt-5 flex gap-2'>
    <div>
    <Image src={Orangeclr} />
    </div>
    <div>
    <Image src={Blackclr} />

    </div>

</div>

<div className='mt-3 ml-[-20px]'>
    <Image src={Lineorange} />
</div>
</div>
</div>

<div className='  lg:w-[45%] lg:flex justify-center'>
    <div>

<Image src={Dots}/>

<Image src={redcar} className=' w-[626px] h-[406px] ' />

    </div>
</div>
   </div>
   </div>
   </div>

{/* second section */}

   </>
  )
}

export default Bannermiddle

