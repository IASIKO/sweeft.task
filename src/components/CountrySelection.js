import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import CountryContent from "./CountryContent";
import { Context } from "../store/ContextProvider";

const CountrySelection = ({ countryCode }) => {
  const { selectedCountry, setSelectedCountry, countries } =
    useContext(Context);

  useEffect(() => {
    setSelectedCountry(countries.find((c) => c.cca2 === countryCode));
  }, [countryCode, countries, setSelectedCountry]);

  return (
    <Box>
      <Autocomplete
        id="country-select-demo"
        sx={{ width: "100%" }}
        options={countries}
        autoHighlight
        getOptionLabel={(option) => option.name.common}
        renderOption={(props, option) => (
          <Box component="li" {...props}>
            {option.name.common}
          </Box>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            inputProps={{
              ...params.inputProps,
              autoComplete: "new-password",
            }}
          />
        )}
        value={selectedCountry || null}
        onChange={(e, newValue) => setSelectedCountry(newValue)}
      />
      <CountryContent selectedCountry={selectedCountry} />
    </Box>
  );
};

export default CountrySelection;
