import logo from '../logo.svg'
import { useMutation, useQuery } from '@apollo/client';
import { GET_HERO } from '../gql/Query';
import { SAVE_HERO } from '../gql/Mutation';
import { responsePathAsArray } from 'graphql';
import { useState, useEffect } from 'react';

function Index () {
    const [queryTriggered, setQueryTriggered] = useState(false);
    const [tempVal, setTempVal] = useState('');
    const [inputVal, setInputVal] = useState('Iron');
    const [isSingleView, setIsSingleView] = useState(false);
    const [hero, setHero] = useState({});
    var heroes = [];
    const { loading, error, data } = useQuery(GET_HERO, {
      variables: { name: inputVal }
    });
    heroes = data?.getHero.results
    console.log("data", data?.getHero.results);
  
    useEffect(() => {
      if (queryTriggered) {
        
      }
    }, [loading, error, data, queryTriggered])
  
    const [SaveHero] = useMutation(SAVE_HERO)
  
    const handleInputChange = (e) => {
      setTempVal(e.target.value)
    }
  
    const searchForHero = () => {
        setInputVal(tempVal)
      setQueryTriggered(true)
    }
  
    const viewSuperHeroDetails = (val) => {
      setIsSingleView(true);
      setHero(val)
    }
  
    const saveHeroToDB = () => {
      SaveHero({
        variables: {
          heroName: hero.name,
          intelligence: hero.powerstats.intelligence,
          strength: hero.powerstats.strength,
          speed: hero.powerstats.speed,
          durability: hero.powerstats.durability,
          power: hero.powerstats.power,
          combat: hero.powerstats.combat,
          image: hero.image.url
        }
      })
      alert("Data saved to Database")
      setIsSingleView(false)
    }
    return (
      <div className="App">
        <header className="App-header">
          {loading ? (
            <img src= {logo} className="App-logo" />
          ) : error ? (
            <p>Error: {error} </p>
          ) : (
            <div>
              {
                !isSingleView ? 
                <div>
                  <input id="hero" onChange={(e) => handleInputChange(e)}></input>
                  <button id="searchBtn" onClick={() => searchForHero()}>Search</button>
                  {
                    heroes.map((hero) => {
                      return (
                        <div key={hero.name}>
                            <img src = {hero.image.url} className="hero-image"></img>
                            <p>{hero.name}</p>
                            <button onClick={() => viewSuperHeroDetails(hero)}>View details</button>
                        </div>
                      )
                    })
                  }
                </div> : 
                <div>
                    <button onClick={() => setIsSingleView(false)}>Go back</button>
                    <div key={hero.name}>
                      <img src = {hero.image.url} className="hero-image"></img>
                      <p>{hero.name}</p>
                      <h4>Power Stat details</h4>
                      <ul>
                        <li>Intelligence: { hero.powerstats.intelligence }</li>
                        <li>Strength: { hero.powerstats.strength }</li>
                        <li>Speed: { hero.powerstats.speed }</li>
                        <li>Durability: { hero.powerstats.durability }</li>
                        <li>Power: { hero.powerstats.power }</li>
                        <li>Combat: { hero.powerstats.combat }</li>
                      </ul>
                      <button onClick={() => saveHeroToDB()}>Save to Database</button>
                    </div>
                </div>
              }
              
              
            </div>
          )
        }
        </header>
      </div>
    );
}

export default Index;