import React from 'react'


const GeneralHeading = ({contentStyle , Content}) => {
  return (
    <>
   {/* text-center text-[22px] lg:text-[24px] font-[600]  mb-[20px]   */}

     <h2 className={` ${contentStyle} text-[36px] font-[700]`}>{Content}</h2>
    
    </>
  )
}

export default GeneralHeading
