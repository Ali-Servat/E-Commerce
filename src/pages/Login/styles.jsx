import { styled } from 'styled-components';
import colors from '../../Shared/utils/UtilStyles';

export const LoginContainer = styled.form`
     position: fixed;
     left: 50%;
     top: 50%;
     transform: translate(-50%, -50%);
     border: 1px solid black;
     padding: 20px 40px;
     border-radius: 5px;
     display: flex;
     flex-direction: column;
     align-items: center;
`;

export const Input = styled.input`
     display: block;
     padding: 15px;
     margin-bottom: 10px;
     border: 1px solid black;
     border-radius: 5px;
`;

export const LoginBtn = styled.button`
     display: block;
     padding: 10px 20px;
     margin: 0 auto;
     border-radius: 5px;
     margin-top: 20px;
`;

export const ErrorMessage = styled.p`
     display: ${(props) => (props.show === 'true' ? 'block' : 'none')};
     text-align: center;
     color: ${colors.red};
`;
