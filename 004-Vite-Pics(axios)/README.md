# Exercise 04 Pics (axios)

## Como funciona la app

Es un buscador de terminos en la web de unsplash con el fin de mostrar como los componentes se comunican entre si, en el componente searchBar se toma el termino del textbox y se envia en una funcion que ejecuta un fech y de ahi manda la info de bajada a los componentes que la muestra.

## Temas tratados

- fetching con axios
- inputs patterns
- event object management
- props passing

### Tips

- Uso basico de herramienta axios
- se hizo un request con una llave y axios para hacer un query a unsplash
- un mejor manejo de como menajear componentes y props
- Dar una mejor idea de como fluye la info en la app
- Se muestra un primer ejemplo de comunicacion parent child
- Se muestra como en lugar de utilizar un boton para leer el input, se utiliza el onChange para que mantenga detectando el cambio y que registrado en un state.
- Para ello se utiliza un form alrededor del input para que con el enter se ejecute un submit, para eso tambien hay que hacer un prevent e para que no se actualice la pagina.
- Se explica el event object (plain javascript)
- Se explica como coger datos del input OJO, NO UTILIZAR EL GETDOCUMENTBYID O ALGO ASI, ya que react pierde el rastro, en su lugar utilizar onChange para mantener el state. OJO, NO UTILIZAR EL getelementbyid.value NO NO NO. A estos inputs se les llama controlled inputs.
- Una forma de saber si se necesita async y await es console.log una ejecucion de una funcion y ver si se imprime la promesa o el resultado de la promesa, si se imprime la promesa es por que fue muy rapido y toca esperar, osea utilizar async y await
- Se explica como manejar las listas y las key y de donde sacarlas

#### Requerimiento para las llaves cuando se hace map

![Requirements for keys](../gridder%20diapositivas/019%20requerimiento%20para%20las%20keys.jpg)
