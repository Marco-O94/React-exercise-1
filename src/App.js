import AnimalShow from './components/AnimalShow';
import { useState } from 'react';
import './assets/styles/App.css';

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]; // Math.floor rounds down to the nearest whole number because Math.random() returns a number between 0 and 1
}

console.log(getRandomAnimal());

function App() {
    /* 
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 4);
        
    } */

    const [animals, setAnimals] = useState([]); // useState is a hook that allows us to use state in a functional component

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()]); // ...animals is a spread operator that takes the current value of animals and spreads it out into a new array
    }


    return (
        <div className="app">
        <button onClick={handleClick}>Add Animal</button>
        <p>Number of animals: {animals.length}</p>
        <div className="animals-list">
        {animals.map((animal, index) => <AnimalShow type={animal} key={index} />)}
        </div>
        </div>
    );
}

export default App;