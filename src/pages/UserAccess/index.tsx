import { useState } from "react";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";

type AccessMode = "signup" | "login";

const UserAccess = () => {
  const [mode, setMode] = useState<AccessMode>("login");

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "signup" ? "login" : "signup"));
  };

  return (
    <>
      {mode === "signup" ? (
        <SignUpForm onModeChange={handleModeChange} />
      ) : (
        <LoginForm onModeChange={handleModeChange} />
      )}
    </>
  );
};

export default UserAccess;
