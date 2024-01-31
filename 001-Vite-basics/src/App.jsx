//4) create a component
function App(){

  let message = 'Bye There!';
  let random = Math.random();
  let types = 'number';
  let mini = 5;

  if (random > 0.5){
      message = "Hello there!";
  }

  //Ejemplo basico de como renderizar bajo una condicional, aqui se le da primero una condicional en donde se define
  //lo que contenga la variable message.
  return <div>
      <h1>{message}, {random}</h1>
      <input style={{border: '3px solid red'}} type={types} min={mini} autoFocus={true} spellCheck/>
      
      </div>
}

export default App;
