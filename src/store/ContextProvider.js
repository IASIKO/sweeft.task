import { createContext, useState } from "react";

import React from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryCode, setCountryCode] = useState();

  const locationFunction = async (currentRoute = "/") => {
    const responseCountries = await fetch("https://restcountries.com/v3.1/all");

    const countriesData = await responseCountries.json();
    setCountries(countriesData);

    if (currentRoute === "/") {
      const succesFunction = async (position) => {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAFsPNmuVgvkUxOMraQlXswL6Yja7lz_FU`
        );

        const data = await response.json();

        const countryCodeResponse =
          data.results[0].address_components[5].short_name;
        const selectedCountryResponse = countriesData.find(
          (c) => c.cca2 === countryCodeResponse
        );

        setCountryCode(countryCodeResponse);
        setSelectedCountry(selectedCountryResponse);
      };
      const errorFunction = (error) => {
        console.error("Error getting location:", error);
      };

      navigator.geolocation.getCurrentPosition(succesFunction, errorFunction);
    } else {
      setCountryCode(countriesData.find((c) => c.cca3 === currentRoute).cca2);
        setSelectedCountry(countriesData.find((c) => c.cca3 === currentRoute));
    }
  };

  return (
    <Context.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        countries,
        setCountries,
        countryCode,
        setCountryCode,
        locationFunction,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
