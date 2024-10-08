import { styled } from "styled-components";

export const FilterbarContainer = styled.div`
  background-color: ${(props) => props.theme?.colors.white};
  padding: 15px;
  border-radius: 5px;
  margin: 20px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: space-between;
`;

export const FieldContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;
`;

export const SearchBtn = styled.button`
  height: 100%;
  background-color: ${(props) => props.theme?.colors.primary};
  color: ${(props) => props.theme?.colors.white};
  padding: 0.75em 2em;
  cursor: pointer;
`;
