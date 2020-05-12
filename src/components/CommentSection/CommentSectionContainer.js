// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

  const { postId, comments } = props
  console.log(comments)

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((event, index) => {
        return <Comment key={index} comment={event} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
