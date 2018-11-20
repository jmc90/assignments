import React from 'react';
import heros from './data.json'
import SuperHero from './SuperHero'

const App = () => {

  const mappedHeros = heros.data.map(hero => 
    <SuperHero  
        name={hero.name} 
        image={hero.image} />)

    return (
      <div>
        {mappedHeros}
      </div>
    );
}

export default App;
