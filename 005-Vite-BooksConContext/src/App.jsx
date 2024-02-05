import { useEffect, useContext } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import BooksContext from './context/books';
import './App.css';

function App() {
  

  const { fetchBooks, books  } = useContext(BooksContext)

  useEffect ( () => {
    //ojo, este fetch data funciona gracias al useCallback en las funciones de fetch
    const fetchData = async () => {
      const result = await fetchBooks();
      console.log(result); // This will log the fetch
    }

    fetchData()
  }, [fetchBooks]);


  /*----------------------------------------------------*/

  return (

    <div className='app'>

      <header>
        we start here!
        <h1>Reading List</h1>
      </header>
      Libros Creados y guardados en el state de app {books.length}
      <BookList />
      <BookCreate />
      
    </div>

  );
}

export default App;
