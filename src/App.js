import React from "react";
//import Sidebar from "./components/Sidebar";
import MiniDrawer from "./components/Sidenav";
import Statistics from "./RouterComponents/Statistics";

import ResponsiveSidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Analytics from "./RouterComponents/Analytics";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import Ddefault from "./RouterComponents/Default";
import Sidenav from "./components/Sidenav";
import Users from "./RouterComponents/Users";
import Chatbot from "react-chatbot-kit";
import SimpleChatbott from "./components/ChatBotComponent/ChatPage";

//import Simplechatbot from "./components/ChatBotComponent/Chatbot";
//import SimpleChatbott from "./components/ChatBotComponent/ChatPage";

// import Header from './components/Header';

function App() {
  const useStyles = makeStyles((theam) => ({
    drawerPaper: {
      overflow: "hidden",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  return (
    <div classes={{ paper: classes.drawerPaper }}>
      <Sidenav />
    </div>
  );
}
export default App;
