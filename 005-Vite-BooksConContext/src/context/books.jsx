import {createContext, useState, useCallback} from 'react';
import axios from 'axios';

const BooksContext = createContext();

function Provider({children}){
  
  /*Desde este state es que se maneja toda la rama desde el input hasta como se reparten cada book*/
  const [books, setBooks] = useState ([]);

  //el use callback es para que el useEffect guarde la memoria de la funcion y cada vez que se llame el useEffect no cree una funcion nueva
  //y crea que se esta cambiando el dato y cree una nueva referencia de la funcion en la memoria por ello el useCallback
  //que pasa si no utilizo useCallback?: 
  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');
    setBooks(response.data);
    return response.data /* Esta es una forma de transmitir el dato resultante a donde se llame la funcion utilizando en este caso useCallback*/
  }, []);

  

///////////////////////////////////////////////////////////////////////////////


  //para agregar un elemento a mitad de array sin cagarla se utiliza .slice()
  //para removerlos se utiliza un metodo propio de javascript llamado filter
  const createBook = async (title) => {
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

/////////////////////////////////////////////////////////////////////////////////

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`);

    const updatedListBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedListBooks)
  };

///////////////////////////////////////////////////////////////////////////////

  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {title: newTitle,});

    console.log(response);

    const updatedBooks = books.map((book) => {
      if (book.id === id){
        return {...book, ...response.data};
      }
      return book;
    });
    setBooks(updatedBooks);
  };

///////////////////////////////////////////////////////////////////////////////

  const valueToShare = {
    books: books,
    deleteBookById: deleteBookById,
    editBookById: editBookById,
    createBook: createBook,
    fetchBooks: fetchBooks,
  };


    return <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
}

export {Provider};
export default BooksContext;