import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

const MainNavigator = () => {
  const [value, setValue] = React.useState("/");

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
        <Tab value="/" label="CURRENCY EXCHANGE" />
        <Tab value="/airports" label="AIRPORTS" />
      </Tabs>
    </Box>
  );
};

export default MainNavigator;
