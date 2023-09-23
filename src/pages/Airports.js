import React, { useContext, useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import { FormControl, Grid, Input, Typography } from "@mui/material";
import { Context } from "../store/ContextProvider";

const Airports = () => {
  const { selectedCountry } = useContext(Context);
  const [airportsData, setAirportsData] = useState([]);

  const fetchAirports = async (country) => {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/airports?country=${country}&name=`,
      {
        headers: { "X-Api-Key": "gCj5I7rGBqfKSYWRfkr2+g==QgM7Oha3XwapUYSa" },
      }
    );

    const data = await response.json();
    setAirportsData(data);
  };

  useEffect(() => {
    if (selectedCountry?.cca2) {
      fetchAirports(selectedCountry?.cca2);
    }
  }, [selectedCountry]);

  return (
    <StyledBoxComponent>
      <Typography variant="h4" mb={2}>
        Airports{" "}
      </Typography>
      <FormControl variant="standard">
        <Input placeholder="Search for airport" />
      </FormControl>
      <Grid container spacing={{ xs: 2 }} style={{ marginTop: "16px" }}>
        {airportsData.length > 0 ? (
          airportsData.map((a, index) => (
            <React.Fragment key={index}>
              {a.iata && (
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    {a.iata} - {a.name} ({a.city})
                  </Typography>
                </Grid>
              )}
            </React.Fragment>
          ))
        ) : (
          <Typography variant="body1" color={"red"} ml={2}>
            There are no airports found 😟
          </Typography>
        )}
      </Grid>
    </StyledBoxComponent>
  );
};

export default Airports;
