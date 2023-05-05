import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import RedErrorMessage from './RedErrorMessage'

function FormikForm2() { 
  // const [formdata, setFormData] =   useState({});
  const NewValidations = yup.object({
    name:yup.string().required("Name is Must!"),
    age:yup.number().min(10).max(50).required("Age Is Must"),
    pass:yup.string()
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,'Enter Strong Password')
    .required('Password Is Must !'),
    gender:yup.string().required('Geder is Must'),
    hobby:yup.array().min(1, '1 Hobby is must selected !'),
    country:yup.string().required('Country must be selected !'),
    comment:yup.string().max(500).required('Comment is must')
  })
  return (
    <div>
      <Formik 
      validationSchema={NewValidations}
      initialValues={{name:"", age:"", pass:"", gender:"", hobby:[], country:"", comment:""}}
      onSubmit={(values) => {
        console.log(values)
        // setFormData(values)
      }}
      >
        <Form>
            <label htmlFor="">Enter Name: </label>
            <Field type="text" name="name"/>
            {/* <ErrorMessage name='name' /> */}
            <RedErrorMessage name='name' />
            <br /> <br />

            <label htmlFor="">Enter Age: </label>
            <Field type="number" name="age"/>
            <RedErrorMessage name='age' />
            <br /> <br />

            <label htmlFor="">Enter Password: </label>
            <Field type="password" name="pass"/>
            <RedErrorMessage name='pass' />
            <br /> <br />

            <label htmlFor="">Gender : &nbsp; </label>
            <label htmlFor="">Male : &nbsp; </label>       
            <Field type="radio" name="gender" value="Male" />
            &nbsp;

            <label htmlFor="">Female : &nbsp; </label>       
            <Field type="radio" name="gender" value="Female" />
            <RedErrorMessage name='gender' />
            <br /> <br />

            <label htmlFor="">Hobbies : &nbsp; </label>
            <label htmlFor="">Writing : &nbsp; </label>
            <Field type="checkbox" name="hobby" value="Writing"/> 
            &nbsp;  
            <label htmlFor="">Reading : &nbsp;</label>
            <Field type="checkbox" name="hobby" value="Reading"/> 
            &nbsp; 
            <label htmlFor="">Sleepig :&nbsp; </label>
            <Field type="checkbox" name="hobby" value="Slpping"/> 
            <RedErrorMessage name='hobby' />            
            <br /> <br />  

            <label htmlFor="">Country :&nbsp; </label>   
            <Field name="country" as="select">
            <option value="">Select</option>
                <option value="Camada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </Field>
            <RedErrorMessage name='country' />
            
            <br /> <br />
            <label htmlFor="">Comments :&nbsp; </label> 
            <Field as="textarea" name="comment" />
            <RedErrorMessage name='hobby' />

            <br /> <br />
            <button type='submit'>Submit</button>
        </Form>
      </Formik>
      {/* <h1>{JSON.stringify(formdata)}</h1> */}
      {/* <h1>{formdata.name}</h1>
      <h1>{formdata.age}</h1> */}
    </div>
  )
}

export default FormikForm2
