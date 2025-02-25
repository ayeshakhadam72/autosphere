
import * as Yup from 'yup';

export const bookingSchema   = Yup.object({
    name :   Yup.string().min(5).max(20).required('please  enter Your name'),
    email :  Yup.string().email().required('please enter your email'),
    number:  Yup.string().min(11).required('please enter your number'),
    address : Yup.string().min(5).required('please enter your address'),
    checkAvailability : Yup.string().required('please enter your availability'),
    deliveryLocation : Yup.string().min(5).required('please enter your delivery location '),

    returnLocation : Yup.string().min(5).required('please enter your return location '),
    pickupDate : Yup.string().required('please enter your pickup date  '),
    pickupTime : Yup.string().required('please enter your pickup time '),

    returnDate : Yup.string().required('please enter your return date  '),
    returnTime : Yup.string().required('please enter your return time '),

    
})