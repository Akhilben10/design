import React from 'react';
import Sidebar from './components/Sidebar';
import MiniDrawer from './components/Sidenav';
import Statistics from './RouterComponents/Statistics';

import ResponsiveSidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route , NavLink } from "react-router-dom";
import Analytics from './RouterComponents/Analytics';
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import './App.css';
import { makeStyles } from '@material-ui/core';
import Ddefault from './RouterComponents/Default';
import Sidenav from './components/Sidenav';
import Users from './RouterComponents/Users';
// import Header from './components/Header';

function App() {
  const useStyles = makeStyles((theam)=>({
    drawerPaper:{
    
      overflow: 'hidden',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }
  }))
  const classes= useStyles()
  return (
   
    // <Box sx={{ flexGrow: 1 }}>
    //   <Grid container spacing={1}>
    //     <Grid item xs={1}>
    //     {/* <Header handleToggle={handleToggle} /> */}
    //     {/* <ResponsiveSidebar /> */}
    //     <MiniDrawer />
        
    //     </Grid>
    //     <Grid item xs={11}>
    //     <br/>
    //     <br/><br/><br/><br/>
    //     <Router>
    //       <Routes>
    //            <Route path="/" exact element={<Analytics/>}/>
    //            <Route path="/ddefault" exact element={<Ddefault/>}/>
    //       </Routes>
    //     </Router>
        
        
    //     </Grid>
    //   </Grid>
    // </Box>
    <div  classes={{paper: classes.drawerPaper}} >

      <Sidenav />
       {/* <Box component="main" sx={{ flexGrow: 1, p: 3  , mt:6}}> */}
     
      {/* </Box> */}
    </div>
   
   

  );
}
export default App;

