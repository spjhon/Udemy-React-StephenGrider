import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import { homeLoader } from "./pages/home/homeLoader";
import SearchPage from "./pages/search/SearchPage";
import { searchLoader } from "./pages/search/searchLoader";
import DetailsPage from "./pages/details/DetailsPage";
import { detailsLoader } from "./pages/details/detailsLoader";

const router = createBrowserRouter([
  //Esta es la configuracion principal de react router , aqui se esta diciendo los paths, donde esta el root y cual es la primer page que se
  //va a renderizar.

  //Solo  elements, sin los loader, funciona ya las rutas, el loader es para poner a funcionar el link
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
        loader: homeLoader,
      },
      {
        path: "/search",
        element: <SearchPage />,
        loader: searchLoader,
      },
      {
        //la idea de este :name es poder darle cualquier nombre a ese name y AUN ASI cargue el detailspage
        path: "/packages/:name",
        element: <DetailsPage />,
        loader: detailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
