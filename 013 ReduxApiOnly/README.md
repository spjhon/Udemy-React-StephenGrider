# Exercise 11 Async Thunks

## Como Funciona la APP

Esta app es un anidado de acordeones que hace fetching cada vez que se habre el acordeon, hay tres niveles, dos niveles con una tecnica que ya no se utiliza llamada thunks y otra ya mas moderna, se muestra como crear un esqueleto que muestra un estado de carga y como administrar la carga de informacion.

Son tres niveles de fetching, users, albums y photos:

El priner nivel donde se hace fetching a los users se utiliza la tecnica vieja de utilizar thunks que es tedioso.

Ahora se utiliza el sistema de redux toolkit query para hacer el fetching y todo lo que va detras, la ventaja del toolkit query es que automaticamente se encarga de varios aspectos del fetching que haciendolo con axios o peor aun a mano puede conllevar muchos muchos problemas.

### Temas Tratados

- Async Thunks
- Como manejar asyn en REDUX
- RTK query
- Redux ToolKit

### Herramientas propias

- createApi()
- 

## Tips

- Thunks es viejo, lo nuevo es RTK query.
- Se aplica una forma de estructuracion de los datos de forma que no sea una forma jeraquica muy rigida sino mas flexible (ver video 351 de gridder), para ello se aplica lo que se llama una NORMALIZAD FORM, que es en donde las jerarquias son separadas y se comunican entre si con ids que identifican a que otra tabla pertenecen. Y asi con una funcion tipo filter se puede identificar cual va en donde.
- Se vuelve y recuerda que dentro de los reducers NO se debe manejar nada asyncrono, todas las variables deben de ser las que entran como argumentos.

### Proceso con Thunks

- El componente fetchUsers de los thunks solo hace el llamado de datos, asi como los otros componentes, estos componentes solo se encargan de hacer el proceso final a travez de axios.
- En el componente useThunk es donde se utiliza los thunks que hacen los respectivos HTTP request, y estos thunks contienen los states de loading y error que son repartidos a aquellos componentes que requieren el fetch.

- Entonces cuando se dispara el thunk:

Creating an Async Thunk

- Un thunk lo que hace es despachar automaticamente actions types a los slice mientras se esta haciendo fetching

1. Create a new file for your thunk. Name it afeter the purpose of the request
En este paso lo que se hace es crear el archivo de fetchUsers, addUsers etc que lo que hace es utilizar el aync thunk.

2. Create the thunk. Give it a base type that describes the purpose of the request
Se crea el async thunk por medio de la funcion createAsynThunk que viene con react toolkit

3. In the thunk, make the request, return the data that you want to use in the reducer
Aqui se utiliza axios para hacer el request y retornar los datos que se deseen en el reducer

4. In the slice, add extrRedcuers, watching for the action types made by the thunk
Aqui lo que se hace en el slice es que se adiciona el state de acuerdo a si es pending, fullfiled o error y actualizar todo el slice y los subsecuentes componentes acorde a los nuevos states.

5. Export the thunk from the store/index.js file

6. When a user does something, dispatch the thunk function to run it.

### Proceso de fetching con RTK Query

Pertenece a toolkit query, se encarga de crear automaticamente los tunks y los slices necearios para el correcto fetching, lo que nos da son los hooks para poder hacer los request o los post por medio de HTTP.

Se hace por medio de la herramienta createApi. Esta api lo que hace es que es un codigo que corre del lado del cliente y que sirve de mediador entre el fetch del navegador y redux

Por medio de endpoints se crean hooks que sirven para hacer mutations o queries, entonces la idea es que de estos hooks, automaticamente la magia de react-toolkit query es que nos devuelve states de loading, error, entre otros al momento de crear cada query o mutation cuando son invocados en el componente.

#### Proceso

1. Identify a group of related requests that your app needs to make
2. Make a new file that will create the api
3. The API needs to store a ton of state related to data, request status, erros. Add a "reducerPath"
4. The API needs to know how and where to send requests. Add a "baseQuery"
5. Add "andpoints", one for each kind of request you want to make. Reqs that read data are queries, write data are mutations
6. Export all of the automatically generated hooks
7. Connect the API to the store. Reducer, middleware, and listeners.
8. Export the hooks from the store/index.js file.
9. Use the generated hooks in a component!.

![Link a un css analizer](https://www.projectwallace.com/css-code-quality)