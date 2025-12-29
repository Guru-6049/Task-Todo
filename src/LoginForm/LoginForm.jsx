import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LoginFormik() {
  return (
    <div style={{ width: "300px", margin: "20px auto" }}>
      <h2>Login</h2>

      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Email is required";
          } else if (
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)
          ) {
            errors.email = "Invalid email format";
          }

          if (!values.password) {
            errors.password = "Password is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Login data:", values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="email"
              name="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              style={{ color: "red", fontSize: "12px" }}
            />

            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
