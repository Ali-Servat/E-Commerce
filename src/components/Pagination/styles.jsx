import { styled } from 'styled-components';
import colors from '../../Shared/utils/UtilStyles';

export const PaginationContainer = styled.div`
     background-color: ${colors.white};
     color: ${colors.teal};
     margin: 20px 0;
     padding: 20px;
     border-radius: 10px;
     display: flex;
     justify-content: space-evenly;
`;

export const PaginationButton = styled.button`
     background-color: inherit;
     border: none;
     border-radius: 50%;
     display: inline-block;
     padding: 10px;
     font-size: 1rem;
     font-weight: bold;
     cursor: ${(props) => (props.type === 'dots' ? 'auto' : 'pointer')};
     border: ${(props) =>
          '1px solid ' + (props.active === 'true' ? colors.teal : 'inherit')};
     margin-right: 10px;
     height: 40px;
     width: 40px;
     text-align: center;

     &:hover {
          border: ${(props) =>
               '1px solid ' +
               (props.type === 'dots' ? 'inherit' : colors.teal)};
     }
`;

export const PaginationCTAContainer = styled.div`
     display: flex;
     align-items: center;
     cursor: pointer;
`;
