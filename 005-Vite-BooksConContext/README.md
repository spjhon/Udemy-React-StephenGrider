# Exercise 05-2 grider

## Como funciona la app

### Temas Tratados

- Introduccion al sistema de context

## Tips

Va en tres fases:

1. Crear context.
2. Specify the data that will be shared
3. "Consume" the data in a component

- Se utiliza un provider: Component used to specify what data we want to share.

- Context no es remplazo de Redux, redux es organizacion de info, context es como distribuirla.

## Using Context Diagram

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
