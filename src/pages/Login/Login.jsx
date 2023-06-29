import { useState } from 'react';
import { api } from '../../Shared/utils/api';
import { ErrorMessage, Input, LoginBtn, LoginContainer } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { useUserValue } from '../../Shared/context/user-context';

const Login = () => {
     const [credentials, setCredentials] = useState({
          username: '',
          password: '',
     });
     const [error, setError] = useState(null);
     const setUser = useUserValue()[1];

     const options = {
          method: 'POST',
          headers: {
               'Content-Type': 'application/json',
          },
          body: JSON.stringify({
               username: credentials.username,
               password: credentials.password,
          }),
     };

     const navigate = useNavigate();

     const fakeGetUser = async () => {
          const response = await fetch(api.getUsers());
          const json = await response.json();

          let result = {};
          json.forEach((user) => {
               if (user.username === credentials.username) {
                    result = user;
               }
          });
          return result;
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          let token;
          try {
               const response = await fetch(
                    'https://fakestoreapi.com/auth/login',
                    options
               );
               token = await response.json();
          } catch (error) {
               setError(error);
          }

          if (token) {
               const user = await fakeGetUser();
               setUser(user);
               setCredentials({
                    username: '',
                    password: '',
               });

               navigate('/home');
          }
     };

     const handleChange = (e) => {
          if (e.target.id === 'username') {
               setCredentials({ ...credentials, username: e.target.value });
          } else {
               setCredentials({ ...credentials, password: e.target.value });
          }
     };

     return (
          <>
               <Link to="/home">Previous Page</Link>
               <LoginContainer onSubmit={(e) => handleSubmit(e)}>
                    <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
                         Login
                    </h3>

                    <Input
                         type="text"
                         id="username"
                         value={credentials.username}
                         onChange={(e) => handleChange(e)}
                         placeholder="Username"
                    />
                    <Input
                         type="text"
                         id="password"
                         value={credentials.password}
                         onChange={(e) => handleChange(e)}
                         placeholder="password"
                    />

                    <ErrorMessage show={error ? 'true' : 'false'}>
                         Wrong username or password!
                    </ErrorMessage>

                    <LoginBtn type="submit">Login</LoginBtn>
               </LoginContainer>
          </>
     );
};

export default Login;
