import React from "react";
import { connect, styled } from "frontity";
import Menu from "./menu";
import Link from "./link";

const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return (
    <>
      <StickyBar isPostType={data.isPostType}>
        <LogoGroup>
          <LogoIcon>
            <i className="fas fa-terminal"></i>
          </LogoIcon>
          <LogoText>
            <Title>
              <Link link="/">{state.frontity.title}</Link>
              {data.isPost && "/"}
            </Title>
          </LogoText>
        </LogoGroup>
        <StickyPostTitle>
          {data.isPost && " " + post.title.rendered}
        </StickyPostTitle>
        <MenuButton>{/*   <Menu /> */}</MenuButton>
      </StickyBar>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StickyBar = styled.header`
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  padding: 10px 0 10px 24px;
  color: #fff;
  margin: auto;
  ${(props) =>
    props.isPostType ? "background-color: black" : "background-color: black"};

  width: inherited;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #454545;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
`;

const LogoGroup = styled.div`
  font-size: 36px !important;
  line-height: 1.1;
  display: flex;
  align-self: center;
`;

const LogoIcon = styled.span`
  margin-right: 4px;
  animation: blinker 0.8s step-start infinite;
  background-image: linear-gradient(90deg, #3e74f9, #6ddb90);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const LogoText = styled.span`
  font-weight: 700 !important;
  white-space: nowrap;
`;

const Title = styled.span`
  margin: 0;
  margin-bottom: 16px;
  a {
    color: white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: none;
    text-decoration: none;
    &:hover {
      background-image: linear-gradient(90deg, #3e74f9, #6ddb90);
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
  }
`;

const StickyPostTitle = styled.span`
  font-weight: 700 !important;
  font-size: 24px !important;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MenuButton = styled.span`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
