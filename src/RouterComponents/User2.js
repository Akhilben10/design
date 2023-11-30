import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import UserCard2 from "../components/CardComponent/UserCard2";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function User2() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-1-8ab8bc8e.png"
          name="Akhil"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-2-0527ad51.png"
          name="Kelli"
          status="Active"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-3-7182280e.png"
          name="Laurence"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-7-8fe392c1.png"
          name="Melyssa"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-1-8ab8bc8e.png"
          name="Akhil"
          status="Active"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-2-0527ad51.png"
          name="Kelli"
          status="Active"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-3-7182280e.png"
          name="Laurence"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-7-8fe392c1.png"
          name="Melyssa"
          status="Active"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-1-8ab8bc8e.png"
          name="Akhil"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-2-0527ad51.png"
          name="Kelli"
          status="Active"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-3-7182280e.png"
          name="Laurence"
          status="Rejected"
        />
      </Grid>
      <Grid item xs={3}>
        <UserCard2
          imageUrl="https://berrydashboard.io/assets/avatar-7-8fe392c1.png"
          name="Melyssa"
          status="Rejected"
        />
      </Grid>
    </Grid>
  );
}

export default User2;
