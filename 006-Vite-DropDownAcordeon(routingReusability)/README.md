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

- Con este Ejercico es que se explica como aplicarle state a un componente, los pasos para saber que tipo de state necesita
- Los estados del acordeon son simples, solo esta expandido o no y en donde debe de estar expandido
- Se aplica logica de conditional rendering
- Se explica un bug al momento de actualizar un state y el fix es aplicar una forma funcional de actualizacion del state

### Dropdown

- El dropdown es un componente que puede llegar a ser bastante complejo
- Se utiliza el hook useRef para hacer una referencia al div seleccionado y saber si se esta dando click fuera del dorpdown
- When a piece of information is used for rendering, keep it in state. When a piece of information is only needed by event handlers and changing it doesn’t require a re-render, using a ref may be more efficient.
- Como las faces de captura y bubble afectan ya que react es mas rapido que estas faces y se pueden llegar a presentar problemas.

- **Cuando Utilizar useRef?:**

- Typically, you will use a ref when your component needs to “step outside” React and communicate with external APIs—often a browser API that won’t impact the appearance of the component.
- React doesn’t care what you do with the ref or its contents.
- The most common use case for a ref is to access a DOM element.

### Modal

- El modal el secillo pero hay dos trucos que se deben saber que es el como controlar el overflow y como utilizar portals debido a que el componente...

### Routing en pasos

Para hacer routing y navegacion en react se utiliza el sitema de context, con el se crea un state para saber en donde se esta posicionado, un hook llamado useNavigation que permite conectarse al context y modificarlo, entonces por medio de un SideBar que mapea los links, estos links son un componente que que administra las rutas y se invoca el context, tambien existe un route que se encarga de renderizar solo la ruta que se encuentra en el navegador, mas informacion en los ALGORITMOS de cada componente

Para hacerlo desde 0 sin utilizar librerias

- Se tiene en cuenta los paths a partir de "/"
- Se utiliza el window.location.pathname
- Entonces se utiliza un componente llamado Link para navegar dentro de la app, si esta por fuera se utiliza los anchor normales.
- En cuanto a la navegacion existen dos tipos de navegacion, la navegacion del usuario y la navegacion programatica.
- Ahora la funcion dentro del archivo navigation.jsx hace dos cosas:

1. Call pushState to update address bar
2. Update "currentPath" sisnce pushState doent trigger a popstate event.

- Se crea tambien un archivo llamado Link, esta funcion (componente) es la que se va a usar en los anchor para la navegacion interna dentro de la app.

- Tener en cuenta la navegacion programatica que es por ejemplo cuando se redirecciona despues de alguna accion o despues de un intervalo de tiempo

- Diagrama de como funciona routing
![Link](../gridder%20diapositivas/046%20how%20navigation%20works.jpeg)
