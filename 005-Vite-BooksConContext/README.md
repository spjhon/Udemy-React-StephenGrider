# Exercise 05-2 grider

## Como funciona la app

Es el ejercicio anterior acerca de crear tarjetas con info que se crea en un formuilario y se agrega a un state y se reparte por los componentes, esta vez utilizando el sistema de context en donde hay un archivo de contex en donde se alamcena el state y se tienen las funciones para modificar este state y se pasa a travez del sistema de context para los componentes que lo requiera y al mismo tiempo se explica el uso de useCallback

### Temas Tratados

- Introduccion al sistema de context
- useCallback y su uso dentro de useEffect para hacer fetching

## Tips

Va en tres fases:

1. Crear context.
2. Specify the data that will be shared.
3. "Consume" the data in a component.

- Se utiliza un provider: Component used to specify what data we want to share.
- Context no es remplazo de Redux, redux es organizacion de info, context es como distribuirla.
- Gracias a context se puede compartir no solo un state sino funciones y otras cosas que se transmite en forma de object a travez del provider.

## Context paso a paso

give me an example of each of this steps to create a context in react:

1. Create the context
2. Specify the data that will be shared
3. Consume the data in a component

Certainly! In React, creating a context involves a few steps. Let's go through each step with an example:

### Step 1: Create the Context

```jsx
// MyContext.js
import React from 'react';

const MyContext = React.createContext();

export default MyContext;
```

### Step 2: Specify the Data that will be Shared

In this step, you'll typically create a provider component to wrap the part of your application where you want to share the data.

```jsx
// MyContextProvider.js
import React, { useState } from 'react';
import MyContext from './MyContext';

const MyContextProvider = ({ children }) => {
  const [sharedData, setSharedData] = useState('Default Data');

  return (
    <MyContext.Provider value={{ sharedData, setSharedData }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyContextProvider;
```

### Step 3: Consume the Data in a Component

Now, you can consume the data in any component that is a descendant of the provider.

```jsx
// MyComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext';

const MyComponent = () => {
  const { sharedData, setSharedData } = useContext(MyContext);

  return (
    <div>
      <p>Shared Data: {sharedData}</p>
      <button onClick={() => setSharedData('New Data')}>Update Data</button>
    </div>
  );
};

export default MyComponent;
```

Finally, to use these components in your main application:

```jsx
// App.js
import React from 'react';
import MyContextProvider from './MyContextProvider';
import MyComponent from './MyComponent';

const App = () => {
  return (
    <MyContextProvider>
      <div>
        <h1>My React App</h1>
        <MyComponent />
      </div>
    </MyContextProvider>
  );
};

export default App;
```

In this example, `MyContext` is created in `MyContext.js`, the data is managed and provided by `MyContextProvider.js`, and `MyComponent.js` consumes and displays the shared data. The `<MyComponent />` is wrapped with the `<MyContextProvider />` in `App.js` to make the context available to that part of the component tree.

***

## Cuando Utilizar useContext vs useState

### Cuando utilizar useState

- **Form inputs:** If your component has form inputs, use the useState Hook to manage their state. This allows you to keep track of user input and update the UI accordingly.

- **Conditional rendering:** If you have components that need to change their state based on user actions or some other condition, use the useState Hook to manage the component’s state and re-render the component when the state changes.

- **UI components:** If UI components need to change their state based on user interaction, such as dropdown menus, tabs, or accordions, use the useState Hook to manage the component’s state and update the UI accordingly.

- **Toggling:** If you have components that need to toggle between two or more states, such as a modal or a tooltip, use the useState hook to manage the component’s state and toggle between the different states.

### Cuando utilizar useContext

- **Global data:** If you have data that needs to be accessed by multiple components throughout your application, such as the current user object, theme, or localization settings, you can use the React Context API to share this data across your components.

- **Avoiding prop drilling:** If you pass props down multiple levels of the component tree, especially when the intermediate components do not directly use the props, it might be a good idea to use React Context API to avoid prop drilling and simplify your component code.

- **Large-scale applications:** If you’re building a large-scale application with many components and complex data flows, React Context API can help you manage your state and data more efficiently and make your code more maintainable.

- **Cross-cutting concerns:** If you have cross-cutting concerns in your application, such as error handling or authentication, that need to be applied across multiple components, using React Context API can make managing these concerns easier and keeps your code organized.
