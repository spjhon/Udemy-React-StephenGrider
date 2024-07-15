import type { Place } from "./api/Place";
import { useState } from "react";
import Map from "./components/Map";
import LocationSearch from "./components/LocationSearch";

function App() {
  //para la definicion esta variable state, si solo se utiliza el null typescript va a entender que esas variables SIEMPRE van 
  //a ser null entonces botaria un error, por eso se coloca que los tipos van a aser Place o null para el object que representa 
  //el state
  const [place, setPlace] = useState<Place | null>(null);

  return (
    <div className="h-screen w-screen grid grid-cols-12">
      <div className="col-span-3 p-2">
        { /*entonces, en este onplaceclick se esta enviando un callback a LocationSearch que es el boton go que esta
        en el componente de abajo y como es un prop pues necesita estar tipado, lo que se esta diciendo es que es una funcion
        que acepta un argument p de type Place*/ }
        <LocationSearch onPlaceClick={(p: Place) => setPlace(p)} />
      </div>
      <div className="col-span-9">
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
