import { styled } from 'styled-components';
import colors from '../../../Shared/utils/UtilStyles';

export const CartDetailsContainer = styled.div`
     padding: 20px;
`;

export const List = styled.ul``;

export const Item = styled.li`
     padding: 20px;
     display: flex;

     & img {
          width: 100px;
          aspect-ratio: 1/1;
          margin-right: 20px;
     }

     & div {
          width: 100%;
          text-align: center;
     }

     & div h4 {
          text-align: center;
     }
`;

export const Button = styled.button`
     background-color: ${colors.teal};
     color: ${colors.white};
     padding: 10px 20px;
     margin-right: 20px;
     cursor: pointer;
     border-radius: 5px;
`;
