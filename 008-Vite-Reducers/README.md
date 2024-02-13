# Exercise 08 Basic Reducer

## Como Funciona la App

Es un simple counter que tiene tres versiones, la version original es un ejemplo de useEffect con useState, el segudno ejemplo es la muestra de como se utiliza un reducer y el tercer ejemplo es el mismo reducer pero con una libreria llamada immer que permite hacer modificadiones al state con herramientas de javascript que modifican arrays y objects, esta libreria es parte de la libreria REDUX.

### Temas Tratados

- Reducers

## Tips

- Tambien produce state pero es mas utilizado para con componentes que esten relacionados entre si.
- De acuerdo al ejemplo de grider es cuando hay varios states relacionados o que hayan muchos cambios al mismo state, entonces se crea una store centralizada y funciones encargadas de la modificacion de estos states y hacer todos los cambios respectivos por medio del sistema de context.
- No async/await, no request, no promises, no outside variables
- Si se desea resetear un state pues se retorna un objeto nuevo con valores reseteados
- Siempre meter la logica en el reducer y dejar el dispatch y el payload lo mas limpio posible
- La diferencia con REDUX es que REDUX utiliza los slices para la administracion de los reducers.

### Enorme consejo

- Ponga toda la logica de la actualizacion de los states dentro del reducer mas no en el dispach o en el payload ya que se puede equivoar otro dev al escribir toda la logica cada vez que haga un dispatch
- Lo mas recomendable es mandar a travez del payload solo los datos desnudos mas no mandar logica alguna.
