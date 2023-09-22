import { Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import CountrySelection from '../components/CountrySelection'

const Main = () => {
  const StyledBox = styled(Box)(() => ({
    maxWidth: "1200px",
    border: "1px solid rgb(204, 204, 204)",
    padding: "24px",
    margin: " 8px auto",
    
  }));

  return (
    <StyledBox>
      <CountrySelection />
    </StyledBox>
  );
};

export default Main;
