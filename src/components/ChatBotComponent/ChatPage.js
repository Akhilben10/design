import React, { useEffect, useRef, useState } from "react";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import DeleteIcon from "@mui/icons-material/Delete";

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

  const handleSendMessage = () => {
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

    // Simulate bot reply after sending user message
    const botReply = generateBotReply(messageInput);
    const botMessage = {
      content: botReply,
      sender: "Bot",
    };

    const updatedMessagesWithBotReply = [...updatedMessages, botMessage];
    setMessages(updatedMessagesWithBotReply);
    saveChatToLocalStorage(selectedContact, updatedMessagesWithBotReply);

    setMessageInput("");
  };
  const handleMoreVertClick = (event) => {
    setAnchorEl(event.currentTarget);
    setShowDeleteOption(true);
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
  return (
    <Grid container spacing={3} style={{ height: "80vh", display: "flex" }}>
      <Grid item xs={4} style={{ height: "87.5vh" }}>
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
        xs={8}
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
              <MenuItem onClick={handleDeleteChat}>Delete</MenuItem>
            </Menu>
          </Box>
          <Grid>
            <Grid
              ref={messagesContainerRef}
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
                      textAlign: "right",
                      paddingRight: "15px",
                      fontWeight: "bold",
                      fontSize: "15px",
                      // border: "1px solid red",
                      // backgroundColor: "coral",
                      paddingLeft: "5px",
                      paddingRight: "5px",
                      // marginLeft: "500px",
                    }}
                  >
                    {message.content}
                  </div>
                </div>
              ))}
            </Grid>
            <Grid
              sx={{
                position: "absolute",
                bottom: "0px",
                width: "97%",
                display: "flex",
              }}
            >
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        color="primary"
                        onClick={handleSendMessage}
                        size="small"
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
// import React, { useEffect, useRef, useState } from "react";
// import { styled } from "@mui/material/styles";
// import {
//   Container,
//   Grid,
//   Paper,
//   Box,
//   List,
//   ListItem,
//   ListItemAvatar,
//   Avatar,
//   ListItemText,
//   Typography,
//   TextField,
//   Button,
//   IconButton,
//   Card,
//   CardContent,
// } from "@mui/material";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import SendIcon from "@mui/icons-material/Send";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// const ChatPage = () => {
//   const [selectedContact, setSelectedContact] = useState(null);
//   const [messageInput, setMessageInput] = useState("");
//   const [messages, setMessages] = useState([]);
//   const messagesContainerRef = useRef(null);

//   const handleContactClick = (contactName) => {
//     setMessages([]);
//     setSelectedContact(contactName);
//   };
//   useEffect(() => {
//     // Scroll to the bottom of the messages container when messages change
//     messagesContainerRef.current.scrollTop =
//       messagesContainerRef.current.scrollHeight;
//   }, [messages]);

//   const handleSendMessage = () => {
//     if (messageInput.trim() === "") {
//       return; // Ignore sending empty messages
//     }

//     const userMessage = {
//       content: messageInput,
//       sender: "You", // You can modify this based on your requirements
//     };

//     const botReplay = {
//       content: generateBotReply(messageInput),
//     };

//     setMessages([...messages, userMessage, botReplay]);
//     setMessageInput("");
//   };

//   const generateBotReply = (userMessage) => {
// switch (userMessage.toLowerCase()) {
//   case "hi":
//   case "hello":
//     return (
//       <div
//         style={{
//           textAlign: "left",
//           // border: "1px solid red",
//           padding: "15px",
//           // backgroundColor: "coral",
//           paddingLeft: "15px",
//         }}
//       >
//         "Hello! How can i help you today?"
//       </div>
//     );

//   case "how are you":
//     return (
//       <div style={{ textAlign: "left", paddingLeft: "15px" }}>
//         "I'm just a bot , but thanks for asking! How can I assist you?"
//       </div>
//     );
//   default:
//     return (
//       <div style={{ textAlign: "left", paddingLeft: "15px" }}>
//         "I didn't quite understand that . Can you please clarify?"
//       </div>
//     );
// }
//   };

//   return (
//     <Grid container spacing={3} style={{ height: "80vh", display: "flex" }}>
//       <Grid item xs={3} style={{ height: "87.5vh" }}>
//         {/* <Item>xs</Item> */}

