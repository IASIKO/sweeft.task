import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/airports" }],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
