import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import AlbumsScreen from "./screens/albumsScreen.jsx";
import PostsScreen from "./screens/postsScreen.jsx";
import NotFound from "./screens/NotFound.jsx";
import MainScreen from "./screens/MainScreen.jsx";

const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <MainScreen />,
      children: [
        {
          element: <PostsScreen />,
          index: true,
        },
        {
          path: "albums",
          element: <AlbumsScreen />,
        },
      ],
    },
    {
      children: [
        { path: "404", element: <NotFound /> },
        { path: "*", element: <Navigate to="/404" /> },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" />,
    },
  ]);

  return routes;
};

export default React.memo(Router);
