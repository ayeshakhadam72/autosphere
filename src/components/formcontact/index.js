import Image from 'next/image'
import React from 'react'
import Mykeepkey from "../../../public/keepkey.jpg"
import { useFormik } from 'formik'
import { signUpSchema } from '@/schemas';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Contactform = () => {
   const {values , errors , touched , handleBlur , handleChange , handleSubmit} = useFormik({
        initialValues: initialValues,
        validationSchema : signUpSchema,
        onSubmit:  async (values ) => {
           
            try {
                
            await axios.post('/api/sendEmail' , values )
            toast.success(' car booking successfully  ')
            } catch (error) {
                toast.error('Something went wrong')
            }
    console.log("🚀 ~ Contactform ~ values:", values)
           
            // action.resetForm()
        }
    })
 

    return (
        <>
            <div className=' py-10 md:py-5  bg-[#fcfbfb] font-FiraSans '>
                <div className='flex justify-center '>
                    <div className=' w-[95%] 2xl:w-[65%]'>
                        <div className='bg-white rounded-lg px-[20px] py-[20px] shadow-md md:flex gap-4'>
                            <div className='hidden md:block '>
                                <Image src={Mykeepkey} className=' w-[610px] h-[588px] object-cover rounded-md ' />


                            </div>
                            <div className=' px-1 lg:px-3 md:w-[50%] '>
                                <h2 className=' text-[38px] text-[#28283C] mb-[30px] font-[700] '>
                                    Get in touch!
                                </h2>
                                <form action=""  onSubmit={handleSubmit}>
                                    <div >
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Name<span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="name" autoComplete='off' name='name' id='name' 
                                         //  imp
                                         value={values.name}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                        // imp 
                                        placeholder='Name' className=' mb-[15px] w-full  py-[9px] px-[15px] text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
        {/* paragraph */}
        
        { errors.name && touched.name ?  (
        <p className='form-error'>{errors.name}</p> 
        )  : null }


                                   </div>

                                    {/* 2 */}
                                    <div>
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Email Address<span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="email" autoComplete='off' name='email' id='email' 
                                         //  imp
                                         value={values.email}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                        // imp 
                                        placeholder='Email' className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
          {/* paragraph */}
          { errors.email && touched.email ?  (
        <p className='form-error'>{errors.email}</p> 
        )  : null }
                                    </div>
                                    {/* 3 */}
                                    <div>
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Password<span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="password" autoComplete='off' name='password' id='password' placeholder='Password'
                                        //  imp
                                        value={values.password}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                       // imp 
                                        className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
          {/* paragraph */}
          { errors.password && touched.password ?  (
        <p className='form-error'>{errors.password}</p> 
        )  : null }
                                    </div>
                                    {/* 4 */}
                                    <div>
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Confirm Password<span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="password" autoComplete='off' name='confirm_password' id='confirm_password'
                                         placeholder='Confirm Password' 
                                        //  imp
                                         value={values.confirm_password}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                        // imp 
                                         className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
          {/* paragraph */}
          { errors.confirm_password && touched.confirm_password ?  (
        <p className='form-error'>{errors.confirm_password}</p> 
        )  : null }
                                    </div>
                                    {/* <div>
        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Comments<span className=' text-[#FF0000]'>*</span> </label>
<br></br>
<textarea rows={4} cols={50} className='h-[120px] mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' ></textarea>
    </div> */}
                                    {/* 5 */}
                                    <div>
                                        <button className='font-[700] py-[12px] px-[15px] rounded-lg text-center bg-[#201F1D] border-2 border-[#201F1D] text-[#ffffff] text-[16px] ' type='submit'> Send Enquiry </button>

                                    </div>
                                </form>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
        </>
    )
}

export default Contactform
