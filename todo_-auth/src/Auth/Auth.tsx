import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ForgotPassword from "./ForgotPassword";
import styles from "./Auth.module.css";

interface AuthProps {
  onLoginSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onLoginSuccess }) => {
  const [view, setView] = useState<"signIn" | "signUp" | "forgotPassword">(
    "signIn"
  );

  const handleSwitchToSignUp = () => setView("signUp");
  const handleSwitchToSignIn = () => setView("signIn");
  const handleForgetPassword = () => setView("forgotPassword");

  const handleSignIn = () => {
    
    onLoginSuccess(); // Call this function on successful login
  };

  return (
    <div className={styles.container}>
      {view === "signIn" && (
        <SignIn
          onSwitchToSignUp={handleSwitchToSignUp}
          onForgetPassword={handleForgetPassword}
          onSignIn={handleSignIn}
        />
      )}
      {view === "signUp" && <SignUp onSwitchToSignIn={handleSwitchToSignIn} />}
      {view === "forgotPassword" && (
        <ForgotPassword onBackToSignIn={handleSwitchToSignIn} />
      )}
    </div>
  );
};

export default Auth;
