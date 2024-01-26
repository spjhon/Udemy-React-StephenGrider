import className from 'classnames';
import {GoSync} from 'react-icons/go'

function Button({
  //este es el mismo componente boton del ejercicio anterior
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  loading,
  ...rest
}) {
  const classes = className(
    rest.className,
    'flex items-center px-3 py-1.5 border h-8',
    {
      'opacity-80': loading,
      'border-blue-500 bg-blue-500 text-white': primary,
      'border-gray-900 bg-gray-900 text-white': secondary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white': outline,
      'text-blue-500': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  );

  return (
    <button {...rest} disabled={loading} className={classes}>
      {loading? <GoSync className='animate-spin'></GoSync>:children}
    </button>
  );
}

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!warning) +
      Number(!!success) +
      Number(!!danger);

    if (count > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, danger can be true'
      );
    }
  },
};

export default Button;

/*import "./Button.css";
/*import PropTypes from "prop-types";
import { HiBeaker, HiBan, HiBell, HiCheck, HiEmojiSad } from "react-icons/hi";

/*Button.propTypes = {

    children: PropTypes.node.isRequired,
    
    //Este checkvariationvalues es un proptype personalizado para que bote los errores que uno quiera.
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {
        //este es un truco en donde Number(true) da como resultado 1
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);

        if (count > 1) {
            return new Error ('Only one of the list can be true');
        }
    },

};

const variationClassMap = {
  primary: ["primary", <HiBeaker key={0}/>],
  secondary: ["secondary", <HiBell key={1}/>],
  success: ["success", <HiCheck key={2}/>],
  warning: ["warning", <HiBan key={3}/>],
  danger: ["danger", <HiEmojiSad key={4}/>],
  rounded: ["rounded", null],
  outline: ["outline", null],
};



function Button({ children, ...rest }) {

    console.log(rest)
   //Entonces el object.key recupera las llaves de un object y luego con reduce se iteractua con el array que queda de keys
   //y compara en cada iteracion haber si es igual al lo que entra en rest o no y si si se agrega a la lista
   //tener en cuenta que se puede utilizar el push por que no es un state.

   
   let buttonIcon = variationClassMap[Object.keys(rest)[0]][1];
    
  const variationClasses = Object.keys(variationClassMap).reduce((classes, prop) => {
    
    if (rest[prop]) {
        
      classes.push(variationClassMap[prop][0]);
      
       
      if (rest.outline) {
        classes.push(`outlineAnd${prop}`);
      }
    }
    
    return classes;
  }, ["buttonBase"]);

 

  const buttonClasses = rest.className ? rest.className + " " + variationClasses.join(" ") : variationClasses.join(" ");
  

  return (
    //ojo the ...rest es tambien para los events handlers que se le pasan o se le pueden pasar al componente
    <button {...rest} className={buttonClasses}>{buttonIcon}{children}</button>
)}

export default Button;*/
