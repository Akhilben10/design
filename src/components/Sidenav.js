// import * as React from 'react';
import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Analytics from '../RouterComponents/Analytics';
import { MdHome } from "react-icons/md";
import Ddefault from '../RouterComponents/Default';
import PrimarySearchAppBar from './SearchBar';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import './Sidenav.css';
import SpeedIcon from '@mui/icons-material/Speed';
import Theme from '@mui/icons-material';
import { makeStyles } from '@material-ui/core';
import { Hidden } from '@mui/material';


const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);
const useStyles = makeStyles((theam)=>({
  drawerPaper:{
    width: drawerWidth,
    overflow: 'hidden',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  }
}))
export default function Sidenav() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [menudata, setMenudata] = useState("Default");
  const classes= useStyles()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClick = (text) => {
    console.log('fffffffffffff', text)
    setMenudata(text)
  }
  // const styles = (theme: Theme) =>
  // createStyles({
  //   scrollBar: {
  //     '&::-webkit-scrollbar': {
  //       width: '0.4em'
  //     },
  //     '&::-webkit-scrollbar-track': {
  //       '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)'
  //     },
  //     '&::-webkit-scrollbar-thumb': {
  //       backgroundColor: 'rgba(0,0,0,.1)',
  //       outline: '1px solid slategrey'
  //     }
  //   }
  // });

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" elevation={4} sx={{ backgroundColor: "#ffffff", color: "#2f2f2f" }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              <img src="./icons/berry.jpg" className='Header-logo' />

            </Typography>
            <h2 className='berry'>BERRY</h2>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => { setOpen(!open) }}
              // onClick={handleDrawerOpen}
              edge="start"

            >
              <div className='menu'><MenuIcon sx={{ fontSize: "28px" }} className='zoombutton' /></div>

            </IconButton>
            <PrimarySearchAppBar />

            <div className='zoom'>
              <IconButton>
                <NotificationsIcon sx={{ fontSize: "28px" }} className='zoombutton' />
              </IconButton>

              <IconButton  >
                <ZoomOutMapIcon sx={{ fontSize: "28px" }} className='zoombutton' />
              </IconButton>

              <IconButton  >
                <AccountCircleIcon sx={{ fontSize: "28px" }} className='zoombutton' />
              </IconButton>

              <IconButton   >
                <SettingsIcon sx={{ fontSize: "28px" }} className='zoombutton' />
              </IconButton>
            </div>

          </Toolbar>
        </AppBar>
        
        <Drawer variant="permanent" open={open} classes={{paper: classes.drawerPaper}}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Default', 'Analytics'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleClick(text)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 ? <SpeedIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Statistics', 'Data', 'Chart'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleClick(text)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Users', 'Customer', 'Chat', 'Kanban', 'Mail', "Calendar", "Contact", "E-commerce"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleClick(text)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ display: 'block' }} onClick={() => handleClick(text)}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
    


        {/* <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />

          <List>
            <h3>Dashboard</h3>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Default")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MdHome />
                </ListItemIcon>
                <ListItemText primary="Default" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Analytics")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </ListItem>

          </List>
          <Divider />
          <List>
            <h2>Dashboard</h2>
            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Default")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MdHome />
                </ListItemIcon>
                <ListItemText primary="Default" />
              </ListItemButton>
            </ListItem>


            <ListItem disablePadding sx={{ display: 'block' }} onClick={() => setMenudata("Analytics")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="Analytics" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding sx={{
              display: 'block', '&:hover': {
                backgroundColor: '#D8BFD8',
                borderRadius: '20px',
              }
            }} onClick={() => setMenudata("Default")}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <MdHome />
                </ListItemIcon>
                <ListItemText primary="Default" />
              </ListItemButton>
            </ListItem>

          </List>

        </Drawer> */}
        <Box component="main" sx={{ flexGrow: 1, p: 3  , mt:6}}>
          {
            menudata === "Analytics" && <Analytics />
          }
          {
            menudata === "Default" && <Ddefault />
          }
        </Box>
      </Box>
    </>
  );
}