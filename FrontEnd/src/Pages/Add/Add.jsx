import React, { useEffect, useState } from "react";
import './Add.scss'
import { Helmet } from "react-helmet-async";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
const Add = () => {
  const [data, setData] = useState([])
  const fetchData = async () =>{
    const response = await fetch("http://localhost:3000/")
    const newData = await response.json();
    setData(newData);
  }
  useEffect(() => {
    fetchData();
  }, [])
  
  async function addDataFormik(item) {
    await fetch("http://localhost:3000/", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(item),
    });
    await fetchData()
  }
  async function deleteItemId(id) {
    await fetch(`http://localhost:3000/${id}`, {
      method: "DELETE",
    });
    await fetchData()
  }
  return (
    <>
    <div className="add-page">
      <Helmet>
        <title>Add</title>
      </Helmet>
      <Formik
       initialValues={{ name: '', img: '', title: '' }}
       validationSchema={Yup.object({
         name: Yup.string()
           .required('Required'),
         img: Yup.string()
           .required('Required'),
         title: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting , resetForm}) => {
         setTimeout(() => {
          addDataFormik(values)
           setSubmitting(false);
           resetForm();
         }, 400);

       }}
     >
       <Form className="form-add">
        <div className="input-section">
         <label htmlFor="name">Card Name: </label>
         <Field name="name" type="text" />
         <ErrorMessage name="name" />
         </div>
        <div className="input-section">
         <label htmlFor="img">Card Image</label>
         <Field name="img" type="text" />
         <ErrorMessage name="img" />
       </div>
       <div className="input-section">
         <label htmlFor="title">Card Title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
         </div>
         <button type="submit" className="submit-btn">Submit</button>
       </Form>
     </Formik>
     <div className="service-table">
        <table>
          <thead>
            <tr>
              <th>Card Name</th>
              <th>Card Image</th>
              <th>Card Title</th>
              <th>Delete Card</th>

            </tr>
          </thead>
          <tbody>
            {data.map((x) => (
              <tr key={x._id}>
                <td>{x.name}</td>
                <td>{x.img}</td>
                <td>{x.title}</td>
                <td className="delete-btn" onClick={() => deleteItemId(x._id)}>
                  <i className="fa-solid fa-trash"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
     </div>
    </>
  );
};

export default Add;
