
import { useState, useContext } from "react";
import BooksContext from "../context/books";



const BookCreate = () => {

    const [title, setTitle] = useState('');
    const {createBook} = useContext(BooksContext);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        createBook(title);
        setTitle('');
    };
    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    return (
    <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleFormSubmit}>
            <label>Title</label>
                <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
    </div>
    )
};

export default BookCreate;