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
  }

  a {
    color: white;
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
    &:hover {
      color: ${colors.primary};
    }
  }

  ::selection {
    text-shadow: none;
    background-color: ${colors.primary} !important;
    color: #000;
  }

  /* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey; 
  border-radius: 10px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #0c0; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: ${colors.primary}; 
}
`;

const Container = css`
    #container{
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 60px 1fr 30px;
        @media screen and (max-width: 560px) {
        grid-template-rows: 60px 1fr;
        }
        @media screen and (min-width: 560px) and (max-width: 1024px) {
        grid-template-rows: 80px 1fr;
        }
    }
`;

const Main = css`
    #main{
        display: grid;
        grid-template-columns: 2fr 10fr;
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
        margin-bottom: 140px; /* 120px for solution and 20px for footer */
        @media screen and (max-width: 560px) {
        margin-bottom: 0;
        padding: 12px;
        }
    }
`;

const Footer = css`
    #footer{
        border-top: 1px solid lightgrey;
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