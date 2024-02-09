# Routing, Navigation, Reusability

## Como funciona la App

En esta app hay varios temas tratados en una sola, se trata de una pagina principal en donde por medio de un side bar se comunica a otras paginas gracias al uso de context y hooks, en cada pagina se explica los componentes mas comunes dentro de una app y un ejemplo muy basico de como son creados estos componentes, desde botones hasta una tabla completa y sorteable.

### Temas Tratados

- Paths
- Navigation Context
- Routing
- Internal Link
- Hook useNavigation

## Tips Reusability (buttons, accordeon, dropdown, modal, table)

### Button

- How to use props to configure buttons
- The children Prop: cuando se agarra el props object, children entra como una llave en conjunto con el resto de atributos, por eso se necesita el ...rest para cuando se destructura el children.
- Tener en cuenta en el componente del boton otros props que puedan venir de quien este reutilizando el boton dentro del a app

### Accordeon

-

### Routing en pasos

Para hacerlo desde 0 sin utilizar librerias

- Se tiene en cuenta los paths a partir de "/"
- Se utiliza el window.location.pathname
- Entonces se utiliza un componente llamado Link para navegar dentro de la app, si esta por fuera se utiliza los anchor normales.
- En cuanto a la navegacion existen dos tipos de navegacion, la navegacion del usuario y la navegacion programatica.
- Ahora la funcion dentro del archivo navigation.jsx hace dos cosas:

1. Call pushState to update address bar
2. Update "currentPath" sisnce pushState doent trigger a popstate event.

- Se crea tambien un archivo llamado Link, esta funcion (componente) es la que se va a usar en los anchor para la navegacion interna dentro de la app.

- Diagrama de como funciona routing [Link](../gridder%20diapositivas/046%20how%20navigation%20works.jpeg)
