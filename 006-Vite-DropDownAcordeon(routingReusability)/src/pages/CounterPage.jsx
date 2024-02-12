import Button from '../components/Button/Button';
import useCounter from '../hooks/use-counter';

function CounterPage({ initialCount }) {
    //En este ejemplo de hook tenemos que se hace destructurin del hook importado que debe de traer esas funciones o states listos para utilizar
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <h1>Count is {count}</h1>
      <Button onClick={increment}>Increment</Button>
    </div>
  );
}

export default CounterPage;
