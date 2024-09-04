import React, { useState } from "react";
import styles from "./Auth.module.css";

interface SignUpProps {
  onSwitchToSignIn: () => void;
}

const SignUp: React.FC<SignUpProps> = ({ onSwitchToSignIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = () => {
    if (email && password && confirmPassword) {
      if (password === confirmPassword) {
        // API to sign up
        console.log("Sign up successful");
      } else {
        setError("Passwords do not match");
      }
    } else {
      setError("Please fill in all fields");
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Sign Up</h2>
      {error && <p className={styles.error}>{error}</p>}
      <form>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="email">
            Email
          </label>
          <input
            className={styles.input}
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="password">
            Password
          </label>
          <input
            className={styles.input}
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputGroup}>
          <label className={styles.label} htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            className={styles.input}
            id="confirmPassword"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            type="button"
            onClick={handleSignUp}
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className={styles.switchMode}>
        <p>
          Already have an account?{" "}
          <button
            className={styles.linkButton}
            type="button"
            onClick={onSwitchToSignIn}
          >
            Sign In
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
