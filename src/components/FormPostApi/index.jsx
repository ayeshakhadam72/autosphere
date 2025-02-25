import {  SignUpSchema } from '@/schemas/signUp'
import axios from 'axios'
import { Formik, useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'

 const initialValues = {
    username : '' ,
      password : '' ,
      email : '' ,
      name : '' , 
    age : '' ,
    
}


const FormPostApi = () => {

const { values , errors , touched , handleSubmit, handleChange, handleBlur  } = useFormik ({
  initialValues : initialValues , 
  validationSchema : SignUpSchema ,
  onSubmit : async (values) => {
try {
    console.log("sendingData" , values)
   await axios.post('/api/signUp', values);

  //  console.log('response' , response.data)
    toast.success('Sign up successfully');
} catch (error) {
    // console.error("Error response", error.response);
    toast.error('Something went wrong');
}



// try {
//    await axios.post('/api/signUp' , values)
//    toast.success('Sign up successfully')

// } catch (error) {
//     toast.error('Went Wrong')
    
// }

    console.log("🚀 ~ FormPostApi ~ values:", values)
    
  }
})


  return (
   <>
   
   <div className=' px-1 lg:px-3 md:w-[50%] '>
                                <h2 className=' text-[38px] text-[#28283C] mb-[30px] font-[700] '>
                                    Get in touch!
                                </h2>
                                <form action=""  onSubmit={handleSubmit}>
                                    <div >
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >User Name <span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="username" autoComplete='off' name='username' id='username' 
                                         //  imp
                                         value={values.username}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                        // imp 
                                        placeholder='username ' className=' mb-[15px] w-full  py-[9px] px-[15px] text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
        {/* paragraph */}
        
        { errors.name && touched.name ?  (
        <p className='form-error'>{errors.name}</p> 
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
                                    {/* 2 */}
                                    <div>
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Email <span className=' text-[#FF0000]'>*</span> </label>
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
                                    
                                    {/* 4 */}
                                    <div >
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Name <span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="name" autoComplete='off' name='name' id='name' 
                                         //  imp
                                         value={values.name}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                        // imp 
                                        placeholder='name... ' className=' mb-[15px] w-full  py-[9px] px-[15px] text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
        {/* paragraph */}
        
        { errors.name && touched.name ?  (
        <p className='form-error'>{errors.name}</p> 
        )  : null }


                                   </div>

                                    {/* 6 */}
                                    <div>
                                        <label className='text-[#111] font-[500] text-[14px] pb-[5px]  ' >Age<span className=' text-[#FF0000]'>*</span> </label>
                                        <br></br>
                                        <input type="number" autoComplete='off' name='age' id='age' placeholder='Age'
                                        value={values.age}
                                        onBlur={handleBlur}
                                        onChange={handleChange}

                                      
                                      
                                       // imp 
                                        className=' mb-[15px] w-full py-[9px] px-[15px]  text-[14px] rounded-md 
        text-[#201F1D] font-[400] bg-[#F5F5F5]  shadow-none  border-[#F4F4F4] border-2 ' />
          {/* paragraph */}
          {
            errors.age && touched.age ? (
<p className='form-error'>
{errors.age}
         </p>
            ) : null
          }
         
        </div>
                                    {/* 5 */}
                                    <div>
                                        <button className='font-[700] py-[12px] px-[15px] rounded-lg text-center bg-[#201F1D] border-2 border-[#201F1D] text-[#ffffff] text-[16px] ' type='submit'> Sign-Up </button>

                                    </div>
                                </form>
                            </div>
   </>
  )
}

export default FormPostApi
