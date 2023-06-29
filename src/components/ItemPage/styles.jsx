import { styled } from 'styled-components';
import colors from '../../Shared/utils/UtilStyles';

export const ItemPageContainer = styled.div`
     display: flex;
     justify-content: space-between;
     padding: 20px;
     max-width: 980px;
     margin: 0 auto;

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

     & div {
          display: flex;
          flex-direction: column;
          align-items: center;
     }

     & div Button {
          width: fit-content;
          padding: 1em;
          background-color: ${colors.teal};
          color: ${colors.white};
          cursor: pointer;
     }
`;
