import {useFormik} from "formik";
import React from "react";

function FormikForm() {
    const formInitialValues = {
        name: "",
        email: "",
    };
    // const formik = useFormik({
    //     initialValues: formInitialValues,
    //     onSubmit:(values) => {
    //         console.log(values.name);
    //         console.log(values.email);
    //     }
    // });
    const {handleSubmit,handleChange,values} = useFormik({
        initialValues: formInitialValues,
        onSubmit:(values) => {
            console.log(values.name);
            console.log(values.email);
        }
    });

    return (
        <div>
            <h1>Formik Demo Yogi</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Enter Name:</label>
                <input type="text" name="name" onChange={handleChange} value={values.name} />
                <br /> <br />
                <label htmlFor="">Enter Email:</label>
                <input type="text" name="email" onChange={handleChange} value={values.email} />
                <br /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default FormikForm;
