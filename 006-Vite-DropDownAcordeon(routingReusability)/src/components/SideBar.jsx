import Link from "./Link/Link";

// ALGORITMO
// - El componente SideBar es una barra lateral que contiene enlaces generados dinámicamente a partir de la lista 'links'.
// - Cada enlace se renderiza utilizando el componente Link, que actúa como un enrutador interno.
// - La lista 'links' contiene objetos con 'label' para el texto del enlace y 'path' para la dirección a la que se navegará.
// - Los enlaces se generan mediante el método 'map' y se asigna a cada enlace una clave única y una clase adicional.
// - La clase 'activeClassName' se utiliza para resaltar visualmente el enlace correspondiente al 'currentPath'.
// - El componente devuelve un contenedor <div> con enlaces rendereados y estilos de posición fija ('sticky').
function SideBar() {
    // Lista de enlaces con etiquetas y rutas correspondientes.
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Accordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'},
        {label: 'Table', path: '/table'},
        {label: 'Counter', path: '/counter'},
    ];

    // Mapeo de la lista de enlaces para renderizar cada enlace utilizando el componente Link.
    const renderedLinks = links.map((link) => {
        // La clase 'activeClassName' se utiliza para resaltar visualmente el enlace correspondiente al 'currentPath'.
        return <Link activeClassName='font-bold border-l-4 border-blue-500 pl-2' key={link.label} to={link.path} className={"mb-3"}>{link.label}</Link>;
    });

    // El componente devuelve un contenedor <div> con enlaces rendereados y estilos de posición fija ('sticky').
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default SideBar;
