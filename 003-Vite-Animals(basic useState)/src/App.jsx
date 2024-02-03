import './App.css';
import AnimalShow from './AnimalShow';
import { useState } from 'react';

//funcion que return un random string
function getRandomAnimal(){
  const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

  //este return es simple es retgornar animals en su posicion (y se coloca una posicion random relativa a la longitud del array)
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);
  const [counter, setCounter] = useState(0)
  

  const handleClick = () => {
    //la forma de agregar a un array algo que ya viene de atras
    //se utiliza el ... ya que si se utiliza algo como el push()
    //es como intentar actualizar variables sin el useState(), no va a funcionar en el render final
    setCounter(counter + 1);
    setAnimals([...animals, getRandomAnimal()])
    console.log('button was clicked!');
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type = {animal} key={index}/>
  });

  //otra forma para clicks cortos es directamente sobre el onClick = {() => console.log('clicked!')}

  return (
    <div className='App'>
      <div>Animales generados: {counter}</div>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
};

export default App;
