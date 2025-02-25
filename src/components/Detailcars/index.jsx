import React from 'react';
import GeneralHeading from '../typography/general-heading';
import { Navigation, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

import car3 from "../../../public/car1.jpg";
import car2 from "../../../public/car2.jpg";
import car1 from "../../../public/car3.jpg";
import car4 from "../../../public/car4.jpg";
import SubHeading from '../typography/sub-heading';
import Paragraph from '../paragraph';

const DetailCars = () => {
  return (
    <>
      <div className='flex justify-center my-10'>
        <div className='w-[60%] bg-[#ffffff]'>
          <GeneralHeading Content={'Chevrolet Camaro'} />
          <div className='bg-[#ffffff] shadow-lg rounded-md mt-10'>
            <Swiper
              modules={[Navigation, Pagination]} // Include Pagination
              spaceBetween={30}
              slidesPerView={1}
              loop={true} // Enable looping for infinite scroll
              pagination={{ clickable: true }} // Enable clickable dots
              navigation // Enable navigation arrows
            >
              <SwiperSlide>
                <Image
                  src={car3}
                  alt="Car 1"
                  className='p-5 w-[1141px] h-[600px] overflow-hidden 
                  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={car2}
                  alt="Car 2"
                  className='p-5 w-[1141px] h-[600px] overflow-hidden 
                  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={car1}
                  alt="Car 3"
                  className='p-5 w-[1141px] h-[600px] overflow-hidden 
                  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover'
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={car4}
                  alt="Car 4"
                  className='p-5 w-[1141px] h-[600px] overflow-hidden 
                  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover'
                />
              </SwiperSlide>
            </Swiper>
          </div>
{/*  */}
<div className='w-[100%] bg-[#ffffff] shadow-lg rounded-md mt-10'>
          <div className='p-5'>
            <div className=' border-b-[1px] border-gray-200 pb-2 '>
            <SubHeading  Content={'Description of Listing'} />
            </div>
            <div className='pt-2'>
            <Paragraph Style={'text-[#676767]'} Content={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'} />
            </div>
          </div>

        </div>
        </div>

        
      </div>
    </>
  );
};

export default DetailCars;



















// import React from 'react'
// import GeneralHeading from '../typography/general-heading'
// import { Navigation, Pagination, Scrollbar, } from 'swiper/modules';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// import Image from 'next/image';

// import car1 from "../../../public/car1.jpg"
// import car2 from "../../../public/car2.jpg"
// import car3 from "../../../public/car3.jpg"
// import car4 from "../../../public/car4.jpg"

// const DetailCars = () => {
//   return (
//    <>
//    <div className='flex justify-center mt-10'>

//     <div className=' w-[60%] bg-[#ffffff] '>

//     <GeneralHeading Content={'Chevrolet Camaro'} />
//     <div className='bg-[#ffffff] shadow-lg rounded-md mt-10'>
//     <Swiper
//                               modules={[Navigation, Pagination]}
//                               spaceBetween={30}
//                               slidesPerView={1}
//                               autoplay={true}
//                               //   ihdr auto play lagana ha 
//                               loop={true} // Enable looping for infinite scroll
//                             >
//                               <SwiperSlide >
//                                 <Image src={car1}  alt="Car 1" className=' p-5  w-[1141px]  h-[600px] overflow-hidden 
//                                  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
//                               </SwiperSlide>
//                               <SwiperSlide>
//                                 <Image src={car2} alt="Car 2" className='p-5 w-[1141px]  h-[600px] overflow-hidden  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
//                               </SwiperSlide>
//                               <SwiperSlide>
//                                 <Image src={car3} alt="Car 3" className='p-5 w-[1141px]  h-[600px] overflow-hidden  transform transition-transform duration-500 hover:scale-105 hover:rounded-md rounded-md object-cover' />
//                               </SwiperSlide>
//                               <SwiperSlide>
//                                 <Image src={car4} alt="Car 4" className='p-5 w-[1141px]  h-[600px]   overflow-hidden  transform transition-transform duration-500 hover:scale-105 hover:rounded-md  rounded-md object-cover' />
//                               </SwiperSlide>
//                             </Swiper>
//     </div>



    


//     </div>
//    </div>
//    </>
//   )
// }

// export default DetailCars
