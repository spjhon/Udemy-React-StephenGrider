import BookShow from "./BookShow";

const BookList = ({arrayBooks, onDelete, onEdit}) => {
    const renderedBooks = arrayBooks.map((book) => {
        return <BookShow onEdit2 = {onEdit} onDelete2 = {onDelete} key={book.id} book = {book}/>
    });
    return (
    <div className="book-list">
        {renderedBooks}
    </div>)
};

export default BookList;