import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  TextField,
  Typography,
  MenuItem,
  Stack,
  Grid,
} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const regions = ["North", "South", "East", "West"];

const SignupSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  surname: Yup.string().required("Surname is required"),
  dob: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
  region: Yup.string().required("Please select a region"),
});

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const FormContainer = ({ children }) => (
  <Box
    sx={{
      background: "rgba(255, 255, 255, 0.26)",
      borderRadius: 2,
      padding: 4,
      boxShadow: 3,
      backdropFilter: "blur(10px)",
    }}
  >
    {children}
  </Box>
);

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const SignupForm = ({ switchToLogin }) => (
  <Formik
    initialValues={{
      name: "",
      surname: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
      region: "",
    }}
    validationSchema={SignupSchema}
    onSubmit={(values) => {
      console.log("Signup values:", values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Stack spacing={2}>
          <Field
            as={TextField}
            label="Name"
            name="name"
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <Field
            as={TextField}
            label="Surname"
            name="surname"
            error={touched.surname && Boolean(errors.surname)}
            helperText={touched.surname && errors.surname}
          />
          <Field
            as={TextField}
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            error={touched.dob && Boolean(errors.dob)}
            helperText={touched.dob && errors.dob}
          />
          <Field
            as={TextField}
            label="Email"
            name="email"
            type="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            as={TextField}
            label="Password"
            name="password"
            type="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Field
            as={TextField}
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            error={touched.confirmPassword && Boolean(errors.confirmPassword)}
            helperText={touched.confirmPassword && errors.confirmPassword}
          />
          <Field
            as={TextField}
            label="Region"
            name="region"
            select
            error={touched.region && Boolean(errors.region)}
            helperText={touched.region && errors.region}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Field>
          <Button type="submit" variant="contained" color='primary'>
            Sign Up
          </Button>
          <Typography
            variant="body2"
            align="center"
            sx={{ cursor: "pointer", mt: 2 }}
            onClick={switchToLogin}
          >
            Already have an account? Login
          </Typography>
        </Stack>
      </Form>
    )}
  </Formik>
);

SignupForm.propTypes = {
  switchToLogin: PropTypes.func.isRequired,
};

const LoginForm = ({ switchToSignup }) => (
  <Formik
    initialValues={{
      email: "",
      password: "",
    }}
    validationSchema={LoginSchema}
    onSubmit={(values) => {
      console.log("Login values:", values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Stack spacing={2}>
          <Field
            as={TextField}
            label="Email"
            name="email"
            type="email"
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <Field
            as={TextField}
            label="Password"
            name="password"
            type="password"
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
          />
          <Button type="submit" variant="contained">
            Login
          </Button>
          <Typography
            variant="body2"
            align="center"
            sx={{ cursor: "pointer", mt: 2 }}
            onClick={switchToSignup}
          >
            Don&#39;t have an account? Create one
          </Typography>
        </Stack>
      </Form>
    )}
  </Formik>
);

LoginForm.propTypes = {
  switchToSignup: PropTypes.func.isRequired,
};

const Signup = () => {
  const [isSignup, setIsSignup] = useState(true);

  const switchToSignup = () => setIsSignup(true);
  const switchToLogin = () => setIsSignup(false);

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        height: "100vh",
        backgroundImage: "url('https://source.unsplash.com/random')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Grid item xs={11} sm={8} md={6} lg={4}>
        <FormContainer>
          <Typography variant="h4" gutterBottom align="center">
            {isSignup ? "Sign Up" : "Login"}
          </Typography>
          {isSignup ? (
            <SignupForm switchToLogin={switchToLogin} />
          ) : (
            <LoginForm switchToSignup={switchToSignup} />
          )}
        </FormContainer>
      </Grid>
    </Grid>
  );
};

export default Signup;
