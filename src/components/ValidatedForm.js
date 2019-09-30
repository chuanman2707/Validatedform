import React from "react";

import { Formik } from "formik";
import * as Yup from "yup";
const ValidatedForm = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          console.log("Login", values);
        }, 1000);
      }}
      // define validation

      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("required"),
        password: Yup.string()
          .required("No password provided")
          .min(8, "Mật khẩu ngắn quá, 8 kí tự trở lên nhen")
          .matches(/(?=.*[0-9])/, "Password phải có số")
      })}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit
        } = props;

        return (
          <form autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nhập Email"
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Nhập mật khẩu"
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default ValidatedForm;
