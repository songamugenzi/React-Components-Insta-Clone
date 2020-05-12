//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data.js"

const PostsPage = () => {
  // set up state for your data
  const [posts, setPosts] = useState(dummyData)
  
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {
        posts.map((post, index) => {
          return <Post post={post} key={index}/>
        })
      }
    </div>
  );
};

export default PostsPage;
