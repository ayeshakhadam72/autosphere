import React, { useState } from 'react'
import SubHeading from '../typography/sub-heading'
import Paragraph from '../paragraph'
import { Input } from 'postcss'
import { MdOutlineDateRange } from "react-icons/md";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import Buttons from '../buttons';
import { RxCross2 } from "react-icons/rx";
import { useFormik } from 'formik';
import { bookingSchema } from '@/schemas/book';
import axios from 'axios';
import { toast } from 'react-toastify';

const initialValues = {
    name: ' ',
    email: ' ',
    number: ' ',
    address: ' ',
    deliveryLocation: ' ',
    returnLocation: ' ',
    pickupDate: ' ',
    pickupTime: " ",
    returnDate: ' ',
    returnTime: ' ',
    checkAvailability: ' ',
    carName : ' '
}


const MultiStepForm = ({ OpenBox, setTogglebox, savedata }) => {

    const [stepTwo, setStepTwo] = useState(false)
    const [stepOne, setStepOne] = useState(true)
    console.log(savedata , 'savedata')
    const ClickStepOne = () => {
        
        setStepOne(false)
        setStepTwo(true)
    }
    const backClickStepOne = () => {
        setStepOne(true)
        setStepTwo(false)
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit , setFieldValue } = useFormik({

        initialValues: initialValues,

        validationSchema : bookingSchema  ,
        onSubmit: async (values) => {
            try {
               setFieldValue('carName' , savedata),
                await axios.post('/api/contact' , values)
                toast.success('  Car Booking successfully')

               
            } catch (error) {
                console.log(error , 'error')
                toast.error( 'Something went Wrong ')

                
            }
           
            console.log("🚀 ~ MultiStepFormsubmit ~ values:", values)
          

        }
    })






    return (
        <>
            <div className={`  z-auto  bg-white w-[30%]  rounded-sm shadow-md  px-10 py-10  `}>
                <div className=' flex justify-end'>
                    <button onClick={OpenBox} className='px-2 py-2 rounded-full border-2 border-black'><RxCross2 /></button>

                </div>
                <form onSubmit={handleSubmit} >

                    {/* 1 */}
                    {
                        stepOne && (
                            <div>

                                <div className='mb-[5px] '>
                                    <label className='text-lg font-[500] ' for="cars">Your Name</label>
                                </div>
                                {/* <SubHeading Style={'text-lg '} Content={'Pricing Details'} /> */}


                                <input
                                    type="name"
                                    id="name"
                                    name='name'
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder='Your name'
                                    className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full'

                                />
                                {
                                    errors.name && touched.name ? (
                                        <p className='form-error text-red-400'>
                                            {errors.name}
                                        </p>
                                    ) : null
                                }

                                {/*  */}
                                <div className='py-5'>
                                    <div className='mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars">Email</label>

                                    </div>
                                    <div >
                                        <input
                                            type='email'
                                            id='email'
                                            name='email'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder='Enter your email' className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full'
                                        />
                                        {
                                            errors.email && touched.email ? (
                                                <p className='form-error text-red-400 '>
                                                    {errors.email}
                                                </p>
                                            ) : null
                                        }

                                    </div>
                                </div>
                                <div>

                                    <input type="text" hidden 
                                        name='carName'
                                        value ={savedata} 
                                        onChange={handleChange}
                                        onBlur={handleBlur}
/>
                                </div>

                                {/*  */}
                                <div>
                                    <div className='mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars">Phone Number</label>

                                    </div>


                                    {/* <SubHeading contentStyle={'text-[20px]'} Content={'Delivery Location'} /> */}
                                    <input
                                        type='number'
                                        name='number'
                                        id='number'
                                        value={values.number}
                                        placeholder='Phone Number'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full' />
                                    {
                                        errors.number && touched.number ? (
                                            <p className='form-error  text-red-400'>
                                                {errors.number}
                                            </p>
                                        ) : null
                                    }
                                </div>
                                {/*  */}
                                <div>
                                    <div className=' mt-5 mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars"> Address </label>

                                    </div>
                                    {/* <SubHeading contentStyle={'text-[10px]'} Content={'Return Location'} /> */}
                                    <input
                                        type='text'
                                        name='address'
                                        id='address'
                                        value={values.address}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Address' className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full' />
                                    {
                                        errors.address && touched.address ? (
                                            <p className='form-error  text-red-400'>
                                                {errors.address}
                                            </p>

                                        ) : null
                                    }

                                </div>



                                <div className='flex justify-end'>
                                    <div className='pt-5 flex  gap-3'>
                                        <Buttons Onclick={OpenBox} Style={' border-[1px] border-black hover:bg-white hover:text-black bg-black text-white'} Content={'Close'} notLink reset={true} />

                                        <Buttons Onclick={ClickStepOne} Style={' bg-[#ffae46] hover:bg-white  text-white hover:text-[#ffae46]  hover:border-[1px] border-black '} Content={'Next'} notLink reset
                                         />

                                        {/* <button onClick={OpenBox} className='bg-gray-600 text-white text-sm px-4 py-2 rounded-md '>Close</button> */}
                                        {/* <button onClick={ClickStepOne} className='bg-blue-600 text-white text-sm px-4 py-2 rounded-md ml-2'>Next</button> */}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    {/* step2 */}
                    {
                        stepTwo && (

                            <div>

                                <div className='mb-[5px]'>
                                    <label className='text-lg font-[500] ' for="cars">Pricing Details</label>
                                </div>
                                {/* <SubHeading Style={'text-lg '} Content={'Pricing Details'} /> */}

                                <div className='flex justify-between items-center bg-[#F2F7F6] rounded-md 
                            py-[5px] px-4'>
                                    <Paragraph Style={'text-gray-500'} Content={'Per day (8 Hours)'} />
                                    <SubHeading contentStyle={'text-[20px]'} Content={'$300'} />
                                </div>
                                {/*  */}
                                <div className='py-5'>
                                    <div className='mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars">Check Availability</label>

                                    </div>
                                    <div >
                                        <select
                                            name="checkAvailability"
                                            id="checkAvailability"
                                            value={values.checkAvailability}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full' >
                                            <option> Choose One</option>
                                            <option >Delivery</option>
                                            <option >Self Pickup</option>
                                        </select>
                                        {
                                            errors.checkAvailability && touched.checkAvailability ? (
                                                <p className='form-error  text-red-400'>
                                                    {errors.checkAvailability}
                                                </p>

                                            ) : null
                                        }
                                    </div>
                                </div>
                                {/*  */}
                                <div>
                                    <div className='mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars">Delivery Location</label>

                                    </div>
                                    {/* <SubHeading contentStyle={'text-[20px]'} Content={'Delivery Location'} /> */}
                                    <input
                                        type='text'
                                        name='deliveryLocation'
                                        id='deliveryLocation'
                                        value={values.deliveryLocation}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Delivery location' className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full' />
                                    {
                                        errors.deliveryLocation && touched.deliveryLocation ? (
                                            <p className='form-error  text-red-400'>
                                                {errors.deliveryLocation}
                                            </p>

                                        ) : null
                                    }

                                </div>
                                {/*  */}
                                <div>
                                    <div className=' mt-5 mb-[5px]'>
                                        <label className='text-lg font-[500]' for="cars">Return Location</label>

                                    </div>
                                    {/* <SubHeading contentStyle={'text-[10px]'} Content={'Return Location'} /> */}
                                    <input
                                        type='text'
                                        name='returnLocation'
                                        id=' returnLocation'
                                        value={values.returnLocation}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder=' Return location' className='bg-[#F2F7F6] rounded-md py-[10px] px-4 w-full' />
                                    {
                                        errors.returnLocation && touched.returnLocation ? (
                                            <p className='form-error  text-red-400'>
                                                {errors.returnLocation}
                                            </p>

                                        ) : null
                                    }
                                </div>
                                {/* ................................................................. */}

                                {/* <h2>Step 2</h2> */}
                                <div className='pt-5 md:pt-5'>
                                    <h2 className=' text-[16px] font-[600] pb-3 '>Pickup Date</h2>

                                    <div className='md:flex md:gap-5'>

                                        <div className='  flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'>  <MdOutlineDateRange className='text-xl font-[600]' /> </span>
                                            {/* all input first ko chord k w-[150px] */}
                                            <input
                                                type="date"
                                                name='pickupDate'
                                                id=' pickupDate'
                                                value={values.pickupDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=' 04/11/2023' className=' border-none text-sm  px-6 py-4 bg-[#F5F7F6]  rounded-lg' />
                                            {
                                                errors.pickupDate && touched.pickupDate ? (
                                                    <p className='form-error  text-red-400'>
                                                        {errors.pickupDate}
                                                    </p>

                                                ) : null
                                            }
                                        </div>
                                        <div className='  mt-3 md:mt-0 flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'>  <MdOutlineAccessTime className='text-xl font-[600]' /></span>
                                            <input
                                                type="Time"
                                                name='pickupTime'
                                                id='pickupTime'
                                                value={values.pickupTime}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=' 10:11:22' className=' text-sm py-4 px-6 bg-[#F5F7F6]  rounded-lg' />
                                            {
                                                errors.pickupTime && touched.pickupTime ? (
                                                    <p className='form-error  text-red-400'>
                                                        {errors.pickupTime}
                                                    </p>

                                                ) : null
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/*  */}

                                <div className='pt-5 2xl:pt-0'>
                                    <h2 className='text-[16px] font-[600] pb-3 pt-5 '>Return Date</h2>

                                    <div className='md:flex md:gap-5'>
                                        <div className='flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'><MdOutlineDateRange className='text-xl font-[600]' /></span>
                                            <input
                                                type="date"
                                                name='returnDate'
                                                id='returnDate'
                                                value={values.returnDate}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                placeholder=' 04/11/2023' className='text-sm  px-6 py-4 bg-[#F5F7F6]  rounded-lg' />
                                            {
                                                errors.returnDate && touched.returnDate ? (
                                                    <p className='form-error  text-red-400'>
                                                        {errors.returnDate}
                                                    </p>

                                                ) : null
                                            }
                                        </div>

                                        <div className='my-3 md:my-0 flex items-center bg-[#F5F7F6] rounded-lg '>
                                            <span className='pl-2'>   <MdOutlineAccessTime className='text-xl font-[600]' /></span>
                                            <input
                                                type="time"
                                                name=' returnTime'
                                                id=' returnTime'
                                                value={values.returnTime}
                                                onChange={handleChange}
                                                onBlur={handleBlur}

                                                placeholder=' 10:11:22' className=' text-sm px-6 py-4 bg-[#F5F7F6] rounded-lg' />
                                            {
                                                errors.returnTime && touched.returnTime ? (
                                                    <p className='form-error  text-red-400'>
                                                        {errors.returnTime}
                                                    </p>

                                                ) : null
                                            }
                                        </div>

                                    </div>
                                    {/*  */}
                                </div>

                                <div className='flex justify-end mt-10'>
                                    <div className=' flex gap-3'>

                                        <Buttons Onclick={backClickStepOne} Style={' border-[1px] border-black hover:bg-white hover:text-black bg-black text-white'} Content={'back'} notLink reset={true} />
                                        
                                        <Buttons Onclick={OpenBox} Style={' bg-[#ffae46] hover:bg-white  text-white hover:text-[#ffae46]  hover:border-[1px] border-black '} Content={'Book'} notLink  />
                                       

                                    </div>
                                </div>

                            </div>
                        )
                    }
                </form>
            </div>
        </>
    )
}

export default MultiStepForm
