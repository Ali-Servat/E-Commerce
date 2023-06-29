import { styled } from 'styled-components';

export const CustomerFeedbackContainer = styled.div`
     margin: 40px;
`;

export const CardsContainer = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
     grid-gap: 2em;
`;

export const Heading = styled.h3`
     text-align: center;
     font-size: 1.5rem;
     font-weight: bold;
     margin-bottom: 2em;
`;
