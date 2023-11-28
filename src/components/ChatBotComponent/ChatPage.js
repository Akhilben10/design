import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Paper,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  TextField,
  Button,
  IconButton,
  Card,
  CardContent,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

  const handleContactClick = (contactName) => {
    setSelectedContact(contactName);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() === "") {
      return; // Ignore sending empty messages
    }

    const newMessage = {
      content: messageInput,
      sender: "You", // You can modify this based on your requirements
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <Grid container spacing={2} style={{ height: "100vh", display: "flex" }}>
      {/* <Grid item xs={12}>
        <Card>
          <CardContent
            style={{
              background: "#f8fafc",
            }}
          >
            <h1>Cards</h1>
          </CardContent>
        </Card>
      </Grid> */}

      <Grid item xs={4} style={{ height: "100vh" }}>
        {/* <Item>xs</Item> */}

        <Paper>
          {/* Chat List 1 */}
          <List>
            <ListItem button onClick={() => handleContactClick("Akhil")}>
              <ListItemAvatar>
                <Avatar src="profile1.jpg" alt="Profile" />
              </ListItemAvatar>
              <ListItemText primary="Akhil" />
            </ListItem>
            <ListItem button onClick={() => handleContactClick("Kiran")}>
              <ListItemAvatar>
                <Avatar src="profile1.jpg" alt="Profile" />
              </ListItemAvatar>
              <ListItemText primary="Kiran" />
            </ListItem>
            <ListItem button onClick={() => handleContactClick("Monika")}>
              <ListItemAvatar>
                <Avatar src="profile1.jpg" alt="Profile" />
              </ListItemAvatar>
              <ListItemText primary="Monika" />
            </ListItem>
            <ListItem button onClick={() => handleContactClick("Jyoti")}>
              <ListItemAvatar>
                <Avatar src="profile1.jpg" alt="Profile" />
              </ListItemAvatar>
              <ListItemText primary="Jyoti" />
            </ListItem>
            <ListItem button onClick={() => handleContactClick("Pritesh")}>
              <ListItemAvatar>
                <Avatar src="profile1.jpg" alt="Profile" />
              </ListItemAvatar>
              <ListItemText primary="Pritesh" />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      <Grid
        item
        xs={8}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Item sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              bgcolor: "background.paper",
              borderRadius: 1,
              borderBottom: "solid",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar alt="Selected Profile" />
              <h2 style={{ margin: "5px" }}>
                {selectedContact || "Select a contact"}
              </h2>
            </div>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </Box>
          <Grid>
            <Grid>
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.sender === "You" ? "text-end bg-gray" : ""
                  }`}
                >
                  <div
                    style={{
                      textAlign: "right",
                      fontWeight: "bold",
                      fontSize: "15px",
                    }}
                  >
                    {selectedContact || "Select a contact"}: {message.content}
                  </div>
                </div>
              ))}
            </Grid>
            <Grid
              sx={{
                position: "absolute",
                bottom: "0px",
                width: "96%",
                display: "flex",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
              />
              <Button
                sx={{ width: "30%" }}
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSendMessage}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
};

export default ChatPage;
