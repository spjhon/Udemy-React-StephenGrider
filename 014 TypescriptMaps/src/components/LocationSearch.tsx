// Este type es que se esta impotando una interfaz de un archivo independiente
import type { Place } from "../api/Place";
import { useState, Fragment } from "react";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}


/*LO QUE ENTRA:

El componente LocationSearch recibe una propiedad (prop) llamada onPlaceClick.

```tsx
interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
```
onPlaceClick: Es una función que toma un objeto Place y no retorna nada (void). Esta función se pasa al componente como prop y se llama cuando el usuario hace clic en el botón "Go" para un lugar específico.
*/


/*LO QUE HACE
Dentro del componente, se maneja el estado y la lógica para realizar la búsqueda y gestionar los resultados.

State Management:

- term: Un estado controlado para el término de búsqueda. Se inicializa como una cadena vacía.
places: Un estado que guarda un array de objetos de tipo Place. Se inicializa como un array vacío.
handleSubmit: Una función asíncrona que se llama cuando el formulario se envía. Esta función:

- Previene el comportamiento predeterminado del formulario (evita que la página se recargue).
Llama a la función search con el término de búsqueda (term).
Actualiza el estado places con los resultados de la búsqueda.
*/


/*LO QUE RETORNA

Formulario de Búsqueda:

- Un formulario que contiene un input para que el usuario escriba el término de búsqueda.
El input tiene un value controlado por el estado term y un onChange que actualiza term con el valor ingresado por el usuario.
Resultados de la Búsqueda:

- Una lista de lugares (places) que se muestran como una cuadrícula.
- Cada lugar se representa con su nombre (place.name) y un botón "Go".
- El botón "Go" llama a la función onPlaceClick pasada como prop con el objeto Place correspondiente.

Resumen

- Entradas: Recibe una función onPlaceClick como prop.
- Procesamiento: Gestiona el estado para el término de búsqueda (term) y los resultados de la búsqueda (places). Ejecuta la búsqueda cuando se envía el formulario.
- Salida: Retorna JSX que muestra un formulario de búsqueda y una lista de resultados con botones que llaman a onPlaceClick cuando se hace clic.

*/
export default function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  // este es el state comun de input controlado
  const [term, setTerm] = useState("");
  //este otro state es un generics que lo que hace es decir que ese array para no ser un never[], se le adicona un generic
  //que diga que este es de tipo Place[], osea un array de place objects con ese type
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const results = await search(term);
    setPlaces(results);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        {/*Aqui se esta poniendo el handler change directamente en el onChanges*/}
      </form>

      <h1 className="font-bold mt-6">Found Locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center">
        {/*EL FRAGMENT se utiliza en este caso debio a que hay conflicto con el grid*/}
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                className="bg-blue-500 text-xs text-white font-bold py-1 px-1 rounded"
                onClick={() => onPlaceClick(place)}
              >
                Go
              </button>
              <div className="border-b w-full col-span-2" />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
