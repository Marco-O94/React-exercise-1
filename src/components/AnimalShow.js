import '../assets/styles/AnimalShow.css';
import { useState } from 'react';
import bird from '../assets/images/bird.svg';
import cat from '../assets/images/cat.svg';
import dog from '../assets/images/dog.svg';
import cow from '../assets/images/cow.svg';
import gator from '../assets/images/gator.svg';
import heart from '../assets/images/heart.svg';
import horse from '../assets/images/horse.svg';


const svgMap = {
    bird, // bird: bird
    cat, // cat: cat
    dog, // dog: dog
    cow, // cow: cow
    gator, // gator: gator
    heart, // heart: heart
    horse // horse: horse
}

function AnimalShow({ type }) {
    const [clicks, setClicks] = useState(0);
    const handleClick = () => {
        clicks === 10 ? setClicks(0) : setClicks(clicks + 1); 
    };
    return (
        <div className="animal-show" onClick={handleClick}>
            
        <img className="animal" alt="animal" src={svgMap[type]} />
        <img className="heart" alt="heart" src={heart} style={{width: 10 + 10 * clicks + 'px'}} /></div>
    )
}

export default AnimalShow;