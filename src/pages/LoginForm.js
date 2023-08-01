import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Container } from "@mui/material";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Required"),
      password: Yup.string()
        .required("Required")
        .min(6, "Password must be at least 6 characters"),
    }),
    onSubmit: (values) => {
      // Form gönderme işlemleri
      console.log(values);
    },
  });

  return (
    <Container maxWidth="sm">
      <form onSubmit={formik.handleSubmit}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Username"
          variant="outlined"
          {...formik.getFieldProps("username")}
        />

        <TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          {...formik.getFieldProps("password")}
        />

        <Button type="submit" variant="contained" color="primary">
          Login
        </Button>
      </form>
    </Container>
  );
};

export default LoginForm;
