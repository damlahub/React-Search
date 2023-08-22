import { useState } from 'react';
import searchImages from './api';
import './App.css';
import SearchHeader from './SearchHeader';
import ImagesList from './Components/ImagesList';
function App() {
  const [images, setImages] = useState([]);
  const handleSubmit= async (term)=>{
    const result= await searchImages(term);
    setImages(result);
    }
  return (
    <div className="App">
      <SearchHeader search={handleSubmit} />
      <ImagesList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
