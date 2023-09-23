import React, { useContext, useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import { FormControl, Grid, Input, Typography } from "@mui/material";
import { Context } from "../store/ContextProvider";

const Airports = () => {
  const { selectedCountry } = useContext(Context);
  const [airportsData, setAirportsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const fetchAirports = async (country, name) => {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/airports?country=${country}&name=${name}`,
      {
        headers: { "X-Api-Key": "gCj5I7rGBqfKSYWRfkr2+g==QgM7Oha3XwapUYSa" },
      }
    );

    const data = await response.json();
    setAirportsData(data);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue && selectedCountry?.cca2) {
        fetchAirports(selectedCountry.cca2, searchValue);
      } else {
        if (selectedCountry?.cca2) {
          fetchAirports(selectedCountry?.cca2);
        }
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [selectedCountry, searchValue]);

  const filteredAirports = airportsData.filter((airport) =>
    airport.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <StyledBoxComponent>
      <Typography variant="h4" mb={2}>
        Airports{" "}
      </Typography>
      <FormControl variant="standard">
        <Input
          placeholder="Search for airport"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </FormControl>
      <Grid container spacing={{ xs: 2 }} style={{ marginTop: "16px" }}>
        {filteredAirports.length > 0 ? (
          filteredAirports.map((a, index) => (
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
