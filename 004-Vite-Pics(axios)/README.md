# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Ejercicio 04 del curso de grider

### Lo que se aprendio en este ejercicio

- Uso basico de herramienta axios
- se hizo un request con una llave y axios para hacer un query a unsplash
- un mejor manejo de como menajear componentes y props
- Dar una mejor idea de como fluye la info en la app
- Se muestra un primer ejemplo de comunicacion parent child
- Se muestra como en lugar de utilizar un boton para leer el input, se utiliza el onChange para que mantenga detectando el cambio y que registrado en un state.
 - Para ello se utiliza un form alrededor del input para que con el enter se ejecute un submit, para eso tambien hay que hacer un prevent e para que no se actualice la pagina.
- Se explica el event obejct (plain javascript)
- Se explica como coger datos del input OJO, NO UTILIZAR EL GETDOCUMENTBYID O ALGO ASI, ya que react pierde el rastro, en su lugar utilizar onChange para mantener el state. OJO, NO UTILIZAR EL getelementbyid.value NO NO NO.
- Una forma de saber si se necesita async y await es console.log una ejecucion de una funcion y ver si se imprime la promesa o el resultado de la promesa, si se imprime la promesa es por que fue muy rapido y toca esperar, osea utilizar async y await