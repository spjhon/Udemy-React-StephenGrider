# Ejercicio 03 curso de grider de react en udemy

## Temas tratados

En este ejemplo del react de grider se explica y se aprenden trucos de:

- Uso basico de useState
- Modificar los arrays y objects con el spread sytax ... para no modficar un state sino crear uno nuevo siempre.
- Se explica como utilizar el map para mapear componentes
- se explica como pasar imagenes a un objeto para ser manipuladas
- se explica el sistema de eventos y el sistema de state.

### Tips

- Los componentes en REACT siempre deben de tener una letra mayuscula al principio para diferenciarlos de elementos HTML normales.
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
- Se recomienda aplicar (ejemplo en github examples-react) atomic design in order to create the components.
La destructuración con [] indica que se están destructurando arrays, mientras que si se utiliza {} es que se está destructurando un objects.
- Se puede utilizar map para mapear todos los elementos que se encuentren en objetos, vengan de funciones, fetch, etc. (siempre agregar un key).
- Un set en react es un peticion de hacer un re-render con los nuevos states.
- En react los on son los eventos html que estan listados en w3schools.

Esta es una guia practica de como utilizar un event:

![text for screen reader](../gridder%20diapositivas/015%20Como%20manejar%20eventos%20como%20click.jpg)

Anatomia basica de state:

![anatomia basica state](../gridder%20diapositivas/017%20anatomia%20basica%20de%20useState.jpg)
