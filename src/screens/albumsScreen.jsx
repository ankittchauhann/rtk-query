import React from "react";
import { useLazyGetAlbumQuery, useLazyGetAlbumsQuery } from "../store/rtk";
import { Typography } from "@mui/material";

const AlbumsScreen = () => {
  console.log("AlbumsScreen");
  const [albumId, setAlbumId] = React.useState();

  const [triggerAlbum, album] = useLazyGetAlbumQuery();
  const [triggerAlbums, albums] = useLazyGetAlbumsQuery();
  console.log("albums", album?.data);

  const handleAlbumsClick = () => {
    triggerAlbums(1);
  };
  const handleAlbumClick = () => {
    triggerAlbum(albumId);
  };
  return (
    <div>
      <Typography variant="h3">{"AlbumsScreen"}</Typography>
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
          <tbody key={Math.random()}>
            <tr>
              <td>{album.data.id}</td>
              <td>{album.data.title}</td>
              <td>{album.data.userId}</td>
            </tr>
          </tbody>
        ) : null}
      </table>
    </div>
  );
};

export default AlbumsScreen;
