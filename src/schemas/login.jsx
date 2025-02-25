








import * as Yup from "yup"

export const loginInSchema = Yup.object ({
    // name : Yup.string().min(2).max(25).required('please enter your name'),
    email: Yup.string().email().required('Enter your email'),
    password: Yup.string().min(3).required('Enter your password'),

    // confirm_password: Yup.string().required().oneOf([ Yup.ref ('password') , null ] , 'password not match'),
})