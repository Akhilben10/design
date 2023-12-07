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
  Navigate,
  useLocation,
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

//import Simplechatbot from "./components/ChatBotComponent/Chatbot";
//import SimpleChatbott from "./components/ChatBotComponent/ChatPage";

// import Header from './components/Header';

function App() {
  const location = useLocation();

  // Access the pathname, search, and hash properties of the location object
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

  return (
    <div classes={{ paper: classes.drawerPaper }}>
      <Sidenav />

      {/* {token == true ? <Sidenav /> : <LoginForm />} */}
    </div>
  );
}
export default App;
{
  /* <Routes>
        <Route
          path="/design"
          element={() => {
            const pathnamee = pathname == "/design" && "/login";
            return <Navigate to={pathnamee} replace />;
          }}
        />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/"
          element={({ location }) => {
            // Use the isTokenPresent function to conditionally set the destination
            const destination = token == "true" ? "/main" : "/login";

            // Render the Navigate component with the dynamically determined destination
            return <Navigate to={destination} replace />;
          }}
        />
        <Route path="/main" element={<Sidenav />} />
      </Routes> */
}
