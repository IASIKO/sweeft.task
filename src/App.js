import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import RootLayout from "./pages/RootLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <RootLayout /> },
      { path: "/airports", element: "" },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
