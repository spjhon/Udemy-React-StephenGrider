import BookShow from "./BookShow";
import useBooksContext from "../hooks/use-books-context"; //esto es un custom hook

const BookList = () => {


    const {books} = useBooksContext();

    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book = {book}/>
    });


    return (
    <div className="book-list">BookList
        {renderedBooks}
    </div>)
};

export default BookList;