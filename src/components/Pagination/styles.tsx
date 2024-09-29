import { styled } from "styled-components";

export const PaginationContainer = styled.div`
  background-color: ${(props) => props.theme?.colors.white};
  color: ${(props) => props.theme?.colors.primary};
  margin: 20px 0;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-evenly;
`;

export const PaginationButton = styled.button<{
  $isDots?: boolean;
  $isActive: boolean;
}>`
  background-color: inherit;
  border: none;
  border-radius: 50%;
  display: inline-block;
  padding: 10px;
  font-size: 1rem;
  font-weight: bold;
  cursor: ${(props) => (props.$isDots ? "auto" : "pointer")};
  border: ${(props) =>
    "1px solid " + (props.$isActive ? props.theme?.colors.primary : "inherit")};
  margin-right: 10px;
  height: 40px;
  width: 40px;
  text-align: center;

  &:hover {
    border: ${(props) =>
      "1px solid " + (props.$isDots ? "inherit" : props.theme?.colors.primary)};
  }
`;

export const PaginationCTAContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
