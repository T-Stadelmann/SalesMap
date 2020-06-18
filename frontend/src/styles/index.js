import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
    @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"); */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto";
        font-weight: normal;
        font-size: 2vh;
        :focus {
            outline: none;
        }
    }
`;

export const theme = {
    borderRadius: '6px',
    mainColor: 'red',
    secondaryColor: 'white',
    background: 'grey',
}