import styles from './Forms.module.css';
import { useState } from 'react';

export const SignupForm = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("")

    return(
        <form className={styles.form}>
                    <label htmlFor="name">Name
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
        
                    <label htmlFor="email">Email
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </label>
                    
                    <label htmlFor="password">Enter Password
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
                    </label>
        
                    <label htmlFor="confirmPassword">Confirm Password
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <button type="submit" className={styles.button}>Sign Up</button>
                  </form>
    )
}

export const LoginForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    return(
        <form className={styles.form}>
                    <label htmlFor="email">Email
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </label>
                    
                    <label htmlFor="password">Enter Password
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
                    </label>
                    <button type="submit" className={styles.button}>Log In</button>
                  </form>
    )
}