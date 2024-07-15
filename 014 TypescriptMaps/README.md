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

## Que hace la app

Lo que hace es que a travez de un input se utiliza el termino para hacer una busqueda en google maps y que devuelva las coordenadas y que estas coordenadas se ingresen al mapa para que el mapa muestre la ubicacion.

en el componente APP esta el state que se maneja en los dos componentes hijos

## Temas Tratados

- Typescript
- Apis
- Algo de useEffect
- Estructuracion de typescript en un projecto
- Typescript cuando se hace fetch.

## Tips

- Se utiliza un solo archivo independiente ts en donde se exportan un type que es comun a todos los componentes de la app, ojo con la importacion de los types en otros componentes, se hace con la diferencia de agregar type en le import
- En la app se utilizan generics, interfaces, exportaciones de interfaces y mucha info esta en forma de comentarios directamente en el codigo.
