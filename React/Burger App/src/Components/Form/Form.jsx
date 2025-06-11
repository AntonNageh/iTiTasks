import  { useState } from "react";
import styles from "./Form.module.css";
import { SignIn, SignUp } from "@clerk/clerk-react";

export default function Form() {
  const [rightPanelActive, setRightPanelActive] = useState(false);

  const handleSignUpClick = () => {
    setRightPanelActive(true);
  };

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };
// filepath: c:\Users\AVVA\OneDrive\Desktop\iTi\React\Burger App\final\burger-master\src\Components\Form\Form.jsx
const clerkAppearance = {
  baseTheme: "light",
  elements: {
    fieldInput: {
      padding: '8px',
      margin: '0', // Remove margins
    },
    formButtonPrimary: "bg-[#fbfada] hover:bg-[#fbfada]",
  },
  layout: {
    showOptionalFields: false,
    showLabels: false,
    unsafe_disableDevelopmentModeWarnings: true
  }
}
  
  
  return (
    <div> 
      <div
        className={`${styles.container}${rightPanelActive ? " " + styles["right-panel-active"] : ""} ${styles.flex} container-fluid`}
        id="container"
      >
    <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
      <SignUp appearance={clerkAppearance}/>
    </div>
        <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
         <SignIn />
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button className={styles.ghost} id="signIn" onClick={handleSignInClick}>
                Sign In
              </button>
            </div>
            <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}>
              <h1>Hello, Friend!</h1>
              <p>
                Enter your personal details and start journey with us
              </p>
              <button className={styles.ghost} id="signUp" onClick={handleSignUpClick}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
