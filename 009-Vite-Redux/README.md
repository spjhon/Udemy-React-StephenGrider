# Exercise 09 Redux

## Como funciona la App

Es una app para agregar una lista de titulos de peliculas y titulos de canciones por medio de una libreria faker con el fin de demostrar como funciona la libreria REDUX, su STORE, y los slices creados para manipulas los states

### Temas Tratados

- Introduccion a Redux
- Creacion de Slices
- Como utilizar useDispatch para mandar ordenes a los Slices y que se guarde en el store
- Creacion de extraReducers

## Tips

- Una forma de ver REDUX es que es una STORE que almacena reducer en forma de llaves en un object, cada reducer es un SLICE que posee states que por medio de reducers se crean funciones para cambiar los states por medio de dispatchs y payloads.
- De por si una app tiene una sola store y es donde estan guardados todos los states
- los componentes que se suscriban a la store va a ser re-renderizados cuando el respectivo state cambie y para eso es els useSelector
- Se puede utilizar el metodo getState() para ver que hay dentor de la store
- cuando se esta disenando el state para redux pensar en el derived state: Values that we can calculate using existing state.
- **CONSEJO PARA NEXT JS:** fetch data in server components and mutate in client components

### REDUX diagram

Algunas Opciones de Redux
![Algunas Opciones](../gridder%20diapositivas/054%20more%20about%20redux.jpg)
