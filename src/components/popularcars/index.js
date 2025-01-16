import React, { useState } from 'react'
import Titlehead from "../../../public/titlehead.png"
import Image from 'next/image'
import { CiHeart } from "react-icons/ci";

import Mazda from "../../../public/mazda.png"
import Acura from "../../../public/acura.png"
import Audi from "../../../public/audi.png"
import Honda from "../../../public/honda.png"
import Toyota from "../../../public/toyota.png"
import Tesla from "../../../public/tesla.png"
import Link from 'next/link';
// import MyToyotawhite1 from "../../../public/Toyotawhite1.jpg"
// import MyToyotawhite2 from "../../../public/Toyotawhite2.jpg"
// import MyToyotawhite3 from "../../../public/Toyotawhite3.jpg"
// import MyToyotawhite4 from "../../../public/Toyotawhite4.jpg"
// import Girl1 from "../../../public/girl1.jpg"
import { PiMapPinSimpleArea } from "react-icons/pi";
//slider
import { Navigation, Pagination, Scrollbar, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { RiStarSFill } from "react-icons/ri";
import { FaCar, FaCogs, FaBatteryFull, FaTachometerAlt } from 'react-icons/fa';
import Manual from "../../../public/Manual.png"
import KM from "../../../public/KM.png"
import Diesel from "../../../public/Diesel.png"
import Basic from "../../../public/Basic.png"
import Persons from "../../../public/5Persons.png"
import { IoLocationOutline } from "react-icons/io5";
import { FaRegCalendarAlt } from "react-icons/fa";
import Productdata from '../productdata';

const Popularcars = () => {
    const [ itemShown , setItemShown ] = useState('Toyota')
 const ToyotaCar = () => {
  // onclick function: jb hum ak div py onclick fun lgaty ha to functionality perform krta ha 
    setItemShown('Toyota')
    // after click ya functionality perform ho gi
 }
 const AudiCar = () => {
    setItemShown('Audi')
 }
 const HondaCar = () => {
    setItemShown('Honda')
 }
 const TeslaCar = () => {
    setItemShown('Tesla')
 }
 
 const filterarray = Productdata.filter((b)=> b.category === (itemShown))
// filter array ak variable ha.. 
console.log(filterarray, 'filterarray')
  return (
   <>
    <div className=' py-10 md:py-20  bg-[#f2f7f6] font-FiraSans '>
               <div className='flex justify-center '>
                   <div className=' w-[90%] xl:w-[75%]'>
                       <div className=' text-center'>
                           <h2 className='text-[36px] font-[700] '>Explore Most Popular Cars</h2>
                           <Image src={Titlehead} className=' mx-auto py-3 ' />
                           <p className='text-[18px] text-[#676767] '>At AutoSphere, we bring you the most sought-after cars from top brands like Audi, Toyota, Hyundai, and Tesla. Whether you're looking for luxury, reliability, or cutting-edge innovation, our popular models offer something for everyone. Explore our collection to find your perfect ride today!







</p>
                       </div>
                       {/* top1 collection */}






                       <div className='mt-10 flex flex-wrap  justify-center gap-36 '>
                   
                          {/* 5 */}
                          <div onClick={ToyotaCar}  className='py-[10px] px-[22px] rounded-md hover:bg-[#127384] hover:text-white bg-[#ffffff] flex justify-center   mt-5 lg:mt-0 '>
                            <div className='flex gap-2'>
                            <div className='bg-[#FCFCFC] w-[43px] h-[35px] rounded-md p-[10px] flex justify-center items-center'>
                            <Image src={Toyota} className=' w-[22px] h-[22px]'/>
                            </div>
                            <div className='flex justify-center items-center hover:text-white text-lg font-semibold '>
                            {/* <Link href={'toyota'}>  Toyota</Link> 
                                 
                                      */}
            Toyota
                                </div>
                            </div>
                        </div>
                        {/* 3 */}
                        <div onClick={AudiCar} className='py-[10px] px-[22px] rounded-md hover:bg-[#127384] hover:text-white bg-[#ffffff] flex justify-center   mt-5 lg:mt-0 '>
                            <div className='flex gap-2'>
                            <div className='bg-[#FCFCFC] w-[43px] h-[35px] rounded-md p-[10px] flex justify-center items-center'>
                            <Image src={Audi} className=' w-[22px] h-[22px]' />
                            </div>
                            <div className='flex justify-center items-center hover:text-white text-lg font-semibold '>
                            {/* <Link href={'audi'}>  Audi</Link>                */}
                            Audi
                                </div>
                            </div>
                        </div>
                        {/* 4 */}
                        <div onClick={HondaCar} className='py-[10px] px-[22px] rounded-md hover:bg-[#127384] hover:text-white bg-[#ffffff] flex justify-center   mt-5 lg:mt-0 '>
                            <div className='flex gap-2'>
                            <div className='bg-[#FCFCFC] w-[43px] h-[35px] rounded-md p-[10px] flex justify-center items-center'>
                            <Image src={Honda} className=' w-[22px] h-[22px]' />
                            </div>
                            <div className='flex justify-center items-center hover:text-white text-lg font-semibold '>
                            {/* <Link href={'honda'}>  Honda</Link>                */}
                            Honda
                                </div>
                            </div>
                        </div>
                      
                        {/* 6 */}
                        <div onClick={TeslaCar} className='py-[10px] px-[22px] rounded-md hover:bg-[#127384] hover:text-white bg-[#ffffff] flex justify-center   mt-5 lg:mt-0'>
                            <div className='flex gap-2'>
                            <div className='bg-[#FCFCFC] w-[43px] h-[35px] rounded-md p-[10px] flex justify-center items-center'>
                            <Image src={Tesla} className=' w-[22px] h-[22px]'/>
                            </div>
                            <div className='flex justify-center items-center hover:text-white text-lg font-semibold '>
                            {/* <Link href={'tesla'}>  Tesla</Link>                */}
                            Tesla
                                </div>
                            </div>
                        </div>
                       </div>
 <div className=''>
<div className='w-[95%] sm:w-[85%] lg:w-full  mx-auto'>
<div className='my-10 flex flex-wrap  gap-5 '>
{/* 1 */}
{
   filterarray.map((b) =>{
        return(
<div className='relative flex-1 max-w-[100%] sm:flex-1 md:max-w-[45%] lg:flex-1 lg:max-w-[31.33%] bg-white px-5 py-5 rounded-md mt-5 lg:mt-0 '>

<div className='relative'>
 
 <Swiper
          modules={[Navigation, Pagination ]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay = {true}
        //   ihdr auto play lagana ha 
          loop={true} // Enable looping for infinite scroll
        >
          <SwiperSlide >
            <Image src={b.productimg1} alt="Car 1" className='  w-full overflow-hidden  h-full transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={b.productimg2} alt="Car 2" className=' w-full overflow-hidden   h-full transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={b.productimg3} alt="Car 3" className=' w-full overflow-hidden  h-full transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
          </SwiperSlide>
          <SwiperSlide>
            <Image src={b.productimg4} alt="Car 4" className=' w-full overflow-hidden  h-full transform transition-transform duration-500 hover:scale-105 hover:rounded-md  rounded-md object-cover' />
          </SwiperSlide>
        </Swiper>
</div>
{/* ...................................1 step jis ko top krna ha img k opr  */}


<div className=' absolute mt-[-10px] left-[80%]   2xl:left-[85%]  z-10'>
<Image src={b.productimg0} className=' h-[35px] w-[35px] rounded-full border-2 border-[#ffffff] '/>
</div>
<div className='absolute  mt-[-35px] left-[8%] 2xl:left-[7%] z-10 bg-[#ffffff] py-1 px-[6px] text-black text-[14px] rounded-md  '>
<span className=''>{b.productonimg}</span>
</div>

<div className='absolute top-[5%] left-[80%] 2xl:left-[85%]  z-10'>
    <div></div>
<div className='px-2 py-2 hover:text-white hover:bg-[#127384] rounded-full  bg-[#ffffff]
 '>
<CiHeart className='   text-lg  ' /> 
</div>
</div>
{/*................................ 1step */}
<div className=' border-b-[1px] border-gray-200 pb-5  flex  overflow-hidden' >

<div className=' w-[80%] pt-2'>
<h2 className='text-[#111] text-[20px] font-[500] hover:text-[#127384] '> {b.productname} </h2>
<div className='sm:flex gap-2 '>
    <span className= 'flex text-[#ff9307] font-[900] text-[16px] '> <RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill className='text-gray-300 ' /> </span>
<span className=' text-[#676767] text-[14px] '> {b.productviews} </span>
</div>
</div>
{/* 2step */}
<div className=' w-[20%] flex items-end    overflow-hidden'>
<div className='flex items-center  py-1 px-[4px] rounded-md text-[#ffffff] text-[12px]  gap-1  bg-[#127384] '>
    <span> <PiMapPinSimpleArea /></span> <span> {b.productlocationpin} </span>
</div>
</div>

</div>
{/* next step 2 */}

<div>

<ul className='flex pt-3'>
    <li className='text-[14px] flex items-center gap-2 w-1/3'>
    <span> <Image src={Manual} /> </span>
    <p>{b.producttype} </p>
    </li>
    <li className=' text-[14px] flex  items-center gap-2 w-1/3 '>
    <span> <Image src={KM} /> </span>
   <p> {b.productspeed} </p>

    </li>
    <li className='text-[14px] flex items-center gap-2 w-1/3'>
    <span> <Image src={ Diesel} /> </span>
    <p> {b.producttank}</p>
   

    </li>
</ul>
<ul className='flex pt-3 '>
    <li className='text-[14px] flex items-center gap-2 w-1/3'>
    <span> <Image src={Basic} /> </span>
    <p> {b.productsystem}</p>
    </li>

    <li className='text-[14px] flex items-center gap-2 w-1/3 '>
    <span> <Image src={Manual} /> </span>
    <p>{b.productyear} </p>
    </li>
    <li className='text-[14px] flex items-center gap-2 w-1/3'>
<span> <Image src={ Persons} /> </span>
    <p> 5 Persons</p>

   </li>
</ul>
</div>


{/* next step location */}
<div className='bg-[#F2F7F6] px-[10px] py-[10px]  my-[15px] flex justify-between'>
<div className='flex  items-center'>
<p className='flex gap-1 items-center text-[14px]'>
<span><IoLocationOutline /></span>
<span>  {b.productcity} </span>
</p>
</div>
<div className='flex '>
<h2 className='flex items-center gap-2'>  
<span className=' font-[700] text-[#FF0000] text-[24px] '> {b.productprice} </span> 
<span className='font-[400] text-[#676767] text-[14px] ' >/ Day</span>  </h2>

</div>

</div>

{/* last step */}
<div className=' rounded-md bg-[#201F1D] hover:bg-[#127384] text-[#ffffff] py-[7px] px-[10px] flex justify-center'>
<button  className='text-[16px] font-[500] flex items-center gap-2'> <FaRegCalendarAlt /> Rent Now</button>
</div>
{/*  */}
</div>

        )
    })
}
</div>
</div>
</div>

                       </div>
                       </div>
                       </div>
   </>
  )
}

export default Popularcars
