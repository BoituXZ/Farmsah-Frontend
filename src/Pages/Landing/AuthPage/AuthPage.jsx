import { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { SignupForm, LoginForm } from './Forms.jsx';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to the login form

  const toggleForm = () => {
    setIsLogin((prev) => !prev); // Toggle between login and signup
  };

  return (
    <Box id="container"
    sx={{
      display: 'flex',
      alignItems: 'center',
      height: '100vh',
      width: '100%',
      // border: "solid 1px red"
      // padding: '1rem',  
    }}
    >
      
      <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        padding: '1rem',
        backdropFilter: 'blur(8rem)',
        borderRadius: '10px',
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1), 0px 4px 15px rgba(0, 0, 0, 0.1)', // Updated boxShadow for pop-out effect
        backgroundColor: 'rgb(255, 255, 255)', // Ensure background color is set
        transform: 'translateY(-10px)', // Slightly lift the box
        transition: 'transform 0.3s ease-in-out', // Smooth transition for the lift effect
        '&:hover': {
          transform: 'translateY(-15px)', // Lift more on hover
          boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.2), 0px 8px 20px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
        },
      }}
    >
      {isLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <Typography
        sx={{
          fontSize: '12px',
          margin: 'auto 1rem',
        }}
      >
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <Button
          onClick={toggleForm}
          sx={{
            border: 'none',
            background: 'none',
            fontSize: '13px',
            fontFamily: 'var(--heading)',
            fontWeight: 500,
            color: 'var(--xanthous-accent)',
            '&:hover': {
              color: 'var(--blue-gray-accent)',
            },
          }}
        >
          {isLogin ? 'Sign Up' : 'Login'}
        </Button>
      </Typography>
    </Box>
    </Box>
    
  );
};

export default AuthPage;