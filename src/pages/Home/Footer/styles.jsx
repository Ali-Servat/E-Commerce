import { styled } from 'styled-components';
import colors from '../../../Shared/utils/UtilStyles';

export const FooterContainer = styled.div`
     background-color: black;
     color: ${colors.white};
     padding: 40px;

     & p {
          text-align: center;
     }
`;
