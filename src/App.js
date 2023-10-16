import "./App.css";
import {
  HashRouter,
  Route,
  RouterProvider,
  Routes,
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

    // <HashRouter basename="">
    //   <Routes>
    //     <Route path="/" element={<RootLayout />} />
    //     <Route path="/:country" element={<Main />}>
    //       <Route path="exchange" element={<Exchange />} />
    //       <Route path="airports" element={<Airports />} />
    //     </Route>
    //   </Routes>
    // </HashRouter>
  );
}

export default App;
