import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

/* LO QUE ENTRA
- Importa los hooks useSelector y useDispatch de "react-redux".
- Importa la acción removeCar desde el store.

ALGORITMO
- Utiliza el hook useSelector para obtener el estado del formulario (form) y el array de automóviles (carsData) del store Redux.
- Realiza un filtrado de los automóviles según el término de búsqueda y devuelve un objeto con las propiedades cars y name.
- Define una función handleCarDelete que despacha la acción removeCar al hacer clic en el botón "Delete" de un automóvil.
- Mapea sobre el array de automóviles filtrados (filteredCars) y genera componentes para cada automóvil con su respectivo botón de eliminación.
- Retorna un componente CarList que muestra la lista de automóviles filtrados y un separador horizontal.

LO QUE RETORNA
- Retorna un componente funcional CarList que muestra una lista de automóviles filtrados y proporciona la capacidad de eliminar automóviles.
  - Utiliza el estado del formulario (form) y el array de automóviles (carsData) del store Redux.
  - Muestra automóviles filtrados según el término de búsqueda y resalta el nombre si coincide con el nombre actual en el formulario.
  - Proporciona botones de eliminación para cada automóvil en la lista.
*/

function CarList () {
    const dispatch = useDispatch();
    //en este useSelector se esta utilizando algo de desctructuring
    //recuerda que el useSelector retorna valor, es una funcion despues de todo

    //ESTE ES EL METODO DE GRIDER PARA DESTRUCTURACION
    /*const {cars, name} = useSelector(({form, cars: {searchTerm, carsData}}) => {
        
        const filteredCars =  carsData.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      }
    });

    /*ESTA ES OTRA FORMA DE APLICAR EL DESTRUCTURING*/
    //Sin embargo noto que se puede utilizar el destructurin para saber que es lo que llega a ese useSelector de cuales slices
    const { cars, name } = useSelector((state) => {

  const filteredCars = state.cars.carsData.filter((car) =>
    car.name.toLowerCase().includes(state.cars.searchTerm.toLowerCase())
  );

  return {
    cars: filteredCars,
    name: state.form.name,
  };
});

    
    


    const handleCarDelete = ((car) => {
        dispatch(removeCar(car.id));
    });

    const renderedCars = cars.map((car) => {
        //este bold es por si se va a ingresar un nombre parecido pues se resalte
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())

        return (
            <div key={car.id} className={`panel ${bold && 'bold'}`}>
                <p>
                    {car.name} - ${car.cost}
                </p>
                <button className="button is-danger" onClick={() => handleCarDelete(car)}>
                    Delete
                </button>
            </div>
        )
    })
    return (
        <div className="car-list">
            {renderedCars}
            <hr></hr>
        </div>
    );
    
};

export default CarList;