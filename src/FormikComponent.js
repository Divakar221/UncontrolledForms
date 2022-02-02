import {React,useState} from 'react';
import { Formik } from 'formik';
import "./App.css"

const  Formikcomponent=()=>{

  // const[a,seta]=useState(0)
  
  const initialValue={
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    courses: 'Angular',
  }
  

  
// Assignining some values if textboxes are empty
  const validate = (value) => {
    var errors = {};
    if (value.firstName === '') {
        errors.firstName = 'First Name is Required';
    }
    if (value.lastName === '') {
        errors.lastName = 'Last Name is Required';
    }
    if (value.email === '') {
        errors.email = 'Email is Required';
    }
    if (value.gender === '') {
        errors.gender = 'Gender is Required';
    }
    // console.log(errors)
    return errors;
  };

  //printing the values are stored or not
  const handleSubmit = (value) => {
    console.log(value);
  };
 
    return (
      <>
        <h3> Formik Component(Uncontrolled Forms) </h3>
        <Formik
          initialValues={initialValue}
          validate={(value) =>validate(value)}
          onSubmit={(value) => {handleSubmit(value)}}
          //pre defined validate and handle submit button present in formik library
         
        >
          
          {({
            values,
            errors,
            touched,    
            handleChange,    // if any changes occurs in text boxes it will be called 
            handleBlur,
            handleSubmit,  // submit function
            resetForm       // reset function
            /* and other goodies */
          }) => (
              
            <form onSubmit={handleSubmit} className="for">
              <div>
                <label> First Name : </label>
                <input
                  type="text"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.firstName && errors.firstName}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Last Name : </label>
                <input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.lastName && errors.lastName}{' '}
                </span>
              </div>
              <br />
              <div>
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.email && errors.email}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Gender : </label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Male
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                Female
                <br />
                <span style={{ color: 'red' }}>
                  {' '}
                  {touched.gender && errors.gender}{' '}
                </span>
              </div>
              <br />
              <div>
                <label> Courses : </label>
                <select
                  name="courses"
                  value={values.courses}
                  onChange={handleChange}
                >
                  <option> Angular </option>
                  <option> React </option>
                  <option> Node </option>
                  <option> Mongo </option>
                </select>
              </div>
              <br />

              {/* submit and reset button */}
              <button type="submit" > Submit </button> &nbsp;
              <button type="reset"  onClick={ ()=>resetForm()}> Reset</button>&nbsp;
              {/* <button type="submit" onClick={()=>window.location.reload(true)}> Reset </button> &nbsp; */}
            </form>
          )}
        </Formik>
      </>
    );
  
}

export default Formikcomponent;
