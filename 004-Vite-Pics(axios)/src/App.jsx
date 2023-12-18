import { useState } from 'react';
import './App.css';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import searchImages from './api';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    console.log('Do a search with', term);
    const result = await searchImages(term)
    console.log(result);
    setImages(result);

  };
  return (
    <div>
      <div>Start Here</div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;
