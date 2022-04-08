import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CodeIcon from "@mui/icons-material/Code";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Typography from "@mui/material/Typography";
import Auth from "../utils/auth";

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
  const token = Auth.loggedIn() ? Auth.getToken() : null;

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

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
  const goDashboard = () => {
    window.location.href = "/dashboard";
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
  const goSignup = () => {
    window.location.href = "/signup";
    handleClose();
  };
  const goLogout = () => {
    Auth.logout();
    window.location.href = "/login";
    handleClose();
  };
  return (
    <AppBar style={style.appBar}>
      <Toolbar>
        <CodeIcon sx={{ mr: 1, fontSize: "2em" }} />
        <Typography variant="h5">Code in Mind</Typography>
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
          <MenuItem onClick={() => goDashboard()}>Dashboard</MenuItem>
          <MenuItem onClick={() => goAbout()}>About</MenuItem>
          <MenuItem onClick={() => goContact()}>Contact</MenuItem>
          {token ? (
            <MenuItem onClick={() => goLogout()}>Logout</MenuItem>
          ) : (
            <>
              <MenuItem onClick={() => goSignup()}>Signup</MenuItem>
              <MenuItem onClick={() => goLogin()}>Login</MenuItem>
            </>
          )}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
