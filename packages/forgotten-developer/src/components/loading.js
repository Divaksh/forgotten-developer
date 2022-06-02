import React from "react";
import { connect, styled } from "frontity";

const Loading = ({state}) => {
  
  // Get the theme color.
  const { themeColor } = state.theme.colors;

    return (
      <Container>
      <div>
          <Loader color={themeColor}>Loading<LoadingText></LoadingText></Loader>
      </div>
    </Container>
      );
    };
    
export default connect(Loading);

const Loader = styled.h1`
  color: ${(props) => props.color};
  -webkit-animation: 1s blink ease infinite;
  -moz-animation: 1s blink ease infinite;
  -ms-animation: 1s blink ease infinite;
  -o-animation: 1s blink ease infinite;
  animation: 1s blink ease infinite;
  

@keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-moz-keyframes blink {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-webkit-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-ms-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

@-o-keyframes "blink" {
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
`;

const LoadingText = styled.span`
  animation:extend 3s steps(3, end) infinite;
  display:inline-block;
  vertical-align:bottom;
  &:before {
    content:"...";
  }

  @keyframes extend {
    0% {
      width:.25em;
    }
    100% {
      width:1em;
    }
  }
`;


const Container = styled.div`
  width: 800px;
  @media screen and (max-width: 560px) {
    width: auto;
  }  
  margin: 0;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    margin-top: 24px;
  }

`;
