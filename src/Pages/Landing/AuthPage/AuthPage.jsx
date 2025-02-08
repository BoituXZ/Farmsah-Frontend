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
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
    >
      
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        margin: 'auto',
        padding: '1rem',
        width: '450px',
        height: '480px',
        backdropFilter: 'blur(8rem)',
        borderRadius: '8px',
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