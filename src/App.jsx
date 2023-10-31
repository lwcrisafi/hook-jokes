import { useState, useEffect } from 'react'

import './App.css'

function App() {
const [joke, setJoke] = useState("");
const [type, setType] = useState("");
const [secondPart, setSecondPart] = useState("");

const fetchJoke = async () => {
  try {
    const response = await fetch("https://v2.jokeapi.dev/joke/Any");
    const data = await response.json();

    setJoke(data.joke);
    setType(data.type);

    if (data.type === "twopart") {
      setTimeout(() => {
        setSecondPart(data.delivery);
      }, 3000);
    }
  } catch (error) {
    console.error("Error fetching joke:", error);
  }
};

useEffect(() => {
  fetchJoke();
}, []);

const handleNewJokeClick = () => {
  setJoke("");
  setType("");
  setSecondPart("");
  fetchJoke();
};

return (
  <div className="App">
    <h1>Joke App</h1>
    <div>
      <p>{joke}</p>
      {type === "twopart" && secondPart && <p>{secondPart}</p>}
    </div>
    <button onClick={handleNewJokeClick}>Get New Joke</button>
  </div>
);








}

export default App
