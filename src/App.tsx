import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Catalog, { loader as productLoader } from "./pages/catalog/Catalog";
import CatalogDetails, {
  loader as detLoader,
} from "./pages/catalog/CatalogDetails";
import AppLayout from "./ui/Applayout";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Delivers from "./pages/delivers/Delivers";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
        loader: productLoader,
        errorElement: <Error />,
      },
      {
        path: "/catalog/:catalogId",
        element: <CatalogDetails />,
        loader: detLoader,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/delivers",
        element: <Delivers />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
