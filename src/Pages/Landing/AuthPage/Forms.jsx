import styles from './Forms.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(""); // Add this state for messages

  const handleSignup = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      // Sending data to the backend
      const res = await fetch("http://localhost:3010/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      // Getting the response from the API
      const data = await res.json();

      if (res.ok) {
        setMessage(data.message); // Update message on success
      } else {
        setMessage(data.message); // Update message on error
      }
    } catch {
      setMessage("An error occurred. Please try again"); // Handle network errors
    }
  };

  return (
    <form onSubmit={handleSignup} className={styles.form}>
      <h4 className={styles.signupHeader}>Sign Up</h4>
      <label className={styles.signuplabel} htmlFor="name">
        Name<br />
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label className={styles.signuplabel} htmlFor="email">
        Email<br />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label className={styles.signuplabel} htmlFor="password">
        Enter Password<br />
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>

      <label className={styles.signuplabel} htmlFor="confirmPassword">
        Confirm Password<br />
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </label>

      <button type="submit" className={styles.signupButton}>
        Sign Up
      </button>

      {/* Display the message */}
      {message && <p className={styles.message}>{message}</p>}
    </form>
  );
};

export const LoginForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [message, setMessage] = useState("")


        const navigate = useNavigate();


        const handleLogin = async (e) => {
          e.preventDefault();
      
          try {
            // Sending login data to the backend
            const res = await fetch("http://localhost:3010/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            });
      
            // Getting the response from the API
            const data = await res.json();
      
            if (res.ok) {
              setMessage(data.message, "Redirecting"); // Update message on success
              navigate('/user/home');
              // Perform actions upon successful login, e.g., storing token, redirecting
            } else {
              setMessage(data.message); // Update message on error
              console.log("Login failed:", data.message || "Unknown error");
            }
          } catch (error) {
            setMessage("An error occurred. Please try again"); // Handle network errors
            console.error("An error occurred. Please try again", error);
          }
        };

    return(
        <form  className={styles.form} onSubmit={handleLogin}>
          <h4>Login</h4>
                    <label htmlFor="email">Email<br/>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </label>
                    
                    <label htmlFor="password">Enter Password<br/>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
                    </label><br/><br/>
                    <button type="submit" className={styles.button}>Log In</button>
                    {/* Display the message */}
                    {message && <p className={styles.message}>{message}</p>}
                  </form>
    )
}