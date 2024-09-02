import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(props) =>
    props.variant === "filled" ? props.theme.colors.primary : "inherit"};
  color: ${(props) =>
    props.variant === "filled" ? "white" : props.theme.colors.primary};
  border: ${(props) =>
    props.variant === "text"
      ? "none"
      : "1px solid " + props.theme.colors.primary};
  border-radius: 0.5em;
  padding: ${(props) => (props.variant === "text" ? 0 : "1em")};
  margin-bottom: 1em;
  cursor: pointer;

  &:hover {
    text-decoration: ${(props) =>
      props.variant === "text" ? "underline" : "none"};
  }
`;
