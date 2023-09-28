import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import Airports from "./pages/Airports";
import Main from "./pages/Main";
import Exchange from "./pages/Exchange";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
    },
    {
      path: "/:country",
      element: <Main />,
      children: [
        { path: "/:country", element: <Exchange /> },
        { path: "/:country/airports", element: <Airports /> },
      ],
    },
  ],
  {}
);

function App() {
  return (
      <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
