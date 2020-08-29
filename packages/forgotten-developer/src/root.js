import React from "react";
import { connect, Head } from "frontity";
import List from "./list/list";
import Post from "./Post";
import Header from "./header";
import Title from "./title";
import Nav from "./nav";

import { Global, css, styled } from "frontity";

const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://kit.fontawesome.com/6e87086a0b.js"
          crossorigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/themes/prism-twilight.min.css"
          integrity="sha512-akb4nfKzpmhujLUyollw5waBPeohuVf0Z5+cL+4Ngc4Db+V8szzx6ZTujguFjpmD076W8LImVIbOblmQ+vZMKA=="
          crossorigin="anonymous"
        />
      </Head>

      <Global
        styles={css`
          body {
            margin: 0;
            font-family: "Source Code Pro", monospace;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            background: #11100f;
            color: white;
          }

          a {
            color: white;
            text-decoration: none;
            background: linear-gradient(180deg, #4285f4, #2a65f8);
            background-repeat: no-repeat;
            background-size: 100% 0.1em;
            background-position: 0 88%;
            transition: background-size 0.25s ease-in;
            &:hover {
              background-size: 100% 88%;
              color: black;
            }
          }

          /* Ham Menu*/
          .ham-menu {
            width: 50px;
            height: 50px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            cursor: pointer;
            transition: transform 330ms ease-out;
            float: right;
          }

          .ham-menu.open {
            transform: rotate(-45deg);
          }

          .line-menu {
            background-color: #fff;
            border-radius: 5px;
            width: 100%;
            height: 6px;
          }

          .line-menu.half {
            width: 50%;
          }

          .line-menu.start {
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: right;
          }

          .open .line-menu.start {
            transform: rotate(-90deg) translateX(3px);
          }

          .line-menu.end {
            align-self: flex-end;
            transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
            transform-origin: left;
          }

          .open .line-menu.end {
            transform: rotate(-90deg) translateX(-3px);
          }
        `}
      />

      <Header />
      <Main>
        <Nav />
        <PostsCotainer>
          {data.isArchive && (
            <div>
              <List />
            </div>
          )}
          {data.isPost && (
            <div>
              <Post />
            </div>
          )}
          {data.isPage && (
            <div>
              <Post />
            </div>
          )}
        </PostsCotainer>
      </Main>
    </>
  );
};

export default connect(Root);

const Main = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
`;

const SideBar = styled.div`
  box-sizing: border-box;
  overflow-wrap: break-word;
  margin: 24px 0 0 0;
  display: block;
  padding: 10px;
  flex-basis: 15rem;
  flex-grow: 1;
  top: 64px;
  width: 30%;
`;

const PostsCotainer = styled.div`
  flex-basis: 0;
  flex-grow: 999;
  min-width: 66%;
  display: flex;
  flex-direction: column;
  padding-bottom: 0;
`;
