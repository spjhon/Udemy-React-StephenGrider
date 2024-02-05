import { useState } from "react";
const BookEdit = ({objectBook, onSubmit}) => {
    
    const [title, setTitle] = useState(objectBook.title);

    const handleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New title is: ' + title);
        //una observacion: se esta pasando dos argumentos que no son necesarios para el showEdid pero si para la edicion
        //asi que en la funcion de arriba se utiliza estos parametros y se ejecuta tambien el showEdit = false
        //Collapsing two handlers into one
        onSubmit(objectBook.id, title);
    };

    return (
    <div>BookEdit
        <form onSubmit={handleSubmit}className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}></input>
            <button className="button is-primary">Save</button>
        </form>
    </div>)
};

export default BookEdit;