# Exercise 05 - Data Persistence

## Como funciona la app

La idea de este ejercicio es mostrar como hacer un CRUD basico, utilizando para ello useEffect para hacer un correcto fetching de informacion a data persitente desde un archivo json, es lo mismo que en el anterior solo que ca la api hace un fetch a un archivo externo y hace la distribucion de la info de la misma forma, aqui lo nuevo es el uso de un hook llamado useEffect que tiene muchas muchas particularidades de las que hay que estar pendiente

### Temas tratados

- useEffect
- Basic CRUD (Create, read, update, delete)

## Tips

- In React, the useEffect hook is used to perform side effects in functional components.
- El useEffect es util no solo para hacer fetching sino para generar re-renderizados cuando un state de otro componente cambie
- Se puede almacenar jsx en variables y generar condicionales para que muestre uno u otro contenido, estas condiconales pueden ser incluso comparativos de tipo &&.
- Your components will often need to display different things depending on different conditions. In React, you can conditionally render JSX using JavaScript syntax like if statements, &&, and ? : operators.
- In JSX, `{cond ? <A /> : <B />}` means “if cond, render `<A />`, otherwise `<B />`”.
- In JSX, `{cond && <A />}` means “if cond, render `<A />`, otherwise nothing”. **No coloques números en el lado izquierdo del operador &&.**
- The shortcuts are common, but you don’t have to use them if you prefer plain if.
- Los componentes que son parientes NO SE DEBEN DE COMUNICAR ENTRE ELLOS, SIEMPRE UTILIZE LOS PARENTS.

### Ojo con useEffect

![useEffect](../gridder%20diapositivas/031%20useEffect.jpg)

Debido a que useEffect corre dependiendo de varios factores como el cambio de la variable en el dependecy array, esto puede generar bugs cuando se utiliza otras funciones dentro de useEffect. Entonces EVITAR:

- Posible bug anytime your useEffect contains a function that refers to a variable that change in other ways outside the component.
- Por eso esta el slint rule que dice que se debe de meter la variable dentro del array final de la arrow function para que al cambiar esta variable, haya un re-renderizado y utilizacion del useEffect otra vez con la variable actualizada.
- oJO con el slint que no siempre tiene la razon.

#### **Se recomienda entender los tres trucos de useEffect**

![useEffect tricks](../gridder%20diapositivas/032%20ticky%20useEffect.jpg)

- **Understand when an arrow function gets called:** Es entender el parametro que esta dentro del [] para saber cuando el useEffect debe de entrar en accion.
- **Understanding the arrows function return value:** Mirar Restricciones de useEffect sobre que puede devolver y que no, ya que la idea de useEffect es ejecutar codigo mas no devolver un resultado.
- **Understanding Stale Variables References:** El video de grider habla sobre las funciones que se crean dentro de un useEffect que contengan una variable exterior, acordarse que el use effect en el dependency array si esta vacio, solo renderiza una vez y mantiene el valor inicial de la variable que se paso, entonces toca colocar la variable o la funcion en el dependecy array para que funcione el useEffect y haga lo suyo cada vez que cambie esa variable, pero si la variable o funcion vienen de un context o de un prop es muy probable que esos valores cambien y haga que el useEffect se ejecute sin nosotros querer que eso pase, entonces ahi es donde entra useCallback, es para que como cada vez se llama la funcion con el useEffect y esta en el dependecy array y puede cambiar debido a que esta funcion o variable venga de otro lado ya sea un context o un prop, pues a usar useCallback. Ver los request en el browser para ver si el useEffect va bien cuando haga fetching.

#### Side Effects

Tambien se puede necesitar agregar events listeners al componente que no dependan de state, si se agregan al componene asi solito, pues se va a adiconar eventListeners cada vez que se re-rederize el componente y esto crear un caos, entonces se meten en el useEffect para que se asignen al ejecutar el useEffect y utilizar la funcion cleanUp para eliminarlos cuando el componente se quite y asi evitar las reasignaciones de eventListeners.

so, in a react app, its forbidden the use of eventlisteners on a component that does not have state, but if the necessity of add an eventlistener without an state its big, its called a side effect and the way to handle it its to have those event listeners inside the useEffect.

- Una forma de pasar un listener con click al body desde un useEffect es crear una funcion listener y ahi si asignarle un eventlistener normalito al body o a donde quiera y para que no hayan 20.000 asiganciones de eventos a un elemento pues se utiliza el cleanUp para remover el evento asignado y que solo haya una sola asignacion. Bendito react.
Entonces: La idea es que el cleanUp es para eliminar las asignaciones que se hacer cada vez que corre useEffect.

- Para que tipo de event listeners se le pueden meter al useEffect, pues como por ejemplo un modal.

**Cosas a tener en cuenta con el useEffect:**

#### Los tres usos de useEffect

![useEffect uses](../gridder%20diapositivas/033%20useEffect%20arguments.jpg)

#### Restricciones de useEffect

- No se puede return numbers
- No se puede return strings
- No se puede utilizar async await dentro de useEffect
- Si puede retornar funciones

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

### Why useCallback

The use of `useCallback` in React is primarily related to memoization and optimization of functions in the context of dependencies in the dependency array of the `useEffect` hook. Let's analyze the two components to understand why `useCallback` is used in one and not the other.

1. **Component with `useEffect` and `fetchBooks` function:**
   - In the first component, `App`, you have an `useEffect` hook that triggers the `fetchBooks` function when the component mounts.
   - The `fetchBooks` function is defined within the `App` component and is used as the effect's callback.

   ```jsx
   useEffect(() => {
     fetchBooks();
   }, []);
   ```

   - In this case, since `fetchBooks` is defined within the component and doesn't depend on any prop or state, there is no need to memoize it using `useCallback`.

2. **Component with `useContext` and `fetchBooks` function:**
   - In the second component, `App` uses the `useContext` hook to consume the `BooksContext`, which provides the `fetchBooks` function.
   - `fetchBooks` is passed as a dependency to the `useEffect` hook.

   ```jsx
   useEffect(() => {
     const fetchData = async () => {
       const result = await fetchBooks();
       console.log(result);
     };

     fetchData();
   }, [fetchBooks]);
   ```

   - Here, `fetchBooks` is a function received from the context, and it is recommended to use `useCallback` to memoize it. This ensures that the function reference remains constant across renders unless the dependencies change, preventing unnecessary re-renders of the component.

In summary, the decision to use `useCallback` depends on whether the function is defined within the component (where it won't change between renders) or received from props/context (where it's recommended to memoize it to avoid unnecessary re-renders). In the first component, the function is defined locally, and in the second component, it's received from the context, hence the use of `useCallback` in the second component.
