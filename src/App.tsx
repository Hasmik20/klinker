import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Catalog from "./pages/catalog/Catalog";
import CatalogItem from "./pages/catalog/CatalogItem";
import AppLayout from "./ui/Applayout";
import About from "./pages/about/About";
import Contacts from "./pages/contacts/Contacts";
import Delivers from "./pages/delivers/Delivers";

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
      },
      {
        path: "/catalog/:catalogId",
        element: <CatalogItem />,
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
