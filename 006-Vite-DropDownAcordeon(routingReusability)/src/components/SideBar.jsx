import Link from "./Link/Link";



function SideBar () {
    const links = [
        {label: 'Dropdown', path: '/'},
        {label: 'Acordion', path: '/accordion'},
        {label: 'Buttons', path: '/buttons'},
        {label: 'Modal', path: '/modal'},
        {label: 'Table', path: '/table'},
    ]

    const renderedLinks = links.map((link) => {
        return <Link activeClassName = 'font-bold border-l-4 border-blue-500 pl-2' key={link.label} to={link.path} className={"mb-3"}>{link.label} </Link>
    });
    return (
        <div className="sticky top-0 overflow-y-scroll flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}

export default SideBar;