import Bannerabout from '@/components/bannerabout'
import ContactFile from '@/components/contactfile1'
import Footer from '@/components/footer'
import Contactform from '@/components/formcontact'
import React, { useState } from 'react'
import { GiFlameSpin } from "react-icons/gi";
const Contact = () => {
    

    const [ loader , setLoader ] = useState (true)
    setTimeout(() => {
        setLoader(false)
    }, 2000);
  return (
   <>
{
    loader ?
        <div className="flex justify-center items-center h-screen bg-black">
        <div className='animate-spin  ' >
        <GiFlameSpin className=' text-white  text-[40px] '  />
        </div>
   </div>
    : 
        <>
        <Bannerabout Aboutus={ ' Contact us'} againAboutus={' Contact us' } />
  <ContactFile/>
  <Contactform/>
  <Footer/>
        
       </>
   
  
} 

 
   </>
  )
}

export default Contact
