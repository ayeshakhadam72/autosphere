import React from 'react'



const Heading = ({content , ContentStyle }) => {
  return (
   <>
   <h2 className={` ${ContentStyle}   lg:text-[62px] font-[700] leading-normal`}>
    {content}
   </h2>
   </>
  )
}

export default Heading
