import styles from './Forms.module.css';
import { useState } from 'react';

export const SignupForm = () => {
        const [name, setName] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [confirmPassword, setConfirmPassword] = useState("")

    return(
        <form className={styles.form}>
                    <h4 className={styles.signupHeader}>Sign Up</h4>
                    <label className={styles.signuplabel}  htmlFor="name">Name<br/>
                      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                    </label>
        
                    <label className={styles.signuplabel} htmlFor="email">Email<br/>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </label>
                    
                    <label className={styles.signuplabel} htmlFor="password">Enter Password<br/>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
                    </label>
        
                    <label className={styles.signuplabel} htmlFor="confirmPassword">Confirm Password<br/>
                        <input type="password" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </label>
                    <button type="submit" className={styles.signupButton}>Sign Up</button>
                  </form>
    )
}

export const LoginForm = () => {
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");

    return(
        <form className={styles.form}>
          <h4>Login</h4>
                    <label htmlFor="email">Email<br/>
                      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </label>
                    
                    <label htmlFor="password">Enter Password<br/>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        
                    </label><br/><br/>
                    <button type="submit" className={styles.button}>Log In</button>
                  </form>
    )
}