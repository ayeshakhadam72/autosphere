import React from 'react'


 
const Paragraph = ({Style , Content}) => {
  return (
   <>
   <p className={`${Style} text-[16px] `}>
   {Content}
   </p>
   </>
  )
}

export default Paragraph
