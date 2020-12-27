import { css } from "frontity";

const cssReset = (colors) => css`
  body {
    margin: 0;
    font-family: "Source Code Pro", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${colors.bodyBg};
    color: white;
    overflow: hidden;

    /* Scrollbar for firefox */
    scrollbar-color: ${colors.themeColor} hsl(0,0%,12%); /* where red is the bar and green is thumb */
    scrollbar-width: thin; /* other option is thick */
  
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  a {
    color: white;
    text-decoration: underline;
    text-decoration-color: ${colors.themeColor};
    &:hover {
      color: ${colors.themeColor};
    }
  }

  ::selection {
    text-shadow: none;
    background-color: ${colors.themeColor} !important;
    color: #000;
  } 

/* Scrollbar for chrome */ 

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.themeColor};
  border-radius: 1px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #fff;
  border-radius: 10px;
}

`;

const Container = css`
    #container{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr 30px;
        @media screen and (min-width: 560px) and (max-width: 1024px) {
          grid-template-rows: 80px 1fr 30px;
        }
        @media screen and (max-width: 560px) {
          grid-template-rows: 80px 1fr 60px;
        }  
    }
`;

const Main = css`
    #main{
        display: grid;
        grid-template-columns: 200px 1fr;
        overflow: hidden;
        @media screen and (max-width: 560px) {
          grid-template-columns: 1fr;
        }  
    }
`;

const ContentContainer = css`
    #content-container{
        overflow-y: scroll;
        padding: 24px;
        height: calc(100vh - 90px); /* header + footer */
        @media screen and (max-width: 560px) {
          height: calc(100vh - 140px);
          padding: 12px;
        }
        @media screen and (min-width: 560px) and (max-width: 1024px) {
          height: calc(100vh - 110px); /* header + footer */
        }
    }
`;

const Footer = css`
    #footer{
        border-top: 1px solid #333;
        box-shadow: 1px 1px 0.5em black inset;
    }
`;


const globalStyle = (colors) =>
  css([
    cssReset(colors),
    Container,
    Main,
    ContentContainer,
    Footer,
  ]);

export default globalStyle;