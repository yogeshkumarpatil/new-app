import { Field, Form, Formik } from 'formik'
import React, { useState } from 'react'

function FormikForm2() { 
  const [formdata, setFormData] =   useState({});
  return (
    <div>
      <Formik 
      initialValues={{name:"", age:"", pass:"", gender:"", hobby:"", country:"", comment:""}}
      onSubmit={(values) => {
        console.log(values)
        setFormData(values)
      }}
      >
        <Form>
            <label htmlFor="">Enter Name: </label>
            <Field type="text" name="name"/>

            <br /> <br />

            <label htmlFor="">Enter Age: </label>
            <Field type="number" name="age"/>

            <br /> <br />

            <label htmlFor="">Enter Password: </label>
            <Field type="password" name="pass"/>.

            <br /> <br />

            <label htmlFor="">Gender : &nbsp; </label>
            <label htmlFor="">Male : &nbsp; </label>       
            <Field type="radio" name="gender" value="Male" />
            &nbsp;

            <label htmlFor="">Female : &nbsp; </label>       
            <Field type="radio" name="gender" value="Female" />
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
            <br /> <br />  

            <label htmlFor="">Country :&nbsp; </label>   
            <Field name="country" as="select">
                <option value="Camada">Canada</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
            </Field>

            <br /> <br />
            <label htmlFor="">Comments :&nbsp; </label> 
            <Field as="textarea" name="comment" />
            <br /> <br />
            <button type='submit'>Submit</button>
        </Form>
      </Formik>
      {/* <h1>{JSON.stringify(formdata)}</h1> */}
      <h1>{formdata.name}</h1>
      <h1>{formdata.age}</h1>
    </div>
  )
}

export default FormikForm2
