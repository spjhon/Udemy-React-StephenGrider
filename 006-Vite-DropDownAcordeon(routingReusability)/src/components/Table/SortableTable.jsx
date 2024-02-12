import { useState } from "react";
import Table from "./Table";
import { GoChevronUp, GoChevronDown, GoRocket } from "react-icons/go";

/* LO QUE ENTRA
No hay props directamente en el componente SortableTable. Los datos de la tabla y la configuración se pasan como props:
- dataProp: Un array de objetos que contiene los datos a ser mostrados en la tabla.
- configProp: Un array de objetos que contiene la configuración de cada columna de la tabla.

ALGORITMO
El componente SortableTable maneja la lógica de ordenamiento y renderización de la tabla.
- Se utiliza el estado local para mantener el estado de sortOrder (si es orden ascendente o descendente) y sortBy (la columna por la cual se ordena).
- La función handleClick se activa al hacer clic en una columna. Si la columna clicada ya está seleccionada, se invierte el orden; de lo contrario, se establece el orden ascendente y se selecciona la nueva columna.
- Se crea updatedConfig para agregar funcionalidad de ordenamiento a las columnas. Se utiliza getIcons para renderizar los iconos de orden ascendente/descendente en la columna seleccionada.
- Se realiza la ordenación de los datos utilizando el algoritmo de comparación. Los datos ordenados se almacenan en sortedData.
- Finalmente, se renderiza el componente Table con los datos ordenados y la configuración actualizada.

LO QUE RETORNA
- Retorna un div que contiene el estado actual de sortOrder y sortBy, seguido del componente Table con los datos ordenados y la configuración actualizada.
*/

