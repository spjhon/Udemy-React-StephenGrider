import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

import './App.css';

function App() {
  const [books, setBooks] = useState ([]);

  //para agregar un elemento a mitad de array sin cagarla se utiliza .slice()
  //para removerlos se utiliza un metodo propio de javascript llamado filter
  const CreateBook = (title) => {
    console.log('Need to add book with: ' + title);
    const updatedBooks = [
      ...books,
      {id: Math.round(Math.random()*9999), title: title} //tambien se puede dejar solo title y es equivalente a title: title
    ];
    setBooks(updatedBooks);
    console.log(books);
    console.log(updatedBooks);
  };

  const deleteBookById = (id) => {
    const updatedListBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedListBooks)
  };

  const editBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, title: newTitle};
      }
      return book;
    });
    setBooks(updatedBooks);
  };
  return (
    <div className='app'>
      <header>
        we start here!
        <h1>Reading List</h1>
      </header>
      Libros Creados y guardados en el state de app {books.length}
      <BookList arrayBooks = {books} onDelete = {deleteBookById} onEdit = {editBookById}/>
      <BookCreate onCreate = {CreateBook}/>
      
    </div>
  );
}

export default App;
