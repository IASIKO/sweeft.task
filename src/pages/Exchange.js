import React, { useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import {
  Autocomplete,
  FormControl,
  Input,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

const Exchange = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <StyledBoxComponent>
      <Typography variant="h4" mb={2}>
        Currency Exchange
      </Typography>
      <Autocomplete
        sx={{ width: 200 }}
        options={countries}
        getOptionLabel={(option) => option.name.common}
        renderInput={(params) => <TextField {...params} variant="standard" />}
        value={selectedCountry || null}
        onChange={(e, newValue) => setSelectedCountry(newValue)}
      />
      <Stack direction="row" spacing={2} mt={2}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            type="number"
            startAdornment={<InputAdornment position="start">₾</InputAdornment>}
          />
        </FormControl>

        <Typography variant="h4">=</Typography>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            type="number"
            disabled
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
          />
        </FormControl>
      </Stack>
    </StyledBoxComponent>
  );
};

export default Exchange;
