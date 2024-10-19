import React, { useState } from "react";
import SignInPage from "../components/SignInPage";
import LogInPage from "../components/LogInPage";

function Auth() {
  const [step, setStep] = useState(1);
  return (
    <>
      {step === 1 && <SignInPage setStep={setStep}/>}
      {step === 2 && <LogInPage setStep={setStep}/>}
    </>
  );
}

export default Auth;
