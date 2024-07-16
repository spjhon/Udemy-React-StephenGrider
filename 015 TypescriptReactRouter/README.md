# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Como funciona la app

Es una app que enseña como manejar react router con el cargado de diferentes componentes en un layout predefinido, ademas de consultar por medio del input de busqueda en la base de datos de NPM.

- Esta app utiliza dos apis de npm registry de github, un a para obtener detalles de un paquete en especifico y otra para hacer una busqueda.

## Temas Tratados

- React Router, LA CUAL es una LIBRERIA y no como el en ejercicio 006 de este repositorio donde se hace todo a forma manual
- Typescript
- Fetching data with react router

## Tips

- En cuanto a la estructuracion, se tiene un root layout que es en donde va a estar todo y en la carpeta pages van a estar los componentes que simulan paginas.
- El setup de gridder va asi:
  - El pimer paso es hacer las pages components con su respectiva carpeta
  - En este caso el header lo puso a parte como un componente del root
  - Un root layout que llamo simplemente root y que lo metio en pages en donde se utiliza Outlet de react-router, el outlet lo que hace es que es el que se va a transormar en cada page que se transmita al sistema de react-router y asi ser renderizado
  - Luego en app se colocan los provider ya que el sistmea de react-dom utiliza el sistema de context para hacer la rutas, esta es la configuracion principal donde se definen las rutas.
  - En header se adiciona el link para poder volver al homepage desde cualquier otro lado de la app
  - Se explica las rutas dinamicas a travez el useNavigator y el Form de react dom para hacer re-direccionamientos programaticos
  - Resulta que con react-router puede hacer fetching a travez de funciones en achivos independientes llamados loader pero lo mas recomendable en un projecto que es completamente client side con vite es utilizar zustand para el state management, react-router para el enrutamiento y react-query para el fetching
  - 