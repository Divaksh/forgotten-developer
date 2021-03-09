import React from "react";
import { Global, connect, Head } from "frontity";
import Switch from "@frontity/components/switch";
import globalStyles from "./styles/global-styles";

import Header from "./header";
import List from "./list/list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Title from "./title";
import PageError from "./page-error";
import Nav from "./nav";
import Footer from "./footer";

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
      </Head>

      {/* Add some global styles for the whole site, like body or a's. 
      Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors)} />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
        rel="stylesheet"
      ></link>

      {/* Styling for Syntax Highlighting*/}
      <link
        rel="stylesheet"
        href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
      />

      {/* Main container of the site that contains everything in the page. */}
      <div id="container">
        {/* Add the header of the site. */}
        <Header />

        <div id="main">
          <Nav />
          {/* Add the content section. It renders a different component depending
                  on the type of URL we are in. */}
          <div id="content-container">
            <Switch>
              <Loading when={data.isFetching} />
              <List when={data.isArchive} />
              <Post when={data.isPost} />
              <Page when={data.isPage} />
              <PageError when={data.isError} />
            </Switch>
          </div>
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default connect(Theme);
