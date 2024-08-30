import { styled } from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../Shared/utils/UtilStyles";

export const CardContainer = styled(Link)`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  height: fit-content;
  &:hover {
    transform: scale(1.01);
    background: linear-gradient(${colors.teal}, ${colors.white});
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  aspect-ratio: 1/1;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h4`
  font-weight: bold;
  text-align: center;
  margin: 20px 0;
  height: 50px;
`;

export const Rating = styled.span`
  display: block;
  text-align: center;
  color: grey;
`;

export const Price = styled.span`
  display: block;
  text-align: center;
`;
