import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavTab = styled(Tab)(() => ({
  color: "rgb(25, 118, 210)",
}));

const MainNavigator = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Tabs>
        <NavLink to='/'end>
          <Tab label="CURRENCY EXCHANGE" selected></Tab>
        </NavLink>
        <NavLink to='/airports'>
          <Tab label="AIRPORTS"></Tab>
        </NavLink>
      </Tabs>
    </Box>
  );
};

export default MainNavigator;
