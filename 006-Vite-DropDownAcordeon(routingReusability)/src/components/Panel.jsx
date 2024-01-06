

function Panel({children, ...rest}) {
    

    return <div {...rest} className="empty">{children} </div>
}

export default Panel;