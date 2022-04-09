import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { makeStyles, useTheme } from "@mui/material/styles";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
const style = {
  appBar: {
    backgroundColor: "#8A2BE2",
    color: "white",
  },
  menu: {
    right: 0,
    position: "fixed",
  },
};
const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // check for screen size
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const goHome = () => {
    window.location.href = "/";
    handleClose();
  };
  const goCourses = () => {
    window.location.href = "/courses";
    handleClose();
  };
  const goAbout = () => {
    window.location.href = "about/";
    handleClose();
  };
  const goContact = () => {
    window.location.href = "/contact";
    handleClose();
  };
  const goLogin = () => {
    window.location.href = "/login";
    handleClose();
  };
  return (
    <AppBar style={style.appBar}>
      <Toolbar>
        <CodeIcon sx={{ mr: 1, fontSize: "2em" }} />
        <Typography variant="h5">Code in Mind</Typography>
        <PsychologyIcon sx={{ mr: 1, ml: 1, fontSize: "2em" }} />
        {/* if isMobile is true display mobile version of menu 
        or display full menu if isMobile is false */}
        {isMobile ? (
          <>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              style={style.menu}
              onClick={handleMenu}
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => goHome()}>Home</MenuItem>
              <MenuItem onClick={() => goCourses()}>Courses</MenuItem>
              <MenuItem onClick={() => goAbout()}>About</MenuItem>
              <MenuItem onClick={() => goContact()}>Contact</MenuItem>
              <MenuItem onClick={() => goLogin()}>Login</MenuItem>
            </Menu>
          </>
        ) : (
          <>
            <MenuItem onClick={() => goHome()}>Home</MenuItem>
            <MenuItem onClick={() => goCourses()}>Courses</MenuItem>
            <MenuItem onClick={() => goAbout()}>About</MenuItem>
            <MenuItem onClick={() => goContact()}>Contact</MenuItem>
            <MenuItem onClick={() => goLogin()}>Login</MenuItem>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
