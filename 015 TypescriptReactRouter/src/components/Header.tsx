import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

export default function Header() {
  //El link component es para la navegacion interna pero es estatica, tambien esta el enrutamiento programatico
  //para abrir nuevas paginas se utiliza el ya conocido anchor a HTML tag

  //tambien se agrega el searchinput

  //a pesar de que el searchinput este aca, siempre que se utilize, va a redirigir a otra pagina dado el handleSubmit que
  //se encuentra en el componente searchinput

  //entonces al hacer el redireccionamiento se carga el componente con su respectivo nombre y recibe el prop que esta en el input
  return (
    <div className="flex items-center justify-between px-4 border-b h-14">
      <div className="flex items-center space-x-2 text-sm">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-full max-w-xl ml-4">
        <SearchInput />
      </div>
    </div>
  );
}
