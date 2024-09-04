import { useState } from "react";
import styles from "./Auth.module.css";
interface SignInProps {
  onSwitchToSignUp: () => void;
  onForgetPassword: () => void;
  onSignIn: () => void;
}

const SignIn: React.FC<SignInProps> = ({
  onSwitchToSignUp,
  onForgetPassword,
  onSignIn,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    // logic here
    if (email === "admin" && password === "password") {
      onSignIn();
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign In</h2>
      <input
        className={styles.input}
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={styles.input}
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={styles.button} onClick={handleSignIn}>
        Sign In
      </button>
      <button className={styles.button} onClick={onSwitchToSignUp}>
        Sign Up
      </button>
      <button className={styles.button} onClick={onForgetPassword}>
        Forgot Password
      </button>
    </div>
  );
};

export default SignIn;
