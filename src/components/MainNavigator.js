import { Box, Tab } from "@mui/material";
import React from "react";
import styled from "styled-components";

const NavTab = styled(Tab)(() => ({
  color: "rgb(25, 118, 210)",
}));

const MainNavigator = () => {
  return (
    <Box sx={{ width: "auto" }}>
      <NavTab label="CURRENCY EXCHANGE"></NavTab>
      <NavTab label="AIRPORTS"></NavTab>
    </Box>
  );
};

export default MainNavigator;
