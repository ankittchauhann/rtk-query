import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "../components/Navbar.jsx";
// import SidebarTrigger from "../components/MainScreen/SidebarTrigger";
import { Outlet } from "react-router-dom";
// import OverlayInfo from "../components/OverlayInfo";

// const drawerWidth = 70;
// const innerDrawerWidth = 175;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    zIndex: 1,
    // padding: theme.spacing(1),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: "100%",
    height: "calc(100vh - 64px )",
    // marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("all", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      width: `calc(100% )`,
    }),
  })
);

export default function MainScreen() {
  console.log("MainScreen");
  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline /> */}
      <Navbar />

      <Main sx={{ mt: 8, ml: 0 }}>
        {/* <OverlayInfo /> */}
        <Outlet />
      </Main>
    </Box>
  );
}
