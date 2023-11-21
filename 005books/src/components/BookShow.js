
import { useState } from "react";
import BookEdit from './BookEdit';


const BookShow = ({book, onDelete2, onEdit2}) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete2(book.id); 
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit =(id, newTitle) => {
        setShowEdit(false);
        onEdit2(id, newTitle);
    };

    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit onSubmit = {handleSubmit} objectBook = {book}/>;
    };

    return (
    <div className="book-show">
        BookShow 
        <img alt='books' src={`https://picsum.photos/seed/${book.id}/300/200`} />
        <div>{content}</div>
        <div className="actions">
            <button className="edit" onClick={handleEditClick}>Edit</button>
            <button className="delete" onClick={handleDeleteClick}>Delete</button>
        </div>
    </div>)
};

export default BookShow;