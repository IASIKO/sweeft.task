import "./App.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Airports from "./pages/Airports";
import Main from "./pages/Main";
import Exchange from "./pages/Exchange";

function App() {
  return (
    // <BrowserRouter basename="/sweeft.task">
      <Routes>
        <Route path="/" element={<RootLayout />} />
        <Route path="/:country" element={<Main />}>
          <Route path="" element={<Exchange />} />
          <Route path="airports" element={<Airports />} />
        </Route>
      </Routes>
    // </BrowserRouter>
  );
}

export default App;
