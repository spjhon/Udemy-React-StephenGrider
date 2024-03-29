# React + Vite

## Ejercicio numero 1 del curso de udemy de react de Stephen Grider

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Temas que se cubren

- Setup basico y creacion de projecto
- JSX y sus diferencias con HTML
- Que hay dentro de un projecto react (en este caso creado con vite)
- Como react hace basico render desde un html como root
- Que es un componente y sus dos partes principales
- Como react se importa y se inyecta en el projecto
- Reglas de como pasar atributos html al componente e introduccion al sistema de props

### Tips

- Se recomienda saber como funciona el sistema de imports y exports de javascript
- Un componente en REACT es una funcion que retorna HTML al DOM virtual.
- Por medio de esta pequeña app se demuestra como funciona jsx y las 5 reglas primarias a comparacion de HTML normal.
- Tambien se explica como react captura el root del dom para renderizarlo
- Curiosamente un input se puede editar en vivo sin necesidad de utilizar el (e)
- Porfavor aplicar al menos las 5 reglas basicas de HTML.
- Ojo con los numeros y letras y en donde deja pasar objects y en donde no a traves de los curlyes
- Se explica que un componente funcional basico y como se divide en dos partes, la parte logica y la parte de return que es donde retorna el html en forma de jsx con las reglas de curly braces que dispone.
- (de gridder) react no puede imprimir (osea retornar del componente) otras cosas que no sean numeros y letras en las crulys {} de return, objetos no, arrays no, booleanos no; dentro de las curlyes se pueden meter funciones y llamadas pero que por supuesto terminen en primitivos como numeros y letras.
- Lo que hace babel es que retorna un object con toda la info del componente como los children, el tipo de tag y otros.
- Babel: Transforma JSX a javascript normal
- Una diferencia entre el JSX con HTML es que hay que cerrar todos los tags, y que solo se puede devolver un solo componente (envoltura).
- WebPack: Crea todo el bundle, en Next js se utiliza TurboPack
- React trata diferente a los Numbers, Strings, Null, Undefind y Booleanos a los Arrays y los Objects para cuando se utiliza el state, entonces con los arrays y los objects toca hacer una copia con el ...
- No retorne un objeto como tal en la function o va a dar error
- Para agregar estilo se utiliza className, no se utiliza class como en html normalmente se haria.

#### Basic JSX rules

1. All prop names follow camelCase, esto es en especial para los atributos estandares del lenguaje HTML, en la consola de error de react un esLint basico es comprobar que los atributes estan escritos correctamente
2. Number attributes use curly braces
3. Boolean "true" can be written with just the property name. "false" should be written with curly braces
4. The "class" attribute is written as "className"
5. in-line styles are provided as objects
