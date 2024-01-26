import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

function CarList () {
    const dispatch = useDispatch();
    //en este useSelector se esta utilizando algo de desctructuring
    //recuerda que el useSelector retorna valor, es una funcion despues de todo
    const {cars, name} = useSelector(({form, cars: {searchTerm, carsData}}) => {
        
        const filteredCars =  carsData.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return {
        cars: filteredCars,
        name: form.name,
      }
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