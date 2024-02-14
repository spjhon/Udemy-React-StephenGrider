# Ejercicio 10 de grider

Async with thunks

## Como funciona la app

Es un ejemplo de como manejar los slices y redux con otro ejemplo de practica que se divide en dos slices y 4 componentes, en los slices se observa como se pueden crear states hechos de objects para guardar listas de informacion

- Desde main se incorpora redux a los componentes
- Desde app se importan todos los componentes
- Index js es la store de la app: Esta store guarda dos llaves form y cards que son los dos slices.
- Hay dos slices, uno que es formSlice que contiene el nombre y el costo por carro, estos slices son utilizados mas que todo para el control de los inputs pero es tambien utilizado en tiempo real por el componente que renderiza las listas y Otro que es carsSlice que contiene el termino de busqueda con su respectivo input controlado y el array con los datos que controla el otro slice, ya que el otro slice no almacena, su estado es cambiante mientras que en el de carros es acumulativo.

### Temas Tratados

- Redux Toolkit
- Slices
- Redux Store

## Tips

- Otra forma de ver los extraReducers es que por ejemplo en el ejercicio 10 de grider como se utilizan los extra reducers para comunicarse entre slices, si por ejemplo se dispara un dispatch desde otro slice, este slice haga un cambio de state

- Hacer la logica de filtrado de datos del state en useSelector para que aparezca en el DevTools
