import React from "react";
import { Typography } from "@mui/material";
import { useLazyGetPostQuery, useLazyGetPostsQuery } from "../store/rtk";
// import {
//   useLazyGetPostQuery,
//   useLazyGetPostsQuery,
//   useLazyGetPostCommetsQuery,
// } from "../store/rtk";

const PostsScreen = () => {
  const [postId, setPostId] = React.useState();

  const [triggerPost, post] = useLazyGetPostQuery();
  const [triggerPosts, posts] = useLazyGetPostsQuery();

  const handlePostsClick = () => {
    triggerPosts(1);
  };
  const handlePostClick = () => {
    triggerPost(postId);
  };
  return (
    <div>
      <Typography variant="h3">{"PostsScreen"}</Typography>
      <button className="App-link" onClick={handlePostsClick}>
        {"Fetch Posts data"}
      </button>
      <table>
        {posts?.data?.map((album) => (
          <tbody key={Math.random()}>
            <tr>
              <td>{album.id}</td>
              <td>{album.title}</td>
              <td>{album.userId}</td>
            </tr>
          </tbody>
        ))}
      </table>

      <label>
        {"Post ID: "}
        <input
          type="number"
          value={postId}
          onChange={(e) => setPostId(e.target.value)}
        />
      </label>
      <button onClick={handlePostClick}>{"Fetch Post data"}</button>
      <table>
        {post?.data ? (
          <tbody key={Math.random()}>
            <tr>
              <td>{post.data.id}</td>
              <td>{post.data.title}</td>
              <td>{post.data.userId}</td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default PostsScreen;
