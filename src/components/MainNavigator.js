import React, { useContext, useState } from "react";
import { Box, Tab, Tabs } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../store/ContextProvider";

const MainNavigator = () => {
  const { selectedCountry } = useContext(Context);

  const location = useLocation();
  const getInitialTabValue = (pathname) => {
    if (pathname === `/${selectedCountry?.cca3}/airports`) {
      return 1;
    }
    return 0;
  };
  const [value, setValue] = useState(getInitialTabValue(location.pathname));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }} mt={3} mb={3}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation"
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab
          label="CURRENCY EXCHANGE"
          index={0}
          LinkComponent={Link}
          to={`/${selectedCountry.cca3}`}
        />
        <Tab label="AIRPORTS" index={1} LinkComponent={Link} to={`/${selectedCountry.cca3}/airports`} />
      </Tabs>
    </Box>
  );
};

export default MainNavigator;
