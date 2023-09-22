import { Box, Typography } from "@mui/material";
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

const InfoBox = styled(Box)(() => ({
  display: "flex",
}));

const CountryContent = ({ selectedCountry }) => {
  console.log(selectedCountry);

  return (
    <ContentBox>
      {selectedCountry && (
        <>
          <Typography variant="h4">
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
          <InfoBox>
            <div>Capital: {selectedCountry.capital}</div>
            <div>
              Currency: {selectedCountry.currencies.GEL.name} (
              {selectedCountry.currencies.GEL.symbol})
            </div>
            <div>Population: {selectedCountry.population}</div>
          </InfoBox>
        </>
      )}
    </ContentBox>
  );
};

export default CountryContent;
