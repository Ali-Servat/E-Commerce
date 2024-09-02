import { useState } from "react";
import { StyledForm, Title } from "./styles";
import SignUpForm from "./SignUpForm";
import Button from "../../components/Button";
import { useUser } from "../../Shared/context/user-context";
import useInput from "../../Shared/hooks/useInput";

type AccessMode = "signup" | "login";

const UserAccess = () => {
  const [mode, setMode] = useState<AccessMode>("signup");
  const { input: username, handleChange: handleUsernameChange } = useInput();
  const { input: password, handleChange: handlePasswordChange } = useInput();
  const { input: email, handleChange: handleEmailChange } = useInput();
  const { signupUser } = useUser();

  const handleModeChange = () => {
    setMode((prevMode) => (prevMode === "signup" ? "login" : "signup"));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupUser(username, password, email);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>{mode === "signup" ? "Sign up" : "Login"}</Title>
      {mode === "signup" ? (
        <SignUpForm
          onUsernameChange={handleUsernameChange}
          onEmailChange={handleEmailChange}
          onPasswordChange={handlePasswordChange}
        />
      ) : null}
      <br />
      <Button>{mode === "signup" ? "Sign up" : "Login"}</Button>
      <Button type="button" variant="text" onClick={() => handleModeChange}>
        {mode === "signup"
          ? "Already have an account? Login"
          : "Create an account"}
      </Button>
    </StyledForm>
  );
};

export default UserAccess;
