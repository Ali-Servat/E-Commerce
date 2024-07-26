import { styled } from "styled-components";
import colors from "../../Shared/utils/UtilStyles";

export const ItemPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3em;
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.img`
  max-height: 300px;
  margin-right: 3em;

  @media (max-width: 800px) {
    display: block;
    margin: 2em auto;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & div span {
    display: block;
    margin-bottom: 0.5em;
  }

  & div Button {
    font-size: 1rem;
    width: fit-content;
    padding: 1em;
    background-color: ${colors.teal};
    color: ${colors.white};
    cursor: pointer;
    margin-left: 1em;
  }

  & div a {
    text-decoration: none;
    color: ${colors.teal};
    border: 1px solid teal;
    padding: 1em;
    box-sizing: border-box;
  }
`;
