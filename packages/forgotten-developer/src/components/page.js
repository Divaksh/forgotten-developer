import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";
import Comments from "./comments";

const Page = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the theme color.
  const { themeColor } = state.theme.colors;

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <>
      <Container>
        <div>
          <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}

        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content color={themeColor}>
          <Html2React html={post.content.rendered} />
        </Content>
        <Comments postId={post.id} />
      </Container>
    </>
  ) : null;
};

export default connect(Page);

const Container = styled.div``;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

/**
 * This component is the parent of the `content.rendered` HTML. We can use nested
 * selectors to style that HTML.
 */
const Content = styled.div`
  word-break: break-word;
  font-size: 18px !important;

  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
    text-align: justify;
  }

  img {
    width: 100%;
    object-fit: cover;
    object-position: center;
  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.4);
    border-left: 4px solid ${(props) => props.color};
    padding: 4px 16px;
    box-shadow: 1px 1px 0.5em black inset;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }

  /* code block styles */

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: rgba(40, 41, 54, 1);
    border-radius: 0.75em;
    border: 0.3em solid hsl(0, 0%, 33%);
    box-shadow: 1px 1px 0.5em black inset;
  }

  pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #0c0;
    border-radius: 15px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.color};
    border-radius: 15px;
  }

  pre::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 15px;
  }

  /* table styles */

  table {
    table-layout: auto !important;
  }

  .tablepress,
  .wp-block-table {
    text-align: left;
    padding: 5px;
    word-break: normal !important;
    overflow-x: auto;
  }

  td,
  th {
    padding: 10px !important;
  }

  /* Background-color of the odd rows */
  tr:nth-child(odd) {
    background-color: #323c50;
  }

  /* Background-color of the even rows */
  tr:nth-child(even) {
    background-color: #2c3446;
  }

  th {
    background-color: #1f2739;
  }

  td:first-child {
    color: ${(props) => props.color};
  }

  tr:hover {
    background-color: #464a52;
    -webkit-box-shadow: 0 6px 6px -6px #0e1119;
    -moz-box-shadow: 0 6px 6px -6px #0e1119;
    box-shadow: 0 6px 6px -6px #0e1119;
  }

  td:hover {
    background-color: ${(props) => props.color};
    color: #000;
    font-weight: bold;
    box-shadow: #000 -1px 1px, #000 -2px 2px, #000 -3px 3px, #000 -4px 4px,
      #000 -2px 2px, #000 -3px 3px;
    transform: translate3d(3px, -3px, 0);
    transition-delay: 0s;
    transition-duration: 0.3s;
    transition-property: all;
    transition-timing-function: line;
  }
`;

const PublishIn = styled.span`
  font-size: 16px !important;
`;

const Title = styled.h2`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
