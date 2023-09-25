import React, { useContext, useEffect, useState } from "react";
import StyledBoxComponent from "../UI/StyledBoxComponent";
import {
  Box,
  FormControl,
  Grid,
  Input,
  Skeleton,
  Typography,
} from "@mui/material";
import { Context } from "../store/ContextProvider";

const Airports = () => {
  const { selectedCountry } = useContext(Context);
  const [airportsData, setAirportsData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [cache, setCache] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchAirports = async () => {
    setIsLoading(true);
    if (selectedCountry?.cca2) {
      if (
        !cache[selectedCountry.cca2] ||
        !cache[selectedCountry.cca2].find((d) => d.searchValue === searchValue)
      ) {
        const response = await fetch(
          `https://api.api-ninjas.com/v1/airports?country=${selectedCountry.cca2}&name=${searchValue}`,
          {
            headers: {
              "X-Api-Key": "gCj5I7rGBqfKSYWRfkr2+g==QgM7Oha3XwapUYSa",
            },
          }
        );

        const data = await response.json();
        setAirportsData(data);
        setIsLoading(false);
        if (Object.keys(cache).includes(selectedCountry.cca2)) {
          if (
            !cache[selectedCountry.cca2].find(
              (d) => d.searchValue === searchValue
            )
          ) {
            cache[selectedCountry.cca2] = [
              ...cache[selectedCountry.cca2],
              { searchValue, data },
            ];
            setCache(cache);
          }
        } else {
          cache[selectedCountry.cca2] = [{ searchValue, data }];
          setCache(cache);
        }
      } else {
        setAirportsData(
          cache[selectedCountry.cca2].find((d) => d.searchValue === searchValue)
            .data
        );
      }
    }
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (searchValue && selectedCountry?.cca2) {
        fetchAirports();
      } else {
        if (selectedCountry?.cca2) {
          fetchAirports();
        }
      }
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [selectedCountry, searchValue, cache]);

  return (
    <StyledBoxComponent>
      <Typography variant="h4" mb={2}>
        Airports{" "}
      </Typography>
      <FormControl variant="standard">
        <Input
          placeholder="Search for airport"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </FormControl>
      <Grid container spacing={{ xs: 2 }} style={{ marginTop: "16px" }}>
        {airportsData.length > 0 ? (
          airportsData.map((a, index) => (
            <React.Fragment key={index}>
              {a.iata && (
                <Grid item xs={12} md={6}>
                  <Typography variant="body1">
                    {a.iata} - {a.name} ({a.city})
                  </Typography>
                </Grid>
              )}
            </React.Fragment>
          ))
        ) : (
          <>
            {isLoading ? (
              <Grid container spacing={{ xs: 2 }}>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: 400 }} ml={2}>
                    <Skeleton animation="pulse" style={{ width: "60%" }} />
                    <Skeleton animation="pulse" style={{ width: "80%" }} />
                    <Skeleton animation="wave" />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ width: 400 }} ml={2}>
                    <Skeleton animation="pulse" style={{ width: "60%" }} />
                    <Skeleton animation="pulse" style={{ width: "80%" }} />
                    <Skeleton animation="wave" />
                  </Box>
                </Grid>
              </Grid>
            ) : (
              <Typography variant="body1" color={"red"} ml={2}>
                There are no airports found 😟
              </Typography>
            )}
          </>
        )}
      </Grid>
    </StyledBoxComponent>
  );
};

export default Airports;
