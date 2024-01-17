import React from "react";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  useLazyGetAlbumQuery,
  useLazyGetAlbumsQuery,
  useLazyGetCommentQuery,
  useLazyGetCommentsQuery,
  useLazyGetPhotoQuery,
  useLazyGetPhotosQuery,
  useLazyGetPostCommetsQuery,
  useLazyGetPostQuery,
  useLazyGetPostsByUserQuery,
  useLazyGetPostsQuery,
  useLazyGetTodoQuery,
  useLazyGetTodosQuery,
  useLazyGetUserQuery,
  useLazyGetUsersQuery,
} from "./store/rtk";

function App() {
  const [albumId, setAlbumId] = React.useState();

  const [triggerAlbum, album] = useLazyGetAlbumQuery();
  const [triggerAlbums, albums] = useLazyGetAlbumsQuery();
  const [triggerComment, comment] = useLazyGetCommentQuery();
  const [triggerComments, comments] = useLazyGetCommentsQuery();
  const [triggerPhoto, photo] = useLazyGetPhotoQuery();
  const [triggerPhotos, photos] = useLazyGetPhotosQuery();
  const [triggerPost, post] = useLazyGetPostQuery();
  const [triggerPosts, posts] = useLazyGetPostsQuery();
  const [triggerPostComments, postComments] = useLazyGetPostCommetsQuery();
  const [triggerTodos, todos] = useLazyGetTodosQuery();
  const [triggerTodo, todo] = useLazyGetTodoQuery();
  const [triggerUser, user] = useLazyGetUserQuery();
  const [triggerUsers, users] = useLazyGetUsersQuery();
  const [triggerPostsByUser, postsByUser] = useLazyGetPostsByUserQuery();

  const handleAlbumsClick = () => {
    triggerAlbums(1);
  };
  const handleAlbumClick = () => {
    triggerAlbum(albumId);
  };

  return (
    <div className="App">
      <header
        className="App-header"
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <img src={viteLogo} className="App-logo" alt="logo" height="44px" />
        <button className="App-link" onClick={handleAlbumsClick}>
          {"Fetch Albums data"}
        </button>
        <table>
          {albums?.data?.map((album) => (
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
          {"Album ID: "}
          <input
            type="number"
            value={albumId}
            onChange={(e) => setAlbumId(e.target.value)}
          />
        </label>
        <button onClick={handleAlbumClick}>{"Fetch Album data"}</button>
        <table>
          {album?.data ? (
            <tbody>
              <tr>
                <td>{album.data.id}</td>
                <td>{album.data.title}</td>
                <td>{album.data.userId}</td>
              </tr>
            </tbody>
          ) : null}
        </table>
      </header>
    </div>
  );
}

export default App;
