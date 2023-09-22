import { Autocomplete, Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountryContent from "./CountryContent";

const CountrySelection = ({ countryCode }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    setCountries(data)
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    setSelectedCountry(countries.find((c) => c.cca2 === countryCode));
  }, [countryCode]);


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
            label="Choose a country"
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
