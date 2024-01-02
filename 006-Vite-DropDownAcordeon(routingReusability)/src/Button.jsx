
import "./Button.css";


//Estos props que entran a parte de children tienen la particularidad de que son booleanos sin necesidad de expresarlo en true o false ya
//que el falce vendria en tipo undefined si no se reporta el prop.
function Button({children,
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
        
    });    */

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



export default Button;