import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import MessageIcon from "@mui/icons-material/Message";
import BlockIcon from "@mui/icons-material/Block";
const UserCard = ({ title, body, content, imageUrl, email }) => {
  return (
    <Card style={{ backgroundColor: "#f8fafc" }}>
      <CardMedia
        component="img"
        height="20"
        style={{
          borderRadius: "50%",
          objectFit: "cover",
          width: "56px",
          height: "56px",
          margin: "1rem",
        }}
        image={imageUrl}
        alt="Image Alt Text"
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {body}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          Email <br />
          {email}
        </Typography>
        <br />
        <Grid container spacing={2}>
          {/* <Grid item xs={6}>

                        <Button variant="outlined" startIcon={<MessageIcon />} style={{ color: '#2196F3', borderColor: '#2196F3' }} >
                            Message
                        </Button>
                    </Grid> */}

          <Grid item xs={6}>
            <Button
              variant="outlined"
              startIcon={<MessageIcon />}
              style={{
                color: "#2196F3",
                borderColor: "#2196F3 ",
                textTransform: "none",
                textAlign: "center",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              Message
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              startIcon={<BlockIcon />}
              style={{
                color: "#f44336",
                borderColor: "#f44336",
                textTransform: "none",
                textAlign: "center",
                boxSizing: "border-box",
                width: "100%",
              }}
            >
              Block
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
export default UserCard;
