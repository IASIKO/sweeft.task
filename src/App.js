import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import RootLayout from "./pages/RootLayout";
import Airports from "./pages/Airports";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <RootLayout /> },
      { path: "/airports", element: <Airports /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
