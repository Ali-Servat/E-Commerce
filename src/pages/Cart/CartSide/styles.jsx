import { styled } from 'styled-components';
import colors from '../../../Shared/utils/UtilStyles';
import { Link } from 'react-router-dom';

export const CartSideContainer = styled.div`
     width: 20%;
     border-right: 1px solid ${colors.grey};
     height: 100vh;

     & h3 {
          color: ${colors.teal};
          text-align: center;
          padding: 20px;
          margin-top: 2em;
     }

     & ul li {
          border: 1px solid ${colors.grey};
          width: 12rem;
          padding: 10px 20px;
          margin: 10px auto;
          text-align: center;
          border-radius: 10px;
          box-shadow: 0 1px 3px ${colors.grey};
     }
`;

export const StyledLink = styled(Link)`
     color: ${colors.teal};
     text-decoration: none;
`;
