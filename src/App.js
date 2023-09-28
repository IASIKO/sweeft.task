import "./App.css";
import {
  HashRouter,
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
      path: "/sweeft.task",
      element: <RootLayout />,
    },
    {
      path: "/sweeft.task/:country",
      element: <Main />,
      children: [
        { path: "/sweeft.task/:country", element: <Exchange /> },
        { path: "/sweeft.task/:country/airports", element: <Airports /> },
      ],
    },
  ],
  {}
);

function App() {
  return (
    <HashRouter basename="/sweeft.task">
      <RouterProvider router={router}></RouterProvider>;
    </HashRouter>
  );
}

export default App;
