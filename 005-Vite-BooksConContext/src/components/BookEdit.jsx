import { useState, useContext } from "react";
import BooksContext from "../context/books";

const BookEdit = ({objectBook, onSubmit}) => {
    
    const [title, setTitle] = useState(objectBook.title);
    const {editBookById} = useContext(BooksContext);

    const handleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New title is: ' + title);
        onSubmit();
        editBookById(objectBook.id, title);
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