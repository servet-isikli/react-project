import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container } from "@mui/material";
import axios from "axios";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: (values) => {
      // Send the form data to the Strapi endpoint
      const url = "http://localhost:1337/api/auth/local";
      const body = JSON.stringify(values);
      axios
        .post(url, body, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          if (response.status === 201) {
            // The user was created successfully
          } else {
            // An error occurred
          }
        })
        .catch((error) => {
          // An error occurred
        });
    },
  });

  return (
    <Container maxWidth="sm" className="mt-4 mb-4">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          {...formik.getFieldProps("firstName")}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}

        <TextField
          fullWidth
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          {...formik.getFieldProps("lastName")}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}

        <TextField
          fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          {...formik.getFieldProps("email")}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          {...formik.getFieldProps("password")}
        />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}

        <TextField
          fullWidth
          id="confirmPassword"
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          variant="outlined"
          {...formik.getFieldProps("confirmPassword")}
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}

        <Button type="submit" variant="contained" color="primary">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignupForm;
