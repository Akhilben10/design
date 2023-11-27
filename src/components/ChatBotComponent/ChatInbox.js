import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Avatar from "@mui/material/Avatar";
import Simplechatbot from "./Chatbot";
import Grid from "@mui/material/Grid";

const drawerWidth = 400;
export default function PermanentDrawerLeft() {
  const [clickedText, setClickedText] = useState(null);
  const handleItemClick = (text) => {
    setClickedText(text);
  };
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Typography paragraph>
            {clickedText && <Simplechatbot clickedText={clickedText} />}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                width: drawerWidth,
                boxSizing: "border-box",
                paddingTop: 9,
              },
            }}
            variant="permanent"
            anchor="right"
          >
            <List>
              {["Akhil", "Kiran", "Monika", "Jyoti", "Pritesh"].map(
                (text, index, array) => (
                  <div key={text}>
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => handleItemClick(text)}
                        sx={{
                          "&:hover": {
                            backgroundColor: "#ede7f6",
                            borderRadius: "15px",
                          },
                          width: "100%",
                          padding: "16px",
                        }}
                      >
                        <Avatar>
                          <img
                            // src="./icons/download.jpg"
                            //imageUrl="https://berrydashboard.io/assets/avatar-1-8ab8bc8e.png"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Avatar>
                        <Typography variant="body1" sx={{ marginLeft: "10px" }}>
                          {text}
                        </Typography>
                      </ListItemButton>
                    </ListItem>
                  </div>
                )
              )}
            </List>
          </Drawer>
        </Grid>
      </Grid>
    </Box>
  );
}
