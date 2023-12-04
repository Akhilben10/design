import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteIcon from "@mui/icons-material/Delete";
import { makeStyles } from "@mui/styles";

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
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
const UserMessageBubble = ({ content }) => (
  <div
    style={{
      textAlign: "right",
      paddingRight: "15px",
      paddingBottom: "5px",
    }}
  >
    <div
      style={{
        display: "inline-block",
        backgroundColor: "#3f51b5",
        color: "#fff",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "70%",
        wordWrap: "break-word",
      }}
    >
      {content}
    </div>
  </div>
);

const BotMessageBubble = ({ content }) => (
  <div
    style={{
      textAlign: "left",
      paddingLeft: "15px",
      paddingBottom: "5px",
    }}
  >
    <div
      style={{
        display: "inline-block",
        backgroundColor: "#e0e0e0",
        padding: "10px",
        borderRadius: "10px",
        maxWidth: "70%",
        wordWrap: "break-word",
      }}
    >
      {content}
    </div>
  </div>
);

const useStyles = makeStyles((theme) => ({
  messageContainer: {
    overflowY: "auto",
    flex: 1,
    maxHeight: "58vh",
    scrollBehavior: "smooth",
    wordWrap: "break-word", // Add this line
    width: "100%", // Add this line to set maximum width
    overflow: "hidden",
    flexWrap: "wrap",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const ChatPage = () => {
  const [selectedContact, setSelectedContact] = useState("Akhil");
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesContainerRef = useRef(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showDeleteOption, setShowDeleteOption] = useState(false);

  // Load chat history from local storage when the component mounts
  useEffect(() => {
    const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
    setMessages(storedChats[selectedContact] || []);
  }, [selectedContact]);

  const saveChatToLocalStorage = (contact, chat) => {
    const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
    localStorage.setItem(
      "chats",
      JSON.stringify({ ...storedChats, [contact]: chat })
    );
  };

  const handleContactClick = (contactName) => {
    const storedChats = JSON.parse(localStorage.getItem("chats")) || [];
    setMessages(storedChats[contactName] || []);
    setSelectedContact(contactName);
  };

  const handleSendMessage = async () => {
    if (messageInput.trim() === "") {
      return; // Ignore sending empty messages
    }

    const userMessage = {
      content: messageInput,
      sender: "You",
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    saveChatToLocalStorage(selectedContact, updatedMessages);

    setMessageInput("");

    // Simulate bot reply after sending user message with typing animation
    const botTypingMessage = {
      content: "Typing...",
      sender: "Bot",
      isTyping: true,
    };

    const updatedMessagesWithTyping = [...updatedMessages, botTypingMessage];
    setMessages(updatedMessagesWithTyping);
    saveChatToLocalStorage(selectedContact, updatedMessagesWithTyping);

    // Simulate delay before bot's actual reply
    setTimeout(() => {
      const botReply = generateBotReply(messageInput);
      const botMessage = {
        content: botReply,
        sender: "Bot",
      };

      const updatedMessagesWithBotReply = [...updatedMessages, botMessage];
      setMessages(updatedMessagesWithBotReply);
      saveChatToLocalStorage(selectedContact, updatedMessagesWithBotReply);
    }, 3000); // 3 seconds delay
  };

  const handleMoreVertClick = (event) => {
    setAnchorEl(event.currentTarget);

    // Check if the chat is not empty before showing the delete option
    if (messages.length > 0) {
      setShowDeleteOption(true);
    }
  };

  const handleMoreVertClose = () => {
    setAnchorEl(null);
    setShowDeleteOption(false);
  };

  const handleDeleteChat = () => {
    // Implement logic to delete the entire chat for the selected contact
    localStorage.setItem(
      "chats",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("chats")),
        [selectedContact]: [],
      })
    );
    setMessages([]);
    handleMoreVertClose();
  };

  const generateBotReply = (userMessage) => {
    switch (userMessage.toLowerCase()) {
      case "hi":
      case "hello":
        return "Hello! How can I help you today?";
      case "how are you":
        return "I'm just a bot, but thanks for asking! How can I assist you?";
      default:
        return "I didn't quite understand that. Can you please clarify?";
    }
  };
  const avatarUrls = {
    Akhil: "https://berrydashboard.io/assets/avatar-1-8ab8bc8e.png",
    Kiran: "https://berrydashboard.io/assets/avatar-5-e6a74d73.png",
    Monika: "https://berrydashboard.io/assets/avatar-2-0527ad51.png",
    Jyoti: "https://berrydashboard.io/assets/avatar-6-66774242.png",
    Pritesh: "https://berrydashboard.io/assets/avatar-4-3b96be4a.png",
  };
  console.log("jhgfd", messages);
  const classes = useStyles();

  return (
    <Grid container spacing={3} style={{ height: "100%" }}>
      <Grid item xs={3} style={{ height: "87.5vh" }}>
        <Paper style={{ height: "85vh" }}>
          <List>
            {Object?.keys(avatarUrls)?.map((contactName) => (
              <ListItem
                key={contactName}
                button
                onClick={() => handleContactClick(contactName)}
                sx={{
                  "&:hover": {
                    backgroundColor: "#ede7f6",
                    borderRadius: "15px",
                  },
                }}
              >
                <ListItemAvatar>
                  <Avatar src={avatarUrls[contactName]} alt={contactName} />
                </ListItemAvatar>
                <ListItemText primary={contactName} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Grid>
      <Grid
        item
        xs={9}
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Item sx={{ flex: 1, display: "flex", flexDirection: "column", p: 0 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 1,
              m: 1,
              borderRadius: 1,
              borderBottom: "solid",
            }}
          >
            <div style={{ display: "flex" }}>
              <Avatar src={avatarUrls[selectedContact]} alt={selectedContact} />

              <h2 style={{ margin: "5px" }}>{selectedContact || "Akhil"}</h2>
            </div>
            <IconButton onClick={handleMoreVertClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMoreVertClose}
            >
              <MenuItem
                onClick={handleDeleteChat}
                disabled={messages.length === 0}
              >
                Delete Chat
                <DeleteIcon style={{ marginLeft: "8px" }} />
              </MenuItem>
            </Menu>
          </Box>
          <Grid
            sx={{
              marginBottom: "90px",
            }}
          >
            {/* <Grid
              ref={messagesContainerRef}
              className={classes.messageContainer}
              sx={{
                overflowY: "auto",
                flex: 1,
                p: 0,
                maxHeight: "58vh", // Set max height as needed
                scrollBehavior: "smooth", // Enable smooth scrolling
                "&::-webkit-scrollbar": {
                  width: "0.4em", // Adjust as needed
                },
                "&::-webkit-scrollbar-thumb": {
                  backgroundColor: "rgba(0, 0, 0, 0)", // Set to transparent to hide the thumb
                },
              }}
            >
              {messages?.map((message, index) => (
                <div
                  key={index}
                  className={`${
                    message.sender === "You" ? "text-end bg-gray" : ""
                  }`}
                >
                  <div
                    style={{
                      textAlign: message.sender === "You" ? "right" : "left",
                      paddingRight: "15px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      // border: "1px solid red",
                      // backgroundColor: "coral",
                      paddingLeft: "15px",
                      // paddingRight: "5px",
                      // marginLeft: "500px",
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </Grid> */}

            <Grid
              ref={messagesContainerRef}
              className={classes.messageContainer}
            >
              {messages?.map((message, index) => (
                <div key={index}>
                  {message.sender === "You" ? (
                    <UserMessageBubble content={message.content} />
                  ) : (
                    <BotMessageBubble content={message.content} />
                  )}
                </div>
              ))}
            </Grid>

            <Grid
              sx={{
                position: "absolute",
                bottom: "10px",
                width: "95%",
                display: "flex",
                margin: "10px",
                borderRadius: "30px",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                borderRadius="10px"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                InputProps={{
                  style: {
                    borderRadius: "30px",
                  },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        onClick={handleSendMessage}
                        size="small"
                        borderRadius="15px"
                      >
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>
        </Item>
      </Grid>
    </Grid>
  );
};
export default ChatPage;
