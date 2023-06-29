import { styled } from 'styled-components';

export const ItemsListContainer = styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
     gap: 20px;
     min-height: 1030px;
`;
