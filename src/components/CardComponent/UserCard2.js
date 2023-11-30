import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./UserCard2.css";
import { Hidden } from "@mui/material";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
function UserCard2({ imageUrl, name, status }) {
  let isActive = "Active";
  console.log("imageUrl", imageUrl);
  return (
    <Box sx={{ flexGrow: 1 }} className="complete-box">
      <Grid
        container
        sx={{
          backgroundColor: "#f8fafc",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            src={imageUrl}
            alt="iujhygf"
            sx={{ height: "100%", width: "30%" }}
          />

          <MoreHorizIcon />
        </Grid>
        <Grid item xs={6} sx={{ padding: "10px" }}>
          <div
            style={{
              fontWeight: "bold",
              padding: "0px 10px 0px 10px",
              alignItems: "center",
            }}
          >
            {name}
          </div>
        </Grid>
        <Grid item xs={6}>
          <div
            style={{
              borderRadius: "20px",
              padding: "5px",
              alignItems: "center",
              justifyContent: "space-around",

              backgroundColor: status === "Active" ? "#b9f6ca " : "#ef9a9a",
              textAlign: "center",
              color: status === "Active" ? "#00c853" : "#c62828",
              //   marginRight: "10px",
            }}
          >
            {status}
          </div>
        </Grid>
        <br /> <br />
        <br />
        <Grid item xs={12}>
          <div className="three-icons">
            <div className="facebook-icon">
              {" "}
              <FacebookIcon />
            </div>
            <div className="twitter-icon">
              {" "}
              <TwitterIcon />
            </div>
            <div className="linked-icon">
              {" "}
              <LinkedInIcon />
            </div>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}

export default UserCard2;
