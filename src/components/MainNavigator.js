import React, { useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { NavLink } from "react-router-dom";

const MainNavigator = () => {
  const [value, setValue] = useState("/");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mt={3} mb={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        aria-label="primary tabs example"
      >
        <Tab
          value="/"
          label="CURRENCY EXCHANGE"
          LinkComponent={NavLink}
          to={"/"}
        />
        <Tab
          value="/airports"
          label="AIRPORTS"
          LinkComponent={NavLink}
          to={"/airports"}
        />
      </Tabs>
    </Box>
  );
};

export default MainNavigator;
