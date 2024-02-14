import { useSelector } from "react-redux";

/*LO QUE ENTRA
- Importa el hook useSelector de "react-redux".

ALGORITMO

- La forma en que este componente funciona es que a medida que se actualiza el state de store, se actualiza
en tiempo real este componente
- Utiliza el hook useSelector para obtener el estado de los automóviles (carsData) y el término de búsqueda (searchTerm) del store Redux.
- Filtra los automóviles según el término de búsqueda.
- Calcula el costo total sumando los costos de los automóviles filtrados.
- Retorna el resultado del costo total.

LO QUE RETORNA
- Retorna un componente funcional CarValue que muestra el costo total de los automóviles filtrados.
  - Utiliza el estado de los automóviles y el término de búsqueda del store Redux.
  - Filtra los automóviles según el término de búsqueda y calcula el costo total.
  - Muestra el costo total en un elemento div con la clase "car-value".
*/

function CarValue() {
  /* Esta es otra forma de desctructuring
    const totalCost = useSelector((state) => {
        const filteredCars = state.cars.carsData.filter((car) => {
            return car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase());
        });

        let cost = 0;

        for (let car of filteredCars){
            cost += car.cost
        }
        return cost;
    });
    */

  const totalCost = useSelector(({ cars: { carsData, searchTerm } }) => {
    
    const filteredCars = carsData.filter((car) => {
      return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    let cost = 0;

    for (let car of filteredCars) {
      cost += car.cost;
    }
    return cost;
  });

  return <div className="car-value">Total Cost: ${totalCost}</div>;
}

export default CarValue;
