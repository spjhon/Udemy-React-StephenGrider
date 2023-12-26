import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

import './App.css';

function App() {
  const [books, setBooks] = useState ([]);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data)
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  //para agregar un elemento a mitad de array sin cagarla se utiliza .slice()
  //para removerlos se utiliza un metodo propio de javascript llamado filter
  const CreateBook = async (title) => {

    console.log('Need to add book with: ' + title);

    const response = await axios.post('http://localhost:3001/books', {
      title
    });
    
    let newTitle = title;
    
    const updatedBooks = [
      ...books,
      {id: response.data.id, title: newTitle} //tambien se puede dejar solo title y es equivalente a title: title, tambien se puede dejar solo el response.data ya que ahi esta este mismo objeto
    ];
    setBooks(updatedBooks);
    console.log(updatedBooks);
    console.log('Libro agregado con el id: ' + response.data.id);
  };

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedListBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedListBooks)
  };

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, ...response.data};
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