//         <Paper style={{ height: "85vh" }}>
//           {/* Chat List 1 */}
//           <List>
//             <ListItem
//               button
//               onClick={() => handleContactClick("Akhil")}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ede7f6",
//                   borderRadius: "15px",
//                 },
//               }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="./download.jpg" alt="Akhil" />
//               </ListItemAvatar>
//               <ListItemText primary="Akhil" />
//             </ListItem>
//             <ListItem
//               button
//               onClick={() => handleContactClick("Kiran")}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ede7f6",
//                   borderRadius: "15px",
//                 },
//               }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="profile1.jpg" alt="Kiran" />
//               </ListItemAvatar>
//               <ListItemText primary="Kiran" />
//             </ListItem>
//             <ListItem
//               button
//               onClick={() => handleContactClick("Monika")}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ede7f6",
//                   borderRadius: "15px",
//                 },
//               }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="profile1.jpg" alt="M" />
//               </ListItemAvatar>
//               <ListItemText primary="Monika" />
//             </ListItem>
//             <ListItem
//               button
//               onClick={() => handleContactClick("Jyoti")}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ede7f6",
//                   borderRadius: "15px",
//                 },
//               }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="profile1.jpg" alt="J" />
//               </ListItemAvatar>
//               <ListItemText primary="Jyoti" />
//             </ListItem>
//             <ListItem
//               button
//               onClick={() => handleContactClick("Pritesh")}
//               sx={{
//                 "&:hover": {
//                   backgroundColor: "#ede7f6",
//                   borderRadius: "15px",
//                 },
//               }}
//             >
//               <ListItemAvatar>
//                 <Avatar src="profile1.jpg" alt="Profile" />
//               </ListItemAvatar>
//               <ListItemText primary="Pritesh" />
//             </ListItem>
//           </List>
//         </Paper>
//       </Grid>

//       <Grid
//         item
//         xs={9}
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           position: "relative",
//         }}
//       >
//         <Item sx={{ flex: 1, display: "flex", flexDirection: "column", p: 0 }}>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "space-between",
//               p: 1,
//               m: 1,
//               borderRadius: 1,
//               borderBottom: "solid",
//             }}
//           >
//             <div style={{ display: "flex" }}>
//               <Avatar alt="Selected Profile" />
//               <h2 style={{ margin: "5px" }}>{selectedContact || "Akhil"}</h2>
//             </div>
//             <IconButton>
//               <MoreVertIcon />
//             </IconButton>
//           </Box>
//           <Grid>
//             <Grid
//               ref={messagesContainerRef}
//               sx={{
//                 overflowY: "auto",
//                 flex: 1,
//                 p: 0,
//                 maxHeight: "58vh", // Set max height as needed
//                 scrollBehavior: "smooth", // Enable smooth scrolling
//                 "&::-webkit-scrollbar": {
//                   width: "0.4em", // Adjust as needed
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                   backgroundColor: "rgba(0, 0, 0, 0)", // Set to transparent to hide the thumb
//                 },
//               }}
//             >
//               {messages.map((message, index) => (
//                 <div
//                   key={index}
//                   className={`${
//                     message.sender === "You" ? "text-end bg-gray" : ""
//                   }`}
//                 >
//                   <div
//                     style={{
//                       textAlign: "right",
//                       paddingRight: "15px",
//                       fontWeight: "bold",
//                       fontSize: "15px",
//                       // border: "1px solid red",
//                       // backgroundColor: "coral",
//                       paddingLeft: "5px",
//                       paddingRight: "5px",
//                       // marginLeft: "500px",
//                     }}
//                   >
//                     {message.content}
//                   </div>
//                 </div>
//               ))}
//             </Grid>
//             <Grid
//               sx={{
//                 position: "absolute",
//                 bottom: "0px",
//                 width: "98%",
//                 display: "flex",
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Type a message"
//                 value={messageInput}
//                 onChange={(e) => setMessageInput(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === "Enter") {
//                     handleSendMessage();
//                   }
//                 }}

//                 // onChange={(e) => setMessageInput(e.target.value)}
//               />
//               <Button
//                 sx={{ width: "30%" }}
//                 variant="contained"
//                 color="primary"
//                 fullWidth
//                 onClick={handleSendMessage}
//                 endIcon={<SendIcon />}
//               >
//                 Send
//               </Button>
//             </Grid>
//           </Grid>
//         </Item>
//       </Grid>
//     </Grid>
//   );
// };

// export default ChatPage;
