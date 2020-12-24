import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import { FaTerminal } from "react-icons/fa";
import MobileMenu from "./menu";

const Header = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <>
      {/* Change StickyBar CSS colors based on the post types*/}
      <StickyBar isPostType={data.isPostType}>
        <LogoGroup>
          <LogoIcon>
            <FaTerminal color="#0f0" style={{ marginBottom: "-6px" }} />
          </LogoIcon>
          <LogoText>
            <Title>
              <Link link="/">{state.frontity.title}</Link>
            </Title>
          </LogoText>
        </LogoGroup>
        {/* Show sticky post title for the post page*/}
        {data.isPost ? (
          <>
            <StickyPostTitleSeparator>/</StickyPostTitleSeparator>
            <StickyPostTitle
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </>
        ) : null}
        <MobileMenu />
      </StickyBar>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const StickyBar = styled.header`
  width: 100vw;
  box-sizing: border-box;
  padding: 10px 0 10px 24px;
  color: #fff;
  margin: auto;
  ${(props) =>
    props.isPostType ? "background-color: black" : "background-color: black"};

  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: sticky;
  top: 0;
  border-bottom: 1px solid #454545;
  z-index: 999;

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }
  
  height: 60px;
  @media screen and (min-width: 560px) and (max-width: 1024px) {
    height: 80px;
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
`;

const LogoText = styled.span`
  font-weight: 700 !important;
  white-space: nowrap;
`;

const Title = styled.span`
  a {
    text-decoration: none;
    &:hover {
      color: #0f0;
    }
  }
`;

const StickyPostTitleSeparator = styled.span`
  font-size: 30px !important;
  font-weight: 700 !important;
`;

const StickyPostTitle = styled.span`
  font-weight: 700 !important;
  font-size: 24px !important;
  margin-top: 5px;
  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;