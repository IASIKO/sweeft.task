import { useContext, useEffect } from "react";
import { Context } from "../store/ContextProvider";
import { useNavigate } from "react-router-dom";

const RootLayout = () => {
  const { locationFunction, selectedCountry } = useContext(Context);
  const navigate = useNavigate()

  useEffect(() => {
    locationFunction();
    if(selectedCountry?.cca3) {
      navigate(`/${selectedCountry?.cca3}`)
    }
  }, [selectedCountry]);
};

export default RootLayout;
