import { Grid, Typography } from "@mui/material";
import React from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";

const CountryContent = ({ selectedCountry }) => {

  return (
    <StyledBoxComponent>
      {selectedCountry && (
        <>
          <Typography variant="h4" mb={2}>
            {selectedCountry.name.common}
            <img
              style={{
                verticalAlign: "middle",
                height: "30px",
                marginLeft: "10px",
              }}
              src={selectedCountry.flags.svg}
              alt={selectedCountry.flags.alt}
            />
          </Typography>
          <Grid container spacing={{ xs: 1 }}>
            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Capital:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="body2">
                    {selectedCountry.capital}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Continents:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="body2">
                    {" "}
                    {selectedCountry.continents}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Currency:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  {Object.keys(selectedCountry.currencies).map((index) => (
                    <Typography variant="body2" key={index}>
                      {selectedCountry.currencies[index].name} (
                      {selectedCountry.currencies[index].symbol})
                    </Typography>
                  ))}
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Population:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="body2">
                    {" "}
                    {selectedCountry.population}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Region:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="body2">
                    {selectedCountry.region}, {selectedCountry.subregion}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} md={6}>
              <Grid container spacing={{ xs: 1 }}>
                <Grid item md={3}>
                  <Typography variant="body1" fontWeight={600}>
                    Borders:
                  </Typography>
                </Grid>
                <Grid item md={9}>
                  <Typography variant="body2">
                    {selectedCountry.borders.join(", ")},
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </StyledBoxComponent>
  );
};

export default CountryContent;
