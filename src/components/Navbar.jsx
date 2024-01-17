import { AppBar, Toolbar, Box, Typography } from "@mui/material";

import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  // console.log("Location from nav:", location.pathname);

  const renderRouter = (address, text) => {
    return (
      <Link to={address} style={{ textDecoration: "none" }}>
        <Typography
          color={location.pathname === address ? "white" : "black"}
          className={
            location.pathname === address
              ? "active-route navbar-routes"
              : "navbar-routes"
          }
        >
          {text}
        </Typography>
      </Link>
    );
  };

  return (
    <AppBar
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        boxShadow: "none",
        height: "64px",
        color: "black",
      }}
      // color="secondary"

      position="fixed"
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: "12px !important",
          "@media (max-width:768px)": {
            px: "8px !important",
          },
        }}
      >
        <Box
          className="router-container"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          {renderRouter("/", "Posts")}
          {renderRouter("/albums", "Albums")}
          {/* {renderRouter("/fleetScreen", "Fleet")} */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
