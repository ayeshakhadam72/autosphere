





import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
    username: Yup.string().min(3).required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    name: Yup.string().required("Name is required"),
    age: Yup.number().positive().integer().required("Age is required"),
});


// import * as Yup from "yup"

// export const SignUpSchema = Yup.object ({
//     username : Yup.string().min(2).max(25).required('please enter your name'),
//     password: Yup.string().min(3).required('Enter your password'),

//     email: Yup.string().email().required('Enter your email'),
//     name : Yup.string().min(5).required('Enter your name') ,
//     age : Yup.string().max(2).required('please enter your age')
//     confirm_password: Yup.string().required().oneOf([ Yup.ref ('password') , null ] , 'password not match'),
// })