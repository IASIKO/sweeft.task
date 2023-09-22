import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CountrySelection from "../components/CountrySelection";

const StyledBox = styled(Box)(() => ({
  maxWidth: "1200px",
  border: "1px solid rgb(204, 204, 204)",
  padding: "24px",
  margin: " 0px auto",
}));

const Main = () => {
  const [countryCode, setCountryCode] = useState();

  const locationFunction = () => {
    const succesFunction = async (position) => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAFsPNmuVgvkUxOMraQlXswL6Yja7lz_FU`
      );

      const data = await response.json();

      setCountryCode(data.results[0].address_components[5].short_name);
    };
    const errorFunction = (error) => {
      console.error("Error getting location:", error);
    };

    navigator.geolocation.getCurrentPosition(succesFunction, errorFunction);
  };

  useEffect(() => {
    locationFunction();
  }, []);

  return (
    <StyledBox>
      <CountrySelection countryCode={countryCode} />
    </StyledBox>
  );
};

export default Main;
