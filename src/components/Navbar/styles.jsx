import { Link } from "react-router-dom";
import { styled } from "styled-components";
import colors from "../../Shared/utils/UtilStyles";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 30px 20px;
  border-top: 1px solid grey;
  border-bottom: 1px solid grey;
  margin-top: 20px;

  & .cta {
    display: flex;
    gap: 1em;
  }

  @media (max-width: 650px) {
    flex-direction: column;

    & .logo {
      text-align: center;
      margin-bottom: 2em;
    }

    & .cta {
      display: flex;
      justify-content: center;
      align-items: flex-start;
    }
  }
`;

export const LinkList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  @media (max-width: 650px) {
    margin-bottom: 2em;
  }
`;

export const ListItem = styled.li`
  margin-right: 1em;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  border-bottom: ${(props) =>
    props.active === "true" ? "2px solid " + colors.teal : 0};
  &:hover {
    color: red;
  }
`;

export const Btn = styled(Link)`
  margin-left: 20px;
  text-decoration: none;
  color: ${colors.teal};
  border: 1px solid ${colors.teal};
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    color: ${colors.white};
    background-color: ${colors.teal};
  }
`;