function SortableTable(props) {
  //Aqui tenemos una combinacion de dos estados, el sortOrder es obviamente el array ordenado de acuerdo a lo que diga sortBy
  //que tambien es dinamico por eso se necesitan dos states
  const [sortOrder, setSortOrder] = useState(null);
  //los posibles estados de sortOrder son: null, "acendente" o "descendente"
  const [sortBy, setSortBy] = useState(null);
  //los posibles estados de sortBy son: null, "name", "score"
  //Aqui de le aplica destructuring a props object.
  const { configProp, dataProp } = props;

  // Lógica para manejar el clic en las columnas y actualizar sortOrder y sortBy.
  /*
La función handleClick maneja el clic en una columna de la tabla para cambiar el orden de clasificación.

LO QUE ENTRA:
- label: La etiqueta de la columna en la que se hizo clic.

ALGORITMO:
1. Se verifica si ya hay una columna seleccionada para ordenar (sortBy) y si la columna en la que se hizo clic es diferente a la actual.
    - Si es el caso, se establece el orden ascendente y se selecciona la nueva columna (label).
    - Se utiliza return para salir de la función después de realizar la actualización.

2. Si no hay una columna seleccionada o la columna en la que se hizo clic es la misma que la actual:
    - Se inicia un ciclo de cambios de orden (ascendente -> descendente -> sin orden).
    - Si el orden actual es nulo, se establece el orden ascendente y se selecciona la columna.
    - Si el orden actual es ascendente, se cambia a descendente y se selecciona la columna.
    - Si el orden actual es descendente, se restablece el orden a nulo y se deselecciona la columna.

LO QUE RETORNA:
La función no retorna nada directamente, pero tiene efectos secundarios al modificar los estados locales sortOrder y sortBy.
*/
  const handleClick = (label) => {
    if (sortBy && label !== sortBy) {
      setSortBy(label);
      setSortOrder("ascendente");
      //el return es necesario para que no se ejecuten el resto de ifs sino que vuelva y renderiza el componente conlos nuevos states
      return;
    }

    //AQUI SE DEFINE EL CLICLO, si esta en un estado pues que pase al otro y asi dando la vuelta
    // Si no hay una columna seleccionada o la columna en la que se hizo clic es la misma que la actual:
    // Se inicia un ciclo de cambios de orden (ascendente -> descendente -> sin orden).
    if (sortOrder === null) {
      setSortOrder("ascendente");
      setSortBy(label);
    } else if (sortOrder === "ascendente") {
      setSortOrder("descendiente");
      setSortBy(label);
    } else if (sortOrder === "descendiente") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  //El updatedConfig es para agregar el header, si existe un sortValue, si si, entonces renderizar los triangulos
  //ahora los triangulos que renderiza depende de el state
  // Utiliza el array de objects en donde cada object representa una columna y tiene sus propias configuraciones para renderizar
  const updatedConfig = configProp.map((column) => {
    //En este bloque de código, el if verifica si la propiedad sortValue de la columna actual (column) es falsa o undefined. En otras palabras, está comprobando si la columna tiene una función de ordenamiento (sortValue).

    /* LO QUE ENTRA:
        Verifica si la columna actual tiene una propiedad sortValue definida.
        column: La columna actual en el array configProp.*/

    if (!column.sortValue) {
      // LO QUE RETORNA:
      // Si la columna no tiene sortValue, se devuelve la columna sin cambios y se sale de la funcion, osea que el otro return
      //no se ejecuta
      return column;
    }

    // ALGORITMO:
    // Si la columna tiene sortValue, se crea una nueva columna con una función de encabezado (header).
    // La función de encabezado maneja clics y utiliza las funciones handleClick y getIcons.
    // La nueva columna reemplaza la existente en el array updatedConfig.

    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => handleClick(column.label)}
        >
          <div className="flex items-center">
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  //esta es una copia del prop ya que .sort modifica el array.
  let sortedData = [...dataProp];

  // Lógica de ordenamiento utilizando el algoritmo de comparación.
  //originalmente los states son null para que la tabla renderiza en un puff con null
  //pero si existe un sortorder y un srtby pues que haga este nuevo sortedData que sobreescriba el prop
  //si existen los dos es por que esa es la columna por la que hay que reorganizar todo el object, TOOOODO
  if (sortOrder && sortBy) {
    //Como se esta reciviendo todo el object props completo, pues en esta variable se extrae el sortValue de configProp
    //Por medio de desctructuracion
    const { sortValue } = configProp.find((column) => column.label === sortBy);
    console.log(configProp.find((column) => column.label === sortBy));
    console.log(sortValue);
    //its equivalent to:
    //const sortValue = configProp.find(column => column.label === sortBy).sortValue;

    //Esta funcion es un sort con un algoritmo muy util, un COMPARADOR
    //sort convierte a string y luego compara lo que da lugar a bugs asi ue se utiliza el comparador
    //para hacer las verificaciones, video 259 de grider
    //el comparador lo que hace es restar los elementos y asi si es negativo o no saber cual es mayor que cual
    sortedData = [...dataProp].sort((a, b) => {
      //aqui lo que se esta haciendo es utilizar un pattern para extraer los valores por los cuales
      //se va a re-ordenar la lista de objects que se le meta, la funcion sortValue
      //busca y extrae los valores de object y los somete al sort, video 262
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      //el revez order funciona de forma simple, debido a que el truco del sort es si el resultado
      //de la resta es -1 o no, entonces para darle un orden inverso se le mete el -1
      const reverseOrder = sortOrder === "ascendente" ? 1 : -1;

      //este if es para saber si el valor a ordenar que entra es un string o un numero
      if (typeof valueA === "string") {
        //el localeCompare es para comparar strings transformandolos en numeros
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        //este se aplica si el valor es numero
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  //en cuanto al {...props}, si se manda un dataProp y un configProp que es igual a los props, lo que pasa es que se SOBREESCRIBE
  return (
    <div>
      {sortOrder} - {sortBy}
      <Table
        {...props}
        dataProp={sortedData}
        configProp={updatedConfig}
      ></Table>
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoChevronUp></GoChevronUp>
        <GoChevronDown></GoChevronDown>
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <GoChevronUp></GoChevronUp>
        <GoChevronDown></GoChevronDown>
      </div>
    );
  } else if (sortOrder === "ascendente") {
    return (
      <div>
        <GoChevronUp></GoChevronUp>
      </div>
    );
  } else if (sortOrder === "descendiente") {
    return (
      <div>
        <GoChevronDown></GoChevronDown>
      </div>
    );
  }
}

export default SortableTable;
