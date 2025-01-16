import Link from 'next/link'
import React from 'react'

const Bannerabout = ({Aboutus ,againAboutus}) => {
  return (
   <>
   <div className='bg-[#201F1D]'>
   <div className=' py-10 md:py-16   font-FiraSans '>
                  <div className='flex justify-center '>
                      <div className=' w-[95%] xl:w-[75%]'>
                     <h2 className='text-[#ffffff] text-[36px] font-[700] text-center '>{Aboutus}</h2>
                    
                    <div className='flex justify-center'> <div className='flex text-white space-x-2'>
                        
                            <Link  className='hover:text-[#fcb215] text-[16px]'  href={'home'} > Home / </Link>
                        
                            <Link className='hover:text-[#fcb215] text-[16px]'  href={'pages'} >Pages /</Link>
                       
                            <Link className='text-[#fcb215] text-[16px]' href={'/'} >{againAboutus}</Link>
                       

                     </div>
                      </div>
                      </div>
                      </div>
                      </div>
   </div>
   </>
  )
}

export default Bannerabout
