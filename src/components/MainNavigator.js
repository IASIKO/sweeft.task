import { Box } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

const MainNavigator = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <NavLink to="/">CURRENCY EXCHANGE</NavLink>
      <NavLink to="/airports">AIRPORTS</NavLink>
    </Box>
  );
};

export default MainNavigator;
