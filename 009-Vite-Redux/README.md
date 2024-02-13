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

### Pasos para cambiar un State en Redux

Una vez creada la store, los slices, conectado el provider desde la app principal se puede llamar desde cualquier componente los actions y asi modificar el state, estos son los pasos de grider:

1. Add a reducer to one of your slices that changes state in some particular way.
2. Export the action creator that the slice automatically creates.
3. Find the component that you want to dispatch from
4. Import the action creator function and "useDispatch" from react-redux
5. Call the "useDispatch" hook to get access to the dispatch function.
6. When the user does something, call the action creator to get an action, then dispatch it.

### REDUX diagram

Algunas Opciones de Redux
![Algunas Opciones](../gridder%20diapositivas/054%20more%20about%20redux.jpg)

Como conextarse a una store en REDUX
![Conectarse a Store](../gridder%20diapositivas/055%20Connecting%20React%20to%20redux.jpg)

Diseño de una store de REDUX
![Diseño Redux](../gridder%20diapositivas/056%20Redux%20store%20design.jpg)

Como REDUX crea automaticamente los type y payload para el swith del reducer de tal forma que cuando se invoca la
funcion, el argumento es el payload del reducer
![REDUX actions](../gridder%20diapositivas/057%20How%20actions%20work%20automatically.jpg)
