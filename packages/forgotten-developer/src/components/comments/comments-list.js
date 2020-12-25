import React from "react";
import { connect, styled } from "frontity";
import { FaTerminal } from "react-icons/fa";

const CommentsList = ({ state, libraries, postId }) => {
  const data = state.source.get(`@comments/${postId}`);
  const Html2React = libraries.html2react.Component;

  return (
    <>
      <Container>
        {/* Show comments header only if there are comments */}
        {data.items.length > 0  && (
          <CommentsHeader>           
              Comments
          </CommentsHeader>
        )}
        {data.items.map(({ id }) => {
          return (
            <>
              <Comment>
                <CommentAuthor>
                <FaTerminal color="#0f0" style={{ marginBottom: "-3px" }} /> {state.source.comment[id].author_name || "Anonymous"}:
                </CommentAuthor>
                <CommentContent>
                  <Html2React
                    html={state.source.comment[id].content.rendered}
                  />
                </CommentContent>
              </Comment>
            </>
          );
        })}
      </Container>
    </>
  );
};

export default connect(CommentsList);

const Container = styled.div`
  width: 90%;
  margin: 20px auto;
`;


const CommentsHeader = styled.h2`
box-sizing:border-box;
display: block;
margin: 10px auto;
:after {
  color: #fff;
  content: "/";
  text-decoration: none;
}
`;

const CommentAuthor = styled.div`
  padding-left: 10px;
  color: #0f0;
`;

const Comment = styled.div`
  box-sizing:border-box;
  margin: 20px 0;
  padding: 20px 0 10px 0;
  color: #fff;
  background: hsl(0,0%,4%) !important;
  box-shadow: 1px 1px 0.5em black inset;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
`;
const CommentContent = styled.div`
  padding-left: 36px;
`;
