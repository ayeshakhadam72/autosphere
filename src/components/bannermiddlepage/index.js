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
import SubHeading from '../typography/sub-heading';
import Heading from '../typography/heading';
import Paragraph from '../paragraph';

const Bannermiddle = () => {
  return (
   <>
   <div className=' bg-black py-[70px]  font-FiraSans flex justify-center items-center '>
    <div className='px-4 lg:px-0'>

    <div className='md:flex gap-10  '>

<div className='sm:pl-4 2xl:pl-0 lg:w-[55%] flex 2xl:justify-center '>
<div className='2xl:w-[80%] '>
   
        <Heading ContentStyle={'text-[36px]   text-white '}
         content={'AutoSphere User '} />
        <Heading ContentStyle={'text-[30px] sm:text-[36px] text-white'}
         content={'Friendly App '} />
      
<Paragraph Style={'pb-10 text-white'} Content={'Discover a seamless experience with the DreamsRental app, designed to make your renting journey effortless. Our app ensures smooth and personalized one-on-one interactions, helping you monetize opportunities effectively. With a focus on simplicity and efficiency, we eliminate unnecessary complexities to provide a hassle-free renting process.'} />
       
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

