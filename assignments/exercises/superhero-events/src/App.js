import React from 'react';
import heros from './data.json'
import SuperHero from './SuperHero'

const App = () => {
  
  const handleClick = (phrase) => {
    alert(phrase)
  }

  const mappedHeros = heros.data.map((hero) => 
    <SuperHero  
        name={hero.name} 
        image={hero.image}
        handleClick={handleClick}
        catchPhrase={hero.catchPhrase}/>)

    return (
      <div>
        {mappedHeros}
      </div>
    );
}

export default App;
