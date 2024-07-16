import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function Root() {
  //AQUI OUTLET es el que se va a transformar en cada page gracias al router de react-router
  //header es el componete que va a estar siempre visible
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Outlet />
    </div>
  );
}
