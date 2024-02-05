# Exercise 05 - Data Persistence

## Como funciona la app

La idea de este ejercicio es mostrar como hacer un CRUD basico, utilizando para ello useEffect para hacer un correcto fetching de informacion a data persitente desde un archivo json, es lo mismo que en el anterior solo que ca la api hace un fetch a un archivo externo y hace la distribucion de la info de la misma forma, aqui lo nuevo es el uso de un hook llamado useEffect que tiene muchas muchas particularidades de las que hay que estar pendiente

### Temas tratados

- useEffect
- Basic CRUD (Create, read, update, delete)

## Tips

- El useEffect es util no solo para hacer fetching sino para generar re-renderizados cuando un state de otro componente cambie
- Se puede almacenar jsx en variables y generar condicionales para que muestre uno u otro contenido, estas condiconales pueden ser incluso comparativos de tipo &&.
- Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
- In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”. **No coloques números en el lado izquierdo del operador &&.**
- The shortcuts are common, but you don’t have to use them if you prefer plain if.
- Los componentes que son parientes NO SE DEBEN DE COMUNICAR ENTRE ELLOS, SIEMPRE UTILIZE LOS PARENTS.

### Ojo con useEffect

![useEffect](../gridder%20diapositivas/031%20useEffect.jpg)

Debido a que useEffect solo corre una vez, durante el primer render, esto puede generar bugs cuando se utiliza otras funciones dentro de useEffect. Entonces EVITAR:

- Posible bug anytime your useEffect contains a function that refers to a variable.
- Por eso esta el slint rule que dice que se debe de meter la variable dentro del array final de la arrow function para que al cambiar esta variable, haya un re-renderizado y utilizacion del useEffect otra vez con la variable actualizada.
- oJO con el slint que no siempre tiene la razon.
- Entonces para arreglar el problema se debe de utilizar (despues de analizar el flujo de datos a travez del provider) useCallback en el provider.
- Una forma de pasar un listener con click al body desde un useEffect es crear una funcion listener y ahi si asignarle un eventlistener normalito al body o a donde quiera y para que no hayan 20.000 asiganciones de eventos a un elemento pues se utiliza el cleanUp para remover el evento asignado y que solo haya una sola asignacion. Bendito react.
Entonces: La idea es que el cleanUp es para eliminar las asignaciones que se hacer cada vez que corre useEffect.

Cosas a tener en cuenta con el useEffect:

![useEffect tricks](../gridder%20diapositivas/032%20ticky%20useEffect.jpg)

#### Los tres usos de useEffect

![useEffect uses](../gridder%20diapositivas/033%20useEffect%20arguments.jpg)

#### Restricciones de useEffect

- No se puede return numbers
- No se puede return strings
- No se puede utilizar async await dentro de useEffect
- Si puede retornar funciones

#### Algo para tener en cuenta

Se le puede aplicar una funcion llamada clean up que se coloca como return del useEffect para que cuando vuelva y se ejecute el useEffect vaya a esa funcion de cleanUp

### useEffect with Context system

Sí, puedes utilizar `useEffect` para re-renderizar un componente cuando una variable de estado, que proviene de un contexto (`Context`), cambie. Esto es útil cuando quieres que un componente se actualice en respuesta a cambios en el estado global gestionado a través de un contexto.

Aquí hay un ejemplo básico de cómo podrías hacer esto:

Supongamos que tienes un contexto definido, algo así como:

```jsx
// TuContexto.js
import { createContext, useContext, useState } from 'react';

const TuContexto = createContext();

export const TuContextoProvider = ({ children }) => {
  const [miVariableDeEstado, setMiVariableDeEstado] = useState(initialValue);

  return (
    <TuContexto.Provider value={{ miVariableDeEstado, setMiVariableDeEstado }}>
      {children}
    </TuContexto.Provider>
  );
};

export const useTuContexto = () => {
  return useContext(TuContexto);
};
```

Luego, en tu componente, puedes usar `useEffect` para re-renderizar el componente cuando `miVariableDeEstado` cambie:

```jsx
import React, { useEffect } from 'react';
import { useTuContexto } from './TuContexto';

const TuComponente = () => {
  const { miVariableDeEstado } = useTuContexto();

  useEffect(() => {
    // Tu lógica aquí para manejar el cambio en la variable de estado
    console.log('La variable de estado ha cambiado:', miVariableDeEstado);
  }, [miVariableDeEstado]);

  return (
    // Renderizado de tu componente
  );
};

export default TuComponente;
```

En este ejemplo, el componente `TuComponente` se re-renderizará cada vez que `miVariableDeEstado` cambie en el contexto. Esto permite que el componente responda a cambios en el estado global gestionado a través del contexto.
