import { ComponentProps } from "react";
import { StyledButton } from "./styles";

type ButtonPropTypes = {
  variant?: "filled" | "outlined" | "text";
} & ComponentProps<"button">;

const Button = ({ variant = "filled", children, ...rest }: ButtonPropTypes) => {
  return (
    <StyledButton variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};

export default Button;
