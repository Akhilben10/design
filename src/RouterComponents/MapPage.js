import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MapContainer = () => {
  const mapStyles = {
    height: "400px",
    width: "100%",
  };
  const defaultCenter = {
    lat: 40.748817,
    lng: -73.985428,
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Item>
            <h2>Map</h2>
          </Item>
        </Grid>
        <Grid xs={12}>
          <Item>
            <LoadScript googleMapsApiKey="AIzaSyCfN51SYynP74KjTlLGg9jyEVV0Dfl6khI">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
              />
            </LoadScript>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};
export default MapContainer;
