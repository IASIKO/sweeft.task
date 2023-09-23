import React, { useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import { FormControl, Grid, Input, Typography } from "@mui/material";

const Airports = () => {
  const [airportsData, setAirportsData] = useState([]);

  const fetchAirports = async (country) => {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/airports?name=${country}'`,
      {
        headers: { "X-Api-Key": "gCj5I7rGBqfKSYWRfkr2+g==QgM7Oha3XwapUYSa" },
      }
    );

    const data = await response.json();
    setAirportsData(data);
  };

  useEffect(() => {
    fetchAirports();
  }, []);

  console.log(airportsData);

  return (
    <StyledBoxComponent>
      <Typography variant="h4" mb={2}>
        Airports{" "}
      </Typography>
      <FormControl variant="standard">
        <Input placeholder="Search for airport" />
      </FormControl>
      <Grid container spacing={{ xs: 2 }}>
        <Grid item xs={12} md={6} mt={2}>
          <Typography variant="body1">
            KUT - Kopitnari Airport (Kutaisi)
          </Typography>
        </Grid>
      </Grid>
    </StyledBoxComponent>
  );
};

export default Airports;
