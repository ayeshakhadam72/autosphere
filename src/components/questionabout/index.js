import React, {  useState } from 'react'
import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'
import { MdKeyboardArrowDown } from "react-icons/md";

const Questions = () => {
const [ hidepara , setHidepara ] = useState(true)
const togglepara = () => {
  setHidepara(!hidepara)
}

const toggleparaOne = () => {
  setHidepara(!hidepara)
}
const toggleparaTwo = () => {
  setHidepara(!hidepara)
}
const togglepara3 = () => {
  setHidepara(!hidepara)
}
const togglepara4 = () => {
  setHidepara(!hidepara)
}
const toggleparaFive = () => {
  setHidepara(!hidepara)
}
  return (
   <>
               <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
                   <div className='flex justify-center '>
                       <div className=' w-[90%] xl:w-[75%]'>

                           <div className=' text-center'>
                               <h2 className='text-[36px] font-[700] text-black '>Frequently Asked Questions</h2>
                               <Image src={Titlehead} className=' mx-auto py-3 ' />
                               <p className='text-[18px] text-[#676767] '>Lorem Ipsum has been the industry's standard<br></br> dummy text ever since the 1500s,</p>
                               </div>
                             {/* ...........................................................1 */}
  <div className='mt-10'>  
                             {/* 1 */}
 <div onClick={togglepara} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> What is about rental car deals?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div> 
                            {/* 2 */}
 <div onClick={toggleparaOne} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> In which areas do you operate?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>                            
                            {/* 3 */}
 <div onClick={toggleparaTwo} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>    
                            {/* 4 */}
  <div onClick={togglepara3} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>  
                            {/* 5*/}
 <div onClick={togglepara4} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>   
                            {/* 6 */}
  <div onClick={toggleparaFive} className='mb-[20px]  rounded-md bg-[#ffffff] px-5 py-5 '>
  <div className='flex  justify-between cursor-pointer'>
    <h2 className='w-[80%]  text-[#111] text-[16px] font-[700] '> eque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit?
    </h2>
    <div className='w-[20%] flex justify-end'>
    <span className=' w-[20px] h-[20px] flex items-center justify-center hover:bg-[#ffa633]   bg-[#828282] text-[16px] text-white rounded-full ' ><MdKeyboardArrowDown /></span></div>
  </div>
  <div className= { `${hidepara ? 'block' : 'hidden' } ` } >
    <p className='mt-[15px] text-[#676767] text-[16px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>  


</div>  
                               </div>
                               </div>
                               </div>
   
   </>
  )
}

export default Questions
