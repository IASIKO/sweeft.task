import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";

const ContentBox = styled(Box)(() => ({
  backgroundColor: " rgb(255, 255, 255)",
  color: "rgba(0, 0, 0, 0.87)",
  transition: "box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  borderRadius: "4px",
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px",
  overflow: "hidden",
  padding: "16px",
  marginTop: "24px",
}));

const CountryContent = ({ selectedCountry }) => {
  console.log(selectedCountry);

  return (
    <ContentBox>
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
                  <Typography variant="body1" fontWeight={600}>Capital:</Typography>
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
                  <Typography variant="body1" fontWeight={600}>Continents:</Typography>
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
                  <Typography variant="body1" fontWeight={600}>Currency:</Typography>
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
                  <Typography variant="body1" fontWeight={600}>Population:</Typography>
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
                  <Typography variant="body1" fontWeight={600}>Region:</Typography>
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
                  <Typography variant="body1" fontWeight={600}>Borders:</Typography>
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
    </ContentBox>
  );
};

export default CountryContent;
