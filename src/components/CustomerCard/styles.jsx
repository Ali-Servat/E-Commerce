import { styled } from 'styled-components';
import colors from '../../Shared/utils/UtilStyles';

export const Card = styled.div`
     border: 1px solid ${colors.grey};
     border-radius: 10px;
     padding: 1em;

     & h4 {
          margin-bottom: 1em;
     }
`;
