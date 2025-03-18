import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: calc(100% - 32px);
  border: 1px solid grey;
  border-radius: 8px;
  padding: 8px 16px;
  background: var(--primary-light-color);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    background: lightgray;
  }
`;

const ContentText = styled.p`
  font-size: 16px;
`;

const CommentListItem = ({ comment }) => {
  return (
    <Wrapper>
      <ContentText>{comment.content}</ContentText>
    </Wrapper>
  );
};

export default CommentListItem;
