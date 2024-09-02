import { Input } from "./styles";
import React from "react";

type PropType = {
  onUsernameChange: React.ChangeEventHandler;
  onPasswordChange: React.ChangeEventHandler;
  onEmailChange: React.ChangeEventHandler;
};

const SignUpForm = ({
  onUsernameChange,
  onPasswordChange,
  onEmailChange,
}: PropType) => {
  return (
    <>
      <Input placeholder="username" onChange={onUsernameChange} />
      <Input placeholder="password" onChange={onPasswordChange} />
      <Input placeholder="email" onChange={onEmailChange} />
    </>
  );
};

export default SignUpForm;
