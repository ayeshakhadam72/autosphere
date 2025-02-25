import Link from 'next/link'
import React from 'react'



const Buttons = ({ Onclick, Content, Style, FirstIcon, IconStyle, LastIcon ,url , notLink , reset }) => {
  return (
    <>
    <div className='flex items-center'>
      { 
        notLink ? (
<button onClick={Onclick} type={reset ? 'reset'  : 'submit' }  className={`${Style}   px-1 sm:px-6   py-2 text-[16px] flex gap-2  items-center font-[500] font-FiraSans rounded-md  `}> <a href='about'  />
<span className={`${IconStyle} text-[16px] font-[500]`}> {FirstIcon}</span> <span>  </span>   {Content}  {LastIcon}  </button>
        ) : (


          <Link href= {`${url} `}  >

          <button onClick={Onclick} type={reset ? 'reset'  : 'submit' } className={`${Style}  px-1 sm:px-6   py-2 text-[16px] flex gap-2  items-center font-[500] font-FiraSans rounded-md  `}> <a href='about' />
          <span className={`${IconStyle} text-[16px] font-[500]  `}> {FirstIcon}</span> <span>  </span>   {Content}  {LastIcon}  </button>
              </Link> 
        )
      }
  
        </div>
    </>
  )
}

export default Buttons
