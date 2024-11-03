import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./home";
import { ErrorPage, Layout } from "@/components";
import HollowOutBlur from "./hollow-out-blur";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <HollowOutBlur />,
        path: "/hollow-out-blur",
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
