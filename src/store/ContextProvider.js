import { createContext, useState } from "react";

import React from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryCode, setCountryCode] = useState();

  const locationFunction = () => {
    const succesFunction = async (position) => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=AIzaSyAFsPNmuVgvkUxOMraQlXswL6Yja7lz_FU`
      );

      const data = await response.json();

      setCountryCode(data.results[0].address_components[5].short_name);
    };
    const errorFunction = (error) => {
      console.error("Error getting location:", error);
    };

    navigator.geolocation.getCurrentPosition(succesFunction, errorFunction);
  };

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    setCountries(data);
  };

  return (
    <Context.Provider
      value={{
        selectedCountry,
        setSelectedCountry,
        countries,
        setCountries,
        fetchCountries,
        countryCode,
        locationFunction
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
