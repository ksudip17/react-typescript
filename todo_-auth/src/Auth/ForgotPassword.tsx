import React, { useState } from "react";
import styles from "./Auth.module.css";

interface ForgotPasswordProps {
  onBackToSignIn: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onBackToSignIn }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleForgetPassword = () => {
    if (email) {
      //  API to send reset password email
      console.log("Reset password email sent");
    } else {
      setError("Please fill in email field");
    }
  };

  return (
    <div>
      <h2 className={styles.title}>Forget Password</h2>
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
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            type="button"
            onClick={handleForgetPassword}
          >
            Send Reset Password Email
          </button>
          <button
            className={styles.buttonSecondary}
            type="button"
            onClick={onBackToSignIn}
          >
            Back to Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
