
import { useState } from "react";



const BookCreate = ({onCreate}) => {

    const [title, setTitle] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
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