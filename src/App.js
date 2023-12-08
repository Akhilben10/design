import React, { useState, useEffect } from "react";

//import Sidebar from "./components/Sidebar";
import MiniDrawer from "./components/Sidenav";
import Statistics from "./RouterComponents/Statistics";

import ResponsiveSidebar from "./components/Sidebar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
  useNavigate,
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
import UserCard2 from "./components/CardComponent/UserCard2";
import LoginForm from "./RouterComponents/Login";
import User2 from "./RouterComponents/User2";
import ChatPage from "./components/ChatBotComponent/ChatPage";
import MapContainer from "./RouterComponents/MapPage";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;
  const search = location.search;
  const hash = location.hash;

  console.log("Current URL:", pathname);
  const useStyles = makeStyles((theam) => ({
    drawerPaper: {
      overflow: "hidden",
      "&::-webkit-scrollbar": {
        display: "none",
      },
    },
  }));
  const classes = useStyles();
  const token = localStorage.getItem("isLogedin");
  console.log("akhil_token", token);
  useEffect(() => {
    if (!token || token === "false") {
      navigate("/login");
    } else if (pathname == "/design" && token === "true") {
      navigate("/home");
    } else if (pathname == "/login" && token === "true") {
      navigate("/home");
    }
  }, [token, navigate]);
  return (
    <Routes>
      {token ? (
        <Route path="/" element={<Sidenav />}>
          <Route index element={<Navigate to="/analytics" />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="/home" element={<Ddefault />} />
          <Route path="/power-bi" element={<Statistics />} />
          <Route path="/users" element={<Users />} />
          <Route path="/Chat-user" element={<ChatPage />} />
          <Route path="/user2" element={<User2 />} />
          <Route path="/map-page" element={<MapContainer />} />
        </Route>
      ) : (
        <Route path="/login" element={<LoginForm />} />
      )}
    </Routes>
  );
}
export default App;
