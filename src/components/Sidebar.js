// import React from 'react';
// import './Sidebarrr.css';
// import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
// import { Home, Person, Settings } from '@mui/icons-material';
// import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
// import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
// import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
// import EmailIcon from '@mui/icons-material/Email';

// const Sidebar = () => {
//     const listItemStyle ={
//         paddingRight:0,
//         paddingLeft:'25px',
//         display:'flex',
//         justifyContent: 'center',
//     }
//   return (
//     // <div style={{display: 'flex'}}>
//         <Drawer variant="permanent"  anchor="left">
//       <List className="sidebar-position">

//         <ListItem style={listItemStyle} className="sidebar-item">

//           <ListItemIcon>
//             <GridViewOutlinedIcon />
//             {/* <ListItemText primary="dhdc"/> */}
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <EmailIcon /> 
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <CalendarMonthIcon /> 
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <Person />
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <AccountBalanceWalletIcon />
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <Home />
//           </ListItemIcon>

//         </ListItem>

//         <ListItem style={listItemStyle} className="sidebar-item">
//           <ListItemIcon>
//             <Settings />
//           </ListItemIcon>

//         </ListItem>



//       </List>
//     </Drawer>

//   );
// };

// export default Sidebar;
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import Link from '@material-ui/core/Link';
import  './Sidebarrr.css';
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap';



import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PrimarySearchAppBar from './SearchBar.js'
// import { makeStyles } from '@mui/styles';
// import { makeStyles } from '';
// import { Link } from 'react-router-dom';\
// const drawerWidth=640;
// const styles = {
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: 20,
//     scrollBehavior: 'smooth', // Apply smooth scrolling
//   },
// };
// const drawerWidth=340;
// const useStyles = makeStyles((theme) => ({
//   drawerPaper: {
//     width: drawerWidth,
//     '&::-webkit-scrollbar': {
//       width: '12px',
//     },
//     '&::-webkit-scrollbar-thumb': {
//       backgroundColor: theme.palette.primary.main, // Set your desired scrollbar color
//       borderRadius: '8px',
//     },
//     '&::-webkit-scrollbar-track': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }));
 
const Sidebar = ({ open, handleToggle }) => {
// const classes=useStyles();
  const [anchorE1, setAnchorE1] = React.useState(null);

  const handleMenuClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleMenuClose = (event) => {
    setAnchorE1(null);
  };

  return (
    <div className='drawer-name'>
      
      <Drawer
      variant="temporary"
      anchor="left"
      open={open}
      // className={styles.drawer}
      // sx={{ width: '75%' }}
      onClose={handleToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile
      }}
      // classes={{
      //   paper: classes.drawerPaper,
      // }}
      
    >
      
      <p className=''>Dashboard</p>


      <List>
        <ListItem button component={Link} href="/ddefault"> 
            <ListItemIcon><NotificationsIcon /></ListItemIcon>
            <ListItemText primary="Default" />
          </ListItem>
         <ListItem button component={Link} href="/">
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Analytics" />
        </ListItem>



        <Divider />
        <p className=''>Dashboard</p>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Statistics" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Data" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Chart" />
        </ListItem>

        <Divider />
        <p>Application</p>

        <ListItem  >


          <IconButton aria-controls="home-menu" aria-haspopup="true" onClick={handleMenuClick}>
            <HomeIcon />
          </IconButton>
          <ListItemText primary="USER" />
          <Menu
            id="home-menu"
            anchorE1={anchorE1}
            open={Boolean(anchorE1)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <InfoIcon />
              </ListItemIcon>
              <ListItemText primary="Social Profile" />
            </MenuItem>
            <MenuItem onClick={handleMenuClose}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Account Profile" />
            </MenuItem>
          </Menu>
        </ListItem>













        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Customer" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Chat" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Kanban" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Mail" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Calender" />
        </ListItem>
        <ListItem button >
          <ListItemIcon><NotificationsIcon /></ListItemIcon>
          <ListItemText primary="Contact" />
        </ListItem>


      </List>


      <List>
        {/* {menuItem.map((item, index) => (
          <ListItem button key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text}/>
          </ListItem>
        ))} */}
      </List>
    </Drawer>
    </div>
  );
};
const Header = ({ handleToggle }) => {
  return (
    <AppBar position="fixed">
      <Toolbar className='Toolbar'>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={handleToggle}
        >
          <p className='berry'>GM Test</p>
          <MenuIcon className='zoombutton'/>
          
        </IconButton>
        <PrimarySearchAppBar />
        <div style={{ flexGrow: 1 }}>
        
        </div>
        <div>
        
          <IconButton>
          <NotificationsIcon className='zoombutton'/>
          </IconButton>
         
          <IconButton  >
          <ZoomOutMapIcon className='zoombutton' />
          </IconButton>

          <IconButton  >
          <AccountCircleIcon className='zoombutton'/>
          </IconButton>

          <IconButton   >
          <SettingsIcon className='zoombutton'/>
          </IconButton>
         
          

          
        </div>

      </Toolbar>
    </AppBar>
  );
};
const ResponsiveSidebar = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Header handleToggle={handleToggle} />
      <Sidebar open={open} handleToggle={handleToggle} />
      {/* Main content goes here */}
    </div>
  );
};
export default ResponsiveSidebar;
