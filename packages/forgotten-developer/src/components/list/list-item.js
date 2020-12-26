import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  // Get the data of the author.
  const author = state.source.author[item.author];
  // Get the data of the category.
  const category = state.source.category[item.categories[0]]
  // Get the date of the post.
  const date = new Date(item.date);
  return (
    <article>
      <Title>
        <Link link={item.link}>
          <span dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
        </Link>
      </Title>

      <div>
        {/* If the post has an author, we render a clickable author text. */}
 {/*        {author && (
          <StyledLink link={author.link}>
            <AuthorName>
              By <b>{author.name}</b>
            </AuthorName>
          </StyledLink>
        )}
*/}
        <PublishDate>
          Compiled on <b>{date.toDateString()}</b>
        </PublishDate>
        <PublishIn>
          {" in "}
          <StyledLink link={category.link}>
            <CategoryName>
              <b>{category.name}</b>
            </CategoryName>
          </StyledLink>
        </PublishIn>
      </div>

      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
      )}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  padding-bottom: 8px;
  box-sizing: border-box;

  && ::before {
    font-size: 26px;
    color: #fff;
    content: "cd ";
    text-indent: 0px;
    letter-spacing: -20px;
    opacity: 0;
    transition: letter-spacing 0.3s ease-out, opacity 0.3s ease-out;
    text-decoration: none;
  }
  && :hover::before {
    text-indent: 0px;
    letter-spacing: normal;
    opacity: 1;
    text-decoration: none;
  }
`;

const CategoryName = styled.span`
  font-size: 16px !important;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  font-size: 16px !important;
`;

const PublishIn = styled.span`
  font-size: 16px !important;
`;

const Excerpt = styled.div`
  line-height: 1.6em;
  font-size: 18px !important;
  text-align: justify;
`;
