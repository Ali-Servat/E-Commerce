import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

@font-face {
    font-family: sahel;
    src: url('src/App/Assets/Fonts/Sahel.woff');
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body{
    font-family: 'Poppins', sans-serif;
}

ul{
    list-style: none;
}
`;
