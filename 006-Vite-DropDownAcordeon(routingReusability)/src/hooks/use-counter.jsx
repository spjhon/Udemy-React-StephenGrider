import { useState, useEffect } from 'react';

function useCounter(initialCount) {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  //Este return muestra lo que esta disponible una vez se exporte el hook
  return {
    count,
    increment,
  };
}

export default useCounter;