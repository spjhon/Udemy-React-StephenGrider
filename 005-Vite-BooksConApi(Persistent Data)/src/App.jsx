import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

import './App.css';

function App() {
  /*Desde este state es que se maneja toda la rama desde el input hasta como se reparten cada book*/
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
    
    /*Esta es una de las tecnicas utilizadas para actualizar un object sin modificar el state debido a la naturaleza de los objects y los arrays*/
    const updatedBooks = [
      ...books,
      {id: response.data.id, title: newTitle}
      /*{id: Math.round(Math.random()*9999), title: title} //tambien se puede dejar solo title y es equivalente a title: title*/
    ];
    setBooks(updatedBooks);
    console.log(books);
    console.log(updatedBooks);
    console.log('Libro agregado con el id: ' + response.data.id);

  };

  /*----------------------------------------------------*/

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedListBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedListBooks)
  };

/*----------------------------------------------------*/

  const editBookById = async (id, newTitle) => {

    //
    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle});

    console.log(response);


    const updatedBooks = books.map((book) => {
      if (book.id === id){
        //EL RESPONSE.DATA se utiliza ya que si se utiliza el metodo del ejercicio anterior, se puede generar un bug
        //entonces es mejor tener la info mas actualizada que sea posible
        return {...book, ...response.data}; /*aqui se aplica una particularidad de los objects y es que las keys no pueden repetir nombres*/
      }
      return book;
    });
    setBooks(updatedBooks);
  };

  /*----------------------------------------------------*/

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
