import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import * as yup from "yup";
import { TextField } from "../../components/textfield";
import { Button } from "../../components/button";
import { Navigate } from "react-router-dom";
import "./Signup.css";
import { useUserContext } from "../../context";

export const Signup = () => {
  const { setCurrentUser } = useUserContext();
  const validationSchema = yup.object({
    username: yup
      .string()
      .min(4, "Username must be at least 4 characters")
      .required(),
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

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      handleSubmit(values);
      resetForm();
      Navigate("/");
    },
  });

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post("https://node-6oe4.onrender.com/auth/signup", {
        username: values.username,
        email: values.email,
        password: values.password,
      });

      const { data } = response;
      console.log(data);
      localStorage.setItem("user", JSON.stringify(data));
      setCurrentUser(data);
    } catch (error) {
      return error;
    }
  };
  return (
    <div>
      <form id="form-container" onSubmit={formik.handleSubmit}>
        <div id="container">
          <h1 id="welcome">Welcome back</h1>
          <p id="task">Please enter your details</p>
          <TextField
            id="input"
            name="username"
            value={formik.values.username}
            onChange={formik.handleChange}
            placeholder="Username"
            type="text"
            style={{
              borderColor: formik.errors.username && "red",
            }}
          />
          {formik.errors.username && (
            <p style={{ color: "red", margin: 0, fontSize: 12 }}>
              {formik.errors.email}
            </p>
          )}
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
            <p style={{ color: "red", margin: 0, fontSize: 12 }}>
              {formik.errors.email}
            </p>
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
            <p style={{ color: "red", margin: 0, fontSize: 12 }}>
              {formik.errors.password}
            </p>
          )}
          <Button id="button" type="submit" onSubmit={formik.handleSubmit}>
            SIGN UP
          </Button>
          <div id="link">
            <p>Already have an account?</p>
            <a id="signup" href="/sign-in">
              Sign in
            </a>
          </div>
        </div>
      </form>
    </div>
  );
};
