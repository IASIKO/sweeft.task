import React from "react";
import MainNavigator from "../components/MainNavigator";
import Main from "./Main";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Main />
    </>
  );
};

export default RootLayout;
