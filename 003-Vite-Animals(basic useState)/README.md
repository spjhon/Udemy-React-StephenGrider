# Ejercicio 03 curso de grider de react en udemy

## Temas tratados

En este ejemplo del react de grider se explica y se aprenden trucos de:

- Uso basico de useState
- Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre.
- Se explica como utilizar el map para mapear componentes
- se explica como pasar imagenes a un objeto para ser manipuladas
- se explica el sistema de eventos y el sistema de state.

### Tips

- Ojo con la inmutabilidad cuando se trabaja con los estados (recuerda el .slide() y el ...history en el ejemplo de tick-toc).
- JavaScript tiene una particularidad, si un object tiene dos llaves con el mismo nombre, una sobre-escribe a la otra (LAS LLAVES EN LOS OBJECTS DEBEN DE SER UNICAS).
- The **spread** syntax: The dots literally mean “gather the remaining parameters into an array”, cuando se utiliza como parametro
- La clave de react es la re-renderizacion de un componente y como sus estados van cambiando.
- Si se llama el componente que use useState varias veces, habran varios estados diferentes.
- Las funciones que utilicen "use" se consideran "hooks" como por ejemplo useState
- Ojo con los objects y los arrays ya que estos son los que mutan.
- React no renderiza o print bools, nulls o undefined, entonces es util para esconder divs, o decir que no renderizen.
-algo interesante a tener en cuenta cuando al onClick se le pasa el handleclick directamente sin funciones arrow, devuleve el event object.
- Todo handleClick debe de ser definido en donde esta el state que modificay pasarlo por el sistema de props
- Un underline element es un componente que el html que devuelve es el mismo que el nombre de la funcion y el nombre del componente.
- Un componente no puede retormar mas de un tag, en caso de varios tags envolvelos en un wrapper or a fragment.

Esta es una guia practica de como utilizar un event:

![text for screen reader](../gridder%20diapositivas/015%20Importando%20Imagenes.jpg)

Anatomia basica de state:

![anatomia basica state](../gridder%20diapositivas/017%20anatomia%20basica%20de%20useState.jpg)

### Component Lifecicle

In React, the term "lifecycle" refers to the various stages a component goes through during its existence. Understanding the lifecycle of a React functional component is crucial for managing component behavior, side effects, and updating the user interface. With the introduction of React Hooks, functional components can now use state and lifecycle features traditionally associated with class components. Let's explore the functional perspective of React component lifecycle.

1. **Mounting Phase:**
   - **`useEffect` (componentDidMount):** This hook is called after the component has been rendered to the DOM. It is often used for tasks like fetching data or setting up subscriptions. The code inside `useEffect` runs once after the initial render.

2. **Updating Phase:**
   - **`useEffect` (componentDidUpdate):** This hook is called after each render when the component updates. It's helpful for handling side effects that depend on the current state or props.

3. **Unmounting Phase:**
   - **`useEffect` (componentWillUnmount):** This hook is used for cleaning up when a component is about to be removed from the DOM. It runs before the component is unmounted.

4. **Error Handling:**
   - **`useEffect` (componentDidCatch):** This hook is used for catching JavaScript errors anywhere in a component tree. It works like a JavaScript catch block but for components.

5. **Special Cases:**
   - **`useEffect` with empty dependency array:** If you pass an empty dependency array (`[]`) as the second argument to `useEffect`, it simulates the behavior of `componentDidMount`, as the effect will only run once after the initial render.

   - **`useEffect` with cleanup function:** By returning a function from the `useEffect`, you can implement cleanup logic, simulating `componentWillUnmount`. This cleanup function is run when the component is unmounted or when the dependencies change.

Functional components, with the help of Hooks like `useState` and `useEffect`, provide a more concise and modular way of handling component lifecycle compared to class components. The `useEffect` hook is particularly versatile, covering aspects of both mounting and updating phases. Understanding these functional perspectives allows you to manage state and side effects effectively in React components.
