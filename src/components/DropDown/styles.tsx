import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;
export const DropDownItem = styled.li`
  background-color: white;
  border: ${(props) => "1px solid " + props.theme.colors.primary};
  padding: 0.5em;
  border-radius: 0.2em;
  cursor: pointer;
  text-align: center;
  width: fit-content;

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

export const DropDownList = styled.ul`
  position: absolute;
  top: 100%;
  width: 100%;
`;
