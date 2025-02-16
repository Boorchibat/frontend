import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import "./Signin.css";
import { Button } from "../../components/button";
import axios from "axios"
import { TextField } from "../../components/textfield";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../context";

export const Signin = () => {
  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters")
      .matches(/[0-9]/, "Password requires a number")
      .matches(/[a-z]/, "Password requires a lowercase letter")
      .matches(/[A-Z]/, "Password requires an uppercase letter")
      .matches(/[^\w]/, "Password requires a symbol")
      .required(),
  });
  const navigate = useNavigate();
  const {setCurrentUser} = useUserContext();


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, {resetForm}) => {
      handleSubmit(values)
      resetForm()
      navigate("/")
    },
  });

  const handleSubmit = async (values) => {
    try{
        const response = await axios.post("https://node-6oe4.onrender.com/auth/signin", {
            email: values.email,
            password: values.password
        })
        const {data} = response
        localStorage.setItem("user", JSON.stringify(data))
        console.log(data)
        setCurrentUser(data)
    }
    catch(error){
        return(error)
    }
  }
  return (
    <div>
      <form id="form-container" onSubmit={formik.handleSubmit}>
        <div id="container">
          <h1 id="welcome">Welcome back</h1>
          <p id="task">Please enter your details</p>
          <TextField
            id="input"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            placeholder="Email"
            type="email"
            style={{
                borderColor: formik.errors.email && "red",
            }}
          />
           {formik.errors.email && (
            <p style={{color:"red", margin: 0, fontSize: 12}}>{formik.errors.email}</p>
          )}
          <TextField
            id="input"
            name="password"
            placeholder="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            style={{
                borderColor: formik.errors.password && "red",
            }}
          />
           {formik.errors.password && (
            <p style={{color:"red", margin: 0, fontSize: 12}}>{formik.errors.password}</p>
          )}
          <Button id="button" type="submit" onSubmit={formik.handleSubmit}>
            SIGN IN
          </Button>
          <div id="link">
            <p>Don't have an account?</p>
            <a id="signup" href="/sign-up">
              Sign up
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
