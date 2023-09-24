import React, { useContext, useEffect, useState } from "react";
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
import { Context } from "../store/ContextProvider";

const Exchange = () => {
  const [selectedExchangeCountry, setSelectedExchangeCountry] = useState(null);
  const [currency, setCurrency] = useState();

  const { countries, fetchCountries, selectedCountry } = useContext(Context);

  const fetchCurrency = async (cur) => {
    const response = await fetch(
      `https://api.exchangerate.host/latest?base=${cur}`
    );

    const data = await response.json();
    setCurrency(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  useEffect(() => {
    if (selectedCountry?.currencies) {
      const key = Object.keys(selectedCountry?.currencies)[0];
      fetchCurrency(key);
    }
  }, [selectedCountry]);

  console.log(currency);

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
        value={selectedExchangeCountry || null}
        onChange={(e, newValue) => setSelectedExchangeCountry(newValue)}
      />
      <Stack direction="row" spacing={2} mt={2}>
        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            type="number"
            defaultValue={0}
            startAdornment={
              <InputAdornment position="start">
                {selectedCountry &&
                  Object.keys(selectedCountry.currencies)?.map((index) => (
                    <Typography variant="body2" key={index}>
                      {selectedCountry.currencies[index].symbol}
                    </Typography>
                  ))}
              </InputAdornment>
            }
          />
        </FormControl>

        <Typography variant="h4">=</Typography>

        <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <Input
            type="number"
            defaultValue={0}
            disabled
            startAdornment={
              <InputAdornment position="start">
                {selectedExchangeCountry &&
                  Object.keys(selectedExchangeCountry?.currencies)?.map(
                    (index) => (
                      <Typography variant="body2" key={index}>
                        {selectedExchangeCountry?.currencies[index].symbol}
                      </Typography>
                    )
                  )}
              </InputAdornment>
            }
          />
        </FormControl>
      </Stack>
    </StyledBoxComponent>
  );
};

export default Exchange;
