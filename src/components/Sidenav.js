// import * as React from 'react';
import { useState } from "react";
import {
  styled,
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Analytics from "../RouterComponents/Analytics";
import { MdHome } from "react-icons/md";
import Ddefault from "../RouterComponents/Default";
import PrimarySearchAppBar from "./SearchBar";
import ZoomOutMapIcon from "@mui/icons-material/ZoomOutMap";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import "./Sidenav.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";
import Theme, { Login } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";
import { Hidden } from "@mui/material";
import Statistics from "../RouterComponents/Statistics";
import Users from "../RouterComponents/Users";
import { useNavigate } from "react-router-dom";
import LastUpdatedTooltip from "./TooltipComponent/Tooltip";
import { SiPowerbi } from "react-icons/si";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import Simplechatbot from "./ChatBotComponent/Chatbot";

import GroupIcon from "@mui/icons-material/Group";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import ChatPage from "./ChatBotComponent/ChatPage";
import User2 from "../RouterComponents/User2";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LoginForm from "../RouterComponents/Login";
import MapContainer from "../RouterComponents/MapPage";
import MapIcon from "@mui/icons-material/Map";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));
const useStyles = makeStyles((theam) => ({
  drawerPaper: {
    width: drawerWidth,
    overflow: "hidden",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
}));
export default function Sidenav() {
  const navigate = useNavigate();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const [menudata, setMenudata] = useState("Default");
  const classes = useStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (text) => {
    console.log("fffffffffffff", text);
    navigate(`/${text.toLowerCase()}`);
  };

  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const handleLogout = () => {
    localStorage.removeItem("isLogedin");
    navigate("/login");
  };
  const handleLogoutDialogOpen = () => {
    setLogoutDialogOpen(true);
  };
  const handleLogoutDialogClose = () => {
    setLogoutDialogOpen(false);
  };
  const handleLogoutConfirmed = () => {
    handleLogout();
    handleLogoutDialogClose();
  };

  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          elevation={4}
          sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              {/* <img src="./icons/berry.jpg" className='Header-logo' /> */}
            </Typography>
            <h2 className="berry">GM Test</h2>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => {
                setOpen(!open);
              }}
              edge="start"
            >
              <MenuIcon className="zoombutton" />
            </IconButton>
            <PrimarySearchAppBar />

            <div className="zoom">
              <IconButton>
                <NotificationsIcon
                  sx={{ fontSize: "28px" }}
                  className="zoombutton"
                />
              </IconButton>

              <IconButton
                onClick={() => {
                  navigate("/users");
                }}
              >
                <AccountCircleIcon
                  sx={{ fontSize: "28px" }}
                  className="zoombutton"
                />
              </IconButton>

              {/* <IconButton>
                <SettingsIcon
                  sx={{ fontSize: "28px" }}
                  className="zoombutton"
                />
              </IconButton> */}

              <LastUpdatedTooltip />

              <IconButton onClick={handleLogoutDialogOpen}>
                <LogoutIcon />
              </IconButton>
              <Dialog
                open={logoutDialogOpen}
                onClose={handleLogoutDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                  style: {
                    background: "linear-gradient(to right, #6a11cb, #2575fc)",
                    color: "white",
                  },
                }}
              >
                <DialogTitle id="alert-dialog-title">
                  {"Logout Confirmation"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText
                    id="alert-dialog-description"
                    style={{ color: "white" }}
                  >
                    Are you sure you want to logout?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button
                    onClick={handleLogoutDialogClose}
                    color="primary"
                    style={{
                      color: "white",
                    }}
                  >
                    No
                  </Button>
                  <Button
                    onClick={handleLogoutConfirmed}
                    color="primary"
                    style={{ color: "white" }}
                    autoFocus
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </div>
          </Toolbar>
        </AppBar>

        <Drawer
          variant="permanent"
          open={open}
          classes={{ paper: classes.drawerPaper }}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "rtl" ? (
                <ChevronRightIcon />
              ) : (
                <ChevronLeftIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List sx={{ paddingBottom: "0px", paddingTop: "0px" }}>
            {["Home", "Analytics"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => handleClick(text)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: "#ede7f6",
                      borderRadius: "15px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index === 0 ? <HomeIcon /> : <AnalyticsIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <Divider />
              </ListItem>
            ))}
          </List>

          <List sx={{ paddingBottom: "0px", paddingTop: "0px" }}>
            {["Power-bi"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => handleClick(text)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 0, // Set minHeight to 0 to remove top and bottom padding
                    justifyContent: open ? "initial" : "center",
                    padding: 0,
                    px: 2.5,
                    "&:hover": {
                      backgroundColor: "#ede7f6",
                      borderRadius: "15px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto", // Adjust the right margin for spacing
                      justifyContent: "center",
                      "&:hover": {
                        color: "#YourHoverColor", // Set the same hover color for both icons
                      },
                    }}
                  >
                    {index % 2 === 0 ? <SiPowerbi /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />

          <List sx={{ paddingBottom: "0px", paddingTop: "0px" }}>
            {["users", "Chat-user"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottom: "1px solid #transparent",
                }}
                onClick={() => handleClick(text)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,

                    "&:hover": {
                      backgroundColor: "#ede7f6",
                      borderRadius: "15px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <GroupIcon /> : <QuestionAnswerIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <Divider sx={{ marginTop: 0 }} />
              </ListItem>
            ))}
          </List>

          <List sx={{ paddingBottom: "0px", paddingTop: "0px" }}>
            {["User2", "Map-page"].map((text, index) => (
              <ListItem
                key={text}
                disablePadding
                sx={{
                  display: "block",
                  paddingTop: 0,
                  paddingBottom: 0,
                  borderBottom: "1px solid #transparent",
                }}
                onClick={() => handleClick(text)}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,

                    "&:hover": {
                      backgroundColor: "#ede7f6",
                      borderRadius: "15px",
                    },
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    {index % 2 === 0 ? <PersonIcon /> : <MapIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
                <Divider sx={{ marginTop: 0 }} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            mt: 8,
            overflow: "hidden",
            height: "100%",
            width: "100%",
          }}
        >
          <Routes>
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/home" element={<Ddefault />} />
            <Route path="/power-bi" element={<Statistics />} />
            <Route path="/users" element={<Users />} />
            <Route path="/Chat-user" element={<ChatPage />} />
            <Route path="/user2" element={<User2 />} />
            <Route path="/Map-page" element={<MapContainer />} />
            {/* // <Route path="/login" element={<LoginForm />} /> */}
          </Routes>
        </Box>
      </Box>
    </>
  );
}
