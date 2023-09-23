import { createContext, useState } from "react";

import React from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");

    const data = await response.json();
    setCountries(data);
  };

  return (
    <Context.Provider value={{ selectedCountry, setSelectedCountry, countries, fetchCountries }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
