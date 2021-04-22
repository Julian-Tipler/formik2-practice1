import React from "react";
import { Formik, Field, useField } from "formik";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Radio,
  TextField,
} from "@material-ui/core";
import "./App.css";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

const myTextField = (props) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";
  return(
    
  )
};

const App = () => {
  return (
    <div className="app">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          isTall: false,
          dogs: [],
          yogurt: "",
        }}
        onSubmit={(data, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          console.log(data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting, handleChange, handleBlur, handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            <Field
              placeholder="first name"
              name="firstName"
              type="input"
              as={TextField}
            />
            <Field
              placeholder="last name"
              name="lastName"
              type="input"
              as={TextField}
            />
            <div>Tall?</div>
            <Field name="isTall" type="checkbox" as={Checkbox} />
            <div>Dogs:</div>
            <div>
              <Field
                name="dogs"
                type="checkbox"
                value="chocolate lab"
                as={Checkbox}
              />
              <Field
                name="dogs"
                type="checkbox"
                value="chihuahua"
                as={Checkbox}
              />
              <Field
                name="dogs"
                type="checkbox"
                value="sheepdog"
                as={Checkbox}
              />
            </div>
            <div>Yogurt</div>
            <div>
              <MyRadio
                name="yogurt"
                type="radio"
                value="strawberry"
                label="strawberry"
              />
              <MyRadio
                name="yogurt"
                type="radio"
                value="blueberry"
                label="blueberry"
              />
              <MyRadio name="yogurt" type="radio" value="lemon" label="lemon" />
            </div>

            <Button disabled={isSubmitting} type="submit">
              submit!
            </Button>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default App;
