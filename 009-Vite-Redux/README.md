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
- OJO, al utilizar el =, tener en cuenta cuando se esta mutando el state y cuando se esta asignado cambios en el state

### Pasos para cambiar un State en Redux

Una vez creada la store, los slices, conectado el provider desde la app principal se puede llamar desde cualquier componente los actions y asi modificar el state, estos son los pasos de grider:

1. Add a reducer to one of your slices that changes state in some particular way.
2. Export the action creator that the slice automatically creates.
3. Find the component that you want to dispatch from
4. Import the action creator function and "useDispatch" from react-redux
5. Call the "useDispatch" hook to get access to the dispatch function.
6. When the user does something, call the action creator to get an action, then dispatch it.

### Pasos para Accesar a un state en Redux

1. Find the component that needs to access some state
2. Import the "useSelector" hook from "react-redux"
3. Call hte hook, passing in a selector function
4. Use the state! Anytime state changes, the component will atuomatically re-render

### Extra Reducers

La idea de los extra-reducers es agregar una forma de modificar todas las keys de la store ya que desde
un solo slice no se puede hacerle cosas a otro slice, entonces el extra reducer hace estas conecciones extras

Otra forma de verlo es que por ejemplo en el ejercicio 10 de grider como se utilizan los extra reducers para comunicarse entre slices, si por ejemplo se dispara un dispatch desde otro slice, este slice haga un cambio
de state.

- Algo curioso a tener en cuenta es que cuando se llama el dispatch, el type/payload se manda a todos los reducers grandotes, osea a todos los slices, entonces solo se ejecuta el slice que concuerde con el TYPE pero se manda el type/payload a todos los slices

- Entonces el extra-reducer es que ejecute un type que es comun a todos los slices, un type especial que esta definido en el actions hook, entonces todos los slices van a estar atentos a un handler que mande un type que sea comun a todos los slices.

La finalidad principal de los extraReducers no es necesariamente reducir la cantidad de dispatches, sino proporcionar una forma más organizada y escalable de manejar la lógica relacionada con acciones específicas en diferentes slices.

Por ejemplo, si tienes varias slices en tu aplicación y necesitas manejar una acción que afecta a más de una de ellas, podrías definir un extraReducer en cada slice correspondiente y luego combinarlos usando la función createSlice o createAsyncThunk.

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
