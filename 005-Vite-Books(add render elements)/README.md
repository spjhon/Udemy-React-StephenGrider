# Ejercicio 005 - books

## Como funciona la app

Es una app en la cual se puede a travez de un formulario simple agregar un titulo y una imgen a una lista en forma de tarjeta, la forma en que funciona la app es que todos los libros se guardan en un state en la app principal y con un componete book create se manda la funcion para actualizar el state y de ahi se manda a los children.

- La forma en que se almacena el state en esta app en particular es un array y dentro peqenos objects que tienen un libro que se compone de un id y un titulo

## Temas Tratados

- lifting state up
- State inmutability

### Tips

- Ojo con la inmutabilidad debido a como funciona el sistema de state en combinacion con el sistema de re-renderizado y las formas correctas de como actualizar el state, se puede utilizar la mutacion de arrays y objects pero siempre y cuando lo que se mande al nuevo state sea un nuevo object
- Se recomienda ver las diapositivas del 23 al 30 de las diapositivas de grider
- Si se hace un mal update del state la forma de saberlo es haciendo re-renders que hacen comparacion de ambos arrays o objects y si react no detecta el nuevo object o array pues no va a re-renderizar
