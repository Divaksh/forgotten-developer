import React from "react";
import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./header";
import List from "./list/list";
import Post from "./post";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ state, actions }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);

  return (
    <>
      {/* Add some metatags to the <head> of the HTML. */}
      <Title />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
          rel="stylesheet"
        ></link>

        {/* Styling for Syntax Highlighting*/}
        <link rel="stylesheet" href="https://unpkg.com/dracula-prism/css/dracula-prism.css" />

      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles} />



      {/* Main container of the site. */}
      <Container>

        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main>
          <Nav />
          <PostsCotainer>
            <Switch>
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPostType} />
              <PageError when={data.isError} />
            </Switch>
          </PostsCotainer>
        </Main>
        <Footer></Footer>
      </Container>
    </>
  );
};

export default connect(Theme);

const globalStyles = css`
  body {
    margin: 0;
    font-family: "Source Code Pro", monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #11100f;
    color: white;
    overflow: hidden;
  }

  a {
    color: white;
    text-decoration: underline;
    text-decoration-color: #0f0;
    &:hover {
      color: #0f0;
    }
  }

  ::selection {
    text-shadow: none;
    background-color: #00ff00 !important;
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
  background: #0f0; 
}
`;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr 30px;
`;

const Main = styled.div`
  display: grid;
  grid-template-columns: 2fr 10fr;
  overflow: hidden;
  margin-top: 30px;
`;

const PostsCotainer = styled.div`
  overflow-y: scroll;
  padding: 24px;
  margin-bottom: 140px; /* 120px for solution and 20px for footer */
`;

const Footer = styled.div`
  border-top: 1px solid lightgrey;
`;