import './App.css';
import { useState } from 'react';
import GiphyDisplay from './Components/GiphyDisplay';
import Title from './Components/Title';
import Button from './Components/Button';

function App() {

  //variable with your apiKey
  const apiKey = "rwSjlITUZwzYIvxLmqoUCVrhpxRNpqrY";

  //State to hold Giphy data
  const [giphy, setGiphy] = useState(null);

  //Function to getGiphy
  const getGiphy = async () => {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`
    );
    const data = await response.json();

    setGiphy(data)
  };

  // USE OUR COMPONENTS IN APPs RETURNED JSX
  // We pass the getGiphy function as a prop called giphysearch
  return (
    <div className="App">
      <Title />
      <Button Giphy={getGiphy} />
      <GiphyDisplay giphy={giphy} />
    </div>
  );
}

export default App;
