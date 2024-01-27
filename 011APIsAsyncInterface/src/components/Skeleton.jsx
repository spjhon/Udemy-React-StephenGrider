import classNames from "classnames";

function Skeleton ({times, className}) {

    const outerClassNames = classNames(
        'relative',
        'overflow-hidden',
        'bg-gray-200',
        'rounded',
        'mb-2.5',
        className
    );
    const innerClassNames = classNames(
        'animate-shimmer',
        'absolute',
        'inset-0',
        '-translate-x-full',
        'bg-gradient-to-r',
        'from-gray-200',
        'via-white',
        'to-gray-200'
    );

    //esta constante boxes se refiere a la creacion de un array con la cantidad de elementos times y luego llenarlos con 0 y luego
    //coger esa lista y darle animaciones y estilos, el turco es simple, es coger un div negro del todo y otro con gradiente y coger
    //el del gradiente y moverse por fuera del que esta con el fondo estatico y negro del todo
    const boxes = Array(times).fill(0).map ((_, i) => {
        return <div key={i} className={outerClassNames} >
            <div className={innerClassNames}></div>
        </div>;
    });

    return boxes;

    /* const boxes = [];
    for (let i = 0; i < times; i++) {
        boxes.push(<div key = {i} ></div>)
    };*/
};

export default Skeleton;