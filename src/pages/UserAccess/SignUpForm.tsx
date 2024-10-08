import { useUser } from "../../Shared/context/user-context";
import useInput from "../../Shared/hooks/useInput";
import Button from "../../components/Button";
import { StyledForm, Title } from "./styles";
import { Input } from "./styles";

type PropType = {
  onModeChange: () => void;
};

const SignUpForm = ({ onModeChange }: PropType) => {
  const { input: username, handleChange: handleUsernameChange } = useInput();
  const { input: password, handleChange: handlePasswordChange } = useInput();
  const { input: email, handleChange: handleEmailChange } = useInput();
  const { signupUser } = useUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signupUser(username, password, email);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Sign up</Title>

      <Input
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        type="password"
      />
      <Input placeholder="email" value={email} onChange={handleEmailChange} />
      <br />
      <Button>Sign up</Button>
      <Button type="button" variant="text" onClick={onModeChange}>
        Already have an account? Login
      </Button>
    </StyledForm>
  );
};

export default SignUpForm;
