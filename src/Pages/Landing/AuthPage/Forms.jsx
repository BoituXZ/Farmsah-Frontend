import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, FormControl, FormGroup, FormHelperText } from '@mui/material';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '0.2rem',
    gap: '1rem',
    height: '56%',
    width: '340px',
  },
  signupForm:{
    display: 'flex',
    flexDirection: 'column',
    padding: '0.2rem',
    gap: '1rem',
    height: "86%",
    width: "380px"
  },
  signupHeader: {
    fontSize: 'var(--h4)',
    textAlign: 'center',
    fontFamily: 'var(--heading)',
    marginBottom: '1rem',
  },
  signuplabel: {
    margin: '0.2rem 0',
    padding: '0 1rem',
    width: '100%',

  },
  signupButton: {
    width: '120px',
    margin: '0.8rem auto',
    height: '38px',
    borderRadius: '20px',
    background: 'var(--hunter-green-primary)',
    border: 'none',
    fontFamily: 'var(--heading)',
    fontWeight: 600,
    color: 'var(--almond-secondary)',
    '&:hover': {
      background: 'var(--blue-gray-accent)',
      color: 'var(--jet-text)',
    },
  },
  message: {
    textAlign: 'center',
    color: 'red',
  },
  loginFormHeader:{
    marginBottom: "0.5rem",
    textAlign: "center",
    fontSize: 'var(--h4)',
    fontFamily: 'var(--heading)',
  },
  loginLabel:{  
    margin: '0.2rem 0',
    color: 'red'
  },
  loginButton: {
    width: "83px",
    height: "38px",
    margin: "0.8rem auto",
    background: "#355e3b",
    borderRadius: "20px",
  }

};

export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
      } else {
        setMessage(data.message);
      }
    } catch {
      setMessage("An error occurred. Please try again");
    }
  };

  return (
    <FormControl component="form" onSubmit={handleSignup} sx={{ ...styles.signupForm }}>
      <Typography variant="h4" sx={{ ...styles.signupHeader }}>Sign Up</Typography>
      <FormGroup>
        <TextField
          label="Name"
          variant="standard"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ ...styles.signuplabel }}
        />
        <TextField
          label="Email"
          type="email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ ...styles.signuplabel }}
        />
        <TextField
          label="Enter Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ ...styles.signuplabel }}
        />
        <TextField
          label="Confirm Password"
          type="password"
          variant="standard"
          fullWidth
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{ ...styles.signuplabel }}
        />
        <Button type="submit" variant="contained" sx={{ ...styles.signupButton }}>
          Sign Up
        </Button>
        {message && <FormHelperText sx={{ ...styles.message }}>{message}</FormHelperText>}
      </FormGroup>
    </FormControl>
  );
};

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include", // This ensures the cookie is sent along with the request
      });
      

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        navigate('/user/');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again");
    }
  };

  return (
    <FormControl component="form" onSubmit={handleLogin} sx={{ ...styles.form }}>
      <Typography variant="h4" sx={{ ...styles.loginFormHeader }}>Login</Typography>
      <FormGroup>
        <TextField
          label="Email"
          type="email"
          variant="standard"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ ...styles.loginLabel }}
        />
        <TextField
          label="Enter Password"
          type="password"
          variant="standard"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ ...styles.loginLabel }}
        />
        <Button type="submit" variant="contained" sx={{ ...styles.loginButton }}>
          Log In
        </Button>
        {message && <FormHelperText sx={{ ...styles.message }}>{message}</FormHelperText>}
      </FormGroup>
    </FormControl>
  );
};
