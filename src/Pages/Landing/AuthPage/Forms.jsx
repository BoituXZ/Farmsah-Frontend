import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import styles from './Forms.module.css';

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
      const res = await fetch("http://localhost:3010/signup", {
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
    <Box component="form" onSubmit={handleSignup} sx={{ ...styles.form }}>
      <Typography variant="h4" sx={{ ...styles.signupHeader }}>Sign Up</Typography>
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
      {message && <Typography sx={{ ...styles.message }}>{message}</Typography>}
    </Box>
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
      const res = await fetch("http://localhost:3010/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage(data.message);
        navigate('/user/home');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage("An error occurred. Please try again");
    }
  };

  return (
    <Box component="form" onSubmit={handleLogin} sx={{ ...styles.form }}>
      <Typography variant="h4">Login</Typography>
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
      <Button type="submit" variant="contained" sx={{ ...styles.button }}>
        Log In
      </Button>
      {message && <Typography sx={{ ...styles.message }}>{message}</Typography>}
    </Box>
  );
};
