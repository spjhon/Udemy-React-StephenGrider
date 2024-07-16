import { useState } from "react";
import { useNavigate, /*Form*/ } from "react-router-dom";
import { VscSearch } from "react-icons/vsc";

export default function SearchInput() {
  const [term, setTerm] = useState("");
  //se recomienda declarar useNavigate en una variable para futura utilizacion
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //entonces como se puede observar aqui, en el componente app se crea una ruta dinamica la cual se programa desde aqui.
    navigate(`/search?term=${term}`);
  };

  //OJO: EXISTE UNA FORMA MAS RESUMIDO DE HACER ESTE RE-ENRUTAMIENTO PROGRAMATICO GRACIAS A REACT DOM, grider dejo el codigo corto,
  //yo voy a dejar el codigo largo, el codigo corto es el siguiente:

  /*
return (
  <Form action = "/search">
    <input name="term">
    </input>
  </Form>
)
*/


  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <div className="absolute inset-y-0 flex items-center pl-3">
          <VscSearch className="h-5 w-5 text-gray-500" />
        </div>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          className="pl-10 py-2 w-full border-0 shadow-none"
          placeholder="Search packages"
        />
      </div>
    </form>
  );
}
