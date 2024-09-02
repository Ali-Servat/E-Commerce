import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useUser } from "../../Shared/context/user-context";
import useInput from "../../Shared/hooks/useInput";
import { Input, StyledForm, Title } from "./styles";

type PropType = {
  onModeChange: () => void;
};

const LoginForm = ({ onModeChange }: PropType) => {
  const { input: username, handleChange: handleUsernameChange } = useInput();
  const { input: password, handleChange: handlePasswordChange } = useInput();
  const { LoginUser } = useUser();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    LoginUser(username, password);
    navigate("/home");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Login</Title>

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

      <br />
      <Button>Login</Button>
      <Button type="button" variant="text" onClick={onModeChange}>
        Create an account
      </Button>
    </StyledForm>
  );
};

export default LoginForm;
