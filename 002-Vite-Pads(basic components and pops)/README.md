# Grider React - Execise 2

## Temas tratados

- Como reutilizar un componente y que este componente se adapte a la forma que uno desea y estos deseos se comunican a travez del sistema de props.
- Como colocar styles basicos al menos los que van in-line
- Valores predeterminados en los props en caso de que no llegue ningun prop.
- Utilizacion de una libreria para el estilizado llamada Bulma
- Se explica la jerarquia de los componente y que es un componente padre y que es un componente children
- Introduccion a destructuring
- Se explica como el sistema de imports y exports es escencial a la hora de modularizar los componentes

### Tips

- Si se utiliza la palabra props, se recibe directamente todo el props que se pasa desde el componente padre y se lee por ejemplo props.title
- Se puede utilizar destructuring para los props  `const {title, handle} = props`
- Undefined no muestra nada en la pantalla si se manda a renderizar
- Las imagenes png de menos de 9.7kb se mete de tipo in-line para ahorrar transmision de datos si es mas grande se trabaja ya como un archivo separado
- Undefined no muestra nada en la pantalla si se manda a renderizar
- Tip acerca de imagenes, las imagenes que son de menos de 5kb son convertidas a codigo e incluidas en el jsx de react.

- De acuerdo a como exporte el componente es como se importa en otro lado:

|  Syntax |            Export statement           |             Import statement            |
|:-------:|:-------------------------------------:|:---------------------------------------:|
| Default | `export default function Button() {}` | `import Button from './Button.js';`     |
| Named   | `export function Button() {}`         | `import { Button } from './Button.js';` |

- How React render the root in the html
![Link](../gridder%20diapositivas/002%20del%20js%20al%20html.jpg)
