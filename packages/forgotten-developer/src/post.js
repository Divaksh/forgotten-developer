import React from "react";
import { connect, styled } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <>
      <div>
        <PostTitle>
          <h2>{post.title.rendered}</h2>
        </PostTitle>
        <PostContainer>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </PostContainer>
      </div>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/components/prism-core.min.js"
        integrity="sha512-hqRrGU7ys5tkcqxx5FIZTBb7PkO2o3mU6U5+qB9b55kgMlBUT4J2wPwQfMCxeJW1fC8pBxuatxoH//z0FInhrA=="
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js"
        integrity="sha512-ROhjG07IRaPZsryG77+MVyx3ZT5q3sGEGENoGItwc9xgvx+dl+s3D8Ob1zPdbl/iKklMKp7uFemLJFDRw0bvig=="
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default connect(Post);

const PostContainer = styled.div`
  font-size: 18px !important;
  p {
    line-height: 1.6em;
  }
  img {
    max-width: 100%;
    height: 100%;
  }
`;

const PostTitle = styled.h2`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
