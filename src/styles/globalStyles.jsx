import { createGlobalStyle } from "styled-components";

const lightTheme = {
    colorOne: "#000000",
    colorTwo: "#ffffffff",
    colorHeader: "#ffffff",
    backgroundColorOne: "#ECECEC",
    backgroundColorTwo: "#EA1D2C",
    orange: "#FF642B",
    yellow: "#F5E200",
    inputColor: "#E2E2E2",
    colorIcon: "#252525",

    button: {
        textColor: "#ffffff",
        backgroundColor: "#ea1d2cff",
    },
};

const darkTheme = {
    colorOne: "#ffffffff",
    colorTwo: "#ffffffff",
    colorHeader: "#252525",
    backgroundColorOne: "#121212",
    backgroundColorTwo: "#5D090E",
    orange: "#F64F11",
    yellow: "#FFEB0A",
    inputColor:"#333333",
    colorIcon: "#E2E2E2",
    
    button: {
      textColor: "#ffffff",
      backgroundColor: "#cd131fff",
    },
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    outline: 0;
  }

  body {
    background-color: ${(props) => props.theme.backgroundColorOne};
    transition: background-color 0.2s linear, color 0.2s linear;
    color: ${(props) => props.theme.colorOne};
  }

  body::-webkit-scrollbar {
    width: 0px;
  }

  body, input, button, p {
    font-family: inherit, sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
  }
  
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: #015ea0;
  }

`;

