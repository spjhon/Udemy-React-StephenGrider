

//Estos props que entran a parte de children tienen la particularidad de que son booleanos sin necesidad de expresarlo en true o false ya
//que el falce vendria en tipo undefined si no se reporta el prop.
/*function Button({children,
primary,
secondary,
success,
warning,
danger,
outline,
rounded,
...rest
}){
    Button.propTypes = {
    
        checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    
            const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);
    
            if (count > 1) {
                return new Error ('Only one of the list can be true');
            }
        },
    
    };

   /* const classes = className(rest.className, 'flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-gray-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-400 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'rounded-full': rounded,
        'bg-white': outline,

        'text-blue-500': outline && primary,
        'text-gray-900': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-400': outline && warning,
        'text-red-500': outline && danger,
        
    });    

    let classes = "buttonBase"

    if (primary) {
        classes = classes + " " + "primary"
    }
    
    if (secondary){
        classes = classes + " " + "secondary"
    }
    
    if (success){
        classes = classes + " " + "success"
    }
    
    if (warning){
        classes = classes + " " + "warning"
    }
    
    if (danger){
        classes = classes + " " + "danger"
    }
    
    if (rounded){
        classes = classes + " " + "rounded"
    }
    
    if (outline){
        classes = classes + " " + "outline"
    }

    if (outline && primary) {
        classes = classes + " " + "outlineAndprimary"
    }

    if (outline && secondary) {
        classes = classes + " " + "outlineAndsecondary"
    }

    if (outline && success) {
        classes = classes + " " + "outlineAndsuccess"
    }

    if (outline && warning) {
        classes = classes + " " + "outlineAndwarning"
    }

    if (outline && danger) {
        classes = classes + " " + "outlineAnddanger"
    }

    return <button {...rest} className={rest.className + " " + classes}>{children}</button>
}



export default Button;*/


import "./Button.css";
import PropTypes from "react";

Button.propTypes = {

    children: PropTypes.any.isRequired,
    
    checkVariationValue: ({primary, secondary, success, warning, danger}) => {

        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!success) + Number(!!danger);

        if (count > 1) {
            return new Error ('Only one of the list can be true');
        }
    },

};

const variationClassMap = {
  primary: "primary",
  secondary: "secondary",
  success: "success",
  warning: "warning",
  danger: "danger",
  rounded: "rounded",
  outline: "outline",
};

function Button({ children, ...rest }) {

    console.log(rest)
   //Entonces el object.key recupera las llaves de un object y luego con reduce se iteractua con el array que queda de keys
   //y compara en cada iteracion haber si es igual al lo que entra en rest o no y si si se agrega a la lista
   //tener en cuenta que se puede utilizar el push por que no es un state.
  const variationClasses = Object.keys(variationClassMap).reduce((classes, prop) => {
    
    if (rest[prop]) {
      classes.push(variationClassMap[prop]);
      if (rest.outline) {
        classes.push(`outlineAnd${prop}`);
      }
    }
    return classes;
  }, ["buttonBase"]);

  

  const buttonClasses = rest.className ? rest.className + " " + variationClasses.join(" ") : variationClasses.join(" ");

  return <button {...rest} className={buttonClasses}>{children}</button>;
}

export default Button;