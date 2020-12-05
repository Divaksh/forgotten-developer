import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import FeaturedMedia from "./featured-media";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];
  // Get the data of the author.
  const author = state.source.author[post.author];
  // Get a human readable date.
  const date = new Date(post.date);

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

  return data.isReady ? (
    <>
      <Container>
        <div>
          <PostTitle
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />

          {/* Only display author and date on posts */}
          {data.isPost && (
            <div>
              {/*}              {author && (
                <StyledLink link={author.link}>
                  <Author>
                    By <b>{author.name}</b>
                  </Author>
                </StyledLink>
              )}
              */}
              <DateWrapper>
                {" "}
                Compiled on <b>{date.toDateString()}</b>
              </DateWrapper>
              <PublishIn>
                {" "}
                in <b>{state.source.category[post.categories[0]].name}</b>
              </PublishIn>
            </div>
          )}
        </div>

        {/* Look at the settings to see if we should include the featured image */}
        {state.theme.featured.showOnPost && (
          <FeaturedMedia id={post.featured_media} />
        )}

        {/* Render the content using the Html2React component so the HTML is processed
       by the processors we included in the libraries.html2react.processors array. */}
        <Content>
          <Html2React html={post.content.rendered} />
        </Content>
      </Container>
    </>
  ) : null;
};

export default connect(Post);

const Container = styled.div``;

const Author = styled.span``;

const DateWrapper = styled.span``;

const Content = styled.div`
  font-size: 18px !important;
  p {
    line-height: 1.6em;
  }
  img {
    max-width: 100%;
    height: 100%;
  }

  :not(pre) > code[class*="language-"], pre[class*="language-"] {
    background: rgba(40, 41, 54, 1);
    border-radius: .75em;
    border: .3em solid hsl(0, 0%, 33%);
    box-shadow: 1px 1px 0.5em black inset;
  }

  pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  code[class*="language-"], pre[class*="language-"] {
    background: hsl(0, 0%, 8%) !important;
  }

  pre::-webkit-scrollbar-thumb {
    background-color: #0c0;
    border-radius: 15px;
  }

  pre::-webkit-scrollbar-thumb:hover {
    background-color: #0f0;
    border-radius: 15px;
  } 

  pre::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 15px;
  }

  .tablepress, .wp-block-table {
    text-align: left;
    min-width: 60%;
    max-width: 80%;
    margin: 0 auto;
    display: table;
    padding: 1em 5px 1em 5px;
  }

  td {
    font-weight: normal;
    font-size: 1em;
    -webkit-box-shadow: 0 2px 2px -2px #0E1119;
    -moz-box-shadow: 0 2px 2px -2px #0E1119;
    box-shadow: 0 2px 2px -2px #0E1119;
  }
  
  td,
  th {
    padding-bottom: 2%;
    padding-top: 2%;
    padding-left: 2%;
    padding-right: 2%;
  }
  
  /* Background-color of the odd rows */
  tr:nth-child(odd) {
    background-color: #323C50;
  }
  
  /* Background-color of the even rows */
  tr:nth-child(even) {
    background-color: #2C3446;
  }
  
  th {
    background-color: #1F2739;
  }
  
  td:first-child {
    color: #0d0;
  }
  
  tr:hover {
    background-color: #464A52;
    -webkit-box-shadow: 0 6px 6px -6px #0E1119;
    -moz-box-shadow: 0 6px 6px -6px #0E1119;
    box-shadow: 0 6px 6px -6px #0E1119;
  }
  
  td:hover {
    background-color: #0f0;
    color: #000;
    font-weight: bold;
    box-shadow: #0a0 -1px 1px, #0a0 -2px 2px, #0a0 -3px 3px, #0a0 -4px 4px, #0a0 -5px 5px, #0a0 -6px 6px;
    transform: translate3d(6px,-6px,0);
    transition-delay: 0s;
    transition-duration: .4s;
    transition-property: all;
    transition-timing-function: line;
  }

`;

const PublishIn = styled.span`
  font-size: 16px !important;
`;

const PostTitle = styled.h2`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;