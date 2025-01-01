import {useState} from "react";
import styles from "./AuthPage.module.css";
import {SignupForm, LoginForm} from './Forms.jsx';



const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Default to the login form

  const toggleForm = () => {
    setIsLogin((prev) => !prev); // Toggle between login and signup
  };

  return (
    <div className={styles.authContainer}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? (
        <LoginForm />
      ) : (
        <SignupForm />
      )}
      <p>
        {isLogin ? "Don't have an account?" : 'Already have an account?'}
        <button onClick={toggleForm} className="toggle-button">
          {isLogin ? 'Sign Up' : 'Login'}
        </button>
      </p>
    </div>
  );
};

export default AuthPage;