import { signUpSchema } from '@/schemas'
import { loginInSchema } from '@/schemas/login';
import { useFormik } from 'formik'
import { useRouter } from 'next/router'
import React from 'react'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const initialValues = {
    // name: '',
    email: '',
    password: '',
    // confirm_password: '',
}

const  LoginForm = () => {
    const router = useRouter()
    
 const {values , errors , touched,  handleBlur , handleSubmit , handleChange} =    useFormik({
        initialValues : initialValues, 
        validationSchema :  loginInSchema ,
         onSubmit: (values , action) => {
            console.log("🚀 ~ FormPr ~ values:", values)
         action.resetForm() ;

            
        if( values.email === 'ali@gmail.com' && values.password  === '123' ){
            toast.success('login successfully')
            localStorage.setItem('username' , values.email )
            router.push('/')

         }
         else{
            // alert( 'error')
            toast.error('login failed')
            console.log( 'error')
         }
        }
        
    })
    console.log("🚀 ~ FormPr ~ values:", values)

    return (
        <>
<div className=' pt-10 '>

<div class="bg-cover bg-center bg-fixed" id='login-bg'>
    <div class="h-screen flex justify-center items-center">
        <div class="bg-white mx-4 p-8 rounded shadow-md w-full md:w-1/2 lg:w-1/3">
            <h1 class="text-3xl font-bold mb-8 text-center">Login</h1>
            
            <form onSubmit={handleSubmit} >
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="email">
                        Email Address
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your email address"
                        id="email"
                        type="email"
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                          />
                          { errors.email&& touched.email ? (
    <p className=' form-error  text-red-400 '>  {errors.email} </p>

) : null
 
}
                </div>
                <div class="mb-4">
                    <label class="block font-semibold text-gray-700 mb-2" for="password">
                        Password
                    </label>
                    <input
                        class="border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Enter your password"
                        id="password"  
                        type="password"
                        name='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        />
                        { errors.password&& touched.password ? (
    <p className=' form-error  text-red-400 '>  {errors.password} </p>

) : null
 
}
                    {/* <a class="text-gray-600 hover:text-gray-800" href="#">Forgot your password?</a> */}
                </div>
                <div class="mb-6">
                    <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Login
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
</div>

        </>
    )
}

export default LoginForm
