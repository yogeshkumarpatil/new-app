import * as Yup from 'yup';

export const FormSchema = Yup.object({
    name: Yup.string().min(3,'Too Short').max(20,'Too Long').required('Name is Must'),
    email:Yup.string().email('Invalid Email').required('Email is Must'),
    age:Yup.number().min(10).max(50).required("Age is Must !"),
    pass:Yup.string().
    required('Password Is must')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Enter Strong Password"),
    cpass:Yup.string()
    .required("Confirm Password Is Must")
    .oneOf([Yup.ref('pass'),null], "Both Passwrd Must Match")
})