import { styled } from 'styled-components';
import colors from '../../Shared/utils/UtilStyles';

export const DialogBoxContainer = styled.div`
     background-color: ${colors.white};
     position: absolute;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     padding: 3em 2em 2em;
     max-width: 600px;
     border: 1px solid ${colors.grey};
     border-radius: 10px;

     & button {
          position: absolute;
          top: 10px;
          right: 10px;
          background-color: inherit;
          border: 0;
          cursor: pointer;
          font-size: 1.5rem;
     }

     & button:hover {
          color: red;
     }
`;
