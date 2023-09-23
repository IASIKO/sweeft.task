import React, { useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import {
  Autocomplete,
  FormControl,
  Input,
  InputLabel,
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
        <FormControl fullWidth>
          <InputLabel variant="filled" shrink={false}>₾</InputLabel>
          <Input type="number"></Input>
        </FormControl>
        <Typography variant="h4">=</Typography>
        <FormControl fullWidth>
          <InputLabel variant="filled"></InputLabel>
          <Input type="number" disabled />
        </FormControl>
      </Stack>
    </StyledBoxComponent>
  );
};

export default Exchange;
