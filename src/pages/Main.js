import { Box } from "@mui/material";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import CountrySelection from "../components/CountrySelection";
import MainNavigator from "../components/MainNavigator";
import { Outlet, useParams } from "react-router-dom";
import { Context } from "../store/ContextProvider";

const StyledBox = styled(Box)(() => ({
  maxWidth: "1200px",
  border: "1px solid rgb(204, 204, 204)",
  padding: "24px",
  margin: " 0px auto",
}));

const Main = () => {
  const { selectedCountry, countryCode, locationFunction } =
    useContext(Context);
  const params = useParams();

  useEffect(() => {
    locationFunction(`/sweeft.task/${params.country}`);
  }, [params]);

  return (
    <>
      {selectedCountry && (
        <StyledBox>
          <CountrySelection countryCode={countryCode} />
          <MainNavigator />
          <Outlet />
        </StyledBox>
      )}
    </>
  );
};

export default Main;
