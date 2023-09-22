import { Autocomplete } from "@mui/material";
import React from "react";

const CountrySelection = () => {
  return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options=""
        sx={{ width: 300 }}
        renderInput={() => {}}
      />
  );
};

export default CountrySelection;
