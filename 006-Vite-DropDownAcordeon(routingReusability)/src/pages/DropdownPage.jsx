import { useState } from "react";
import Dropdown from "../components/Dropdown/Dropdown";


function DropdownPage () {
  //el state seleccion es neceario por si algun otro componente necesita saber que paso con lo que el
  //usuario selecciono en el dorpdown
  const [selection, setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option)
    
  }

  //LA FORMA ES QUE SE ESTAN PASANDO ESTROS PROPS ES PARA QUE NO SE ALARGE LA COSA
  const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'}
  ];

  //En este return tenemos que se manda el prop options con el object
  // el prop value que es la seleccion que se haga en el dropdown (en este caso el primer mamonazo es null)
  return (
  <div className="flex">
  <Dropdown value = {selection} onChange = {handleSelection} optionsProp={options} />
  <Dropdown value = {selection} onChange = {handleSelection} optionsProp={options} />

  </div>)
}

export default DropdownPage;