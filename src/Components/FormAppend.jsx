import {
  Button,
  FormControlLabel,
  FormHelperText,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
const initialValues = {
  name: "",
  age: "",
  email: "",
  gender: "",
  dept: "",
  mobile: "",
};

const validationSchema = yup.object({
  name: yup.string().required("Name is Required"),
  age: yup.number().typeError("Must be a number").required("Age is Required"),
  email: yup
    .string()
    .email("Invalid Email Format")
    .required("Email is required"),
  gender: yup.string().required("Gender is required"),
  dept: yup.string().required("Dept is required"),
  mobile: yup
    .string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
    .required("Mobile No is Required"),
});

function FormAppend() {
  const dispatch = useDispatch();
  const handleSubmit = (value, reset) => {
    dispatch({ type: "ADD", payload: value });
  };
  const { data } = useSelector((state) => state.FormReducers);
  console.log(data);
  return (
    <>
      <div style={{ margin: "1in" }}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            resetForm,
          }) => (
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="input-padding">
                <TextField
                  size="small"
                  label="Name"
                  name="name"
                  style={{ width: 250 }}
                  value={values.name}
                  onChange={handleChange}
                  // autoComplete="off"
                />
                {touched.name && errors.name ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.name}
                  </FormHelperText>
                ) : null}
              </div>

              {/* Age */}
              <div className="input-padding">
                <TextField
                  size="small"
                  label="Age"
                  name="age"
                  style={{ width: 250 }}
                  value={values.age}
                  onChange={handleChange}
                  // autoComplete="off"
                />
                {touched.age && errors.age ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.age}
                  </FormHelperText>
                ) : null}
              </div>

              {/* Email */}
              <div className="input-padding">
                <TextField
                  type="email"
                  size="small"
                  label="Email"
                  name="email"
                  style={{ width: 250 }}
                  value={values.email}
                  onChange={handleChange}
                  // autoComplete="off"
                />
                {touched.email && errors.email ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.email}
                  </FormHelperText>
                ) : null}
              </div>

              {/* Gender */}
              <div className="input-padding">
                <RadioGroup>
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                    name="gender"
                    onChange={handleChange}
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    name="gender"
                    label="Female"
                    onChange={handleChange}
                  />
                </RadioGroup>
                {touched.gender && errors.gender ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.gender}
                  </FormHelperText>
                ) : null}
              </div>

              {/* Dept */}
              <div className="input-padding">
                <TextField
                  size="small"
                  label="Dept"
                  name="dept"
                  style={{ width: 250 }}
                  value={values.dept}
                  onChange={handleChange}
                  // autoComplete="off"
                />
                {touched.dept && errors.dept ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.dept}
                  </FormHelperText>
                ) : null}
              </div>
              {/* Mobile */}
              <div className="input-padding">
                <TextField
                  size="small"
                  label="Mobile"
                  name="mobile"
                  style={{ width: 250 }}
                  value={values.mobile}
                  onChange={handleChange}
                  autoComplete="off"
                />
                {touched.mobile && errors.mobile ? (
                  <FormHelperText style={{ color: "red" }}>
                    {errors.mobile}
                  </FormHelperText>
                ) : null}
              </div>
              <Button type="submit" variant="contained" sx={{ m: 2 }}>
                Submit
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default FormAppend;
