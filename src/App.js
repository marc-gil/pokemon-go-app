import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import './App.css';
import Appraisal from "./appraisal/Appraisal"
import DataGrid from './data-grid/DataGrid';
import Dropdown from './dropdown/Dropdown';
import Rank from './rank/Rank';
import SendForm from './send-form/SendForm';

function App() {
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [calculatedSpecies, setCalculatedSpecies] = useState([]);
  const [cp, setCp] = useState(null);
  const [attackIv, setAttackIv] = useState(0);
  const [defenseIv, setDefenseIv] = useState(0);
  const [healthIv, setHealthIv] = useState(0);
  const [ranks, setRanks] = useState([{
    greatLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false},
    ultraLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false},
    masterLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false}
  }]);
  const [calculated, setCalculated] = useState(true);

  const { handleSubmit } = useForm();
  const onSubmit = updateCalculatedSpecies;

  useEffect(() => {
    fetch('https://pkmn-go-api.herokuapp.com/api/pokemon-species')
      .then(response => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          throw Error(response.statusText);
        }
      })
      .then(data => data.map(entry => {
        return {value: entry.name, label: entry.name, image: entry.image, pokedexNumber: entry.pokedexNumber, evolution_chain: entry.evolutionChain}
      }))
      .then(list => setPokemonSpecies(list))
      .catch(error => console.log(error) );
  }, [] );

  async function updateCalculatedSpecies() {
    console.log("Selected specie " + selectedSpecie);
    console.log(attackIv + "/" + defenseIv + "/" + healthIv)
    const evolutionChain = selectedSpecie.evolution_chain;
    const {step, path} = evolutionChain.evolutions.find( item => item.pokedexNumber === selectedSpecie.pokedexNumber );
    const evolutionsToCalculate = evolutionChain.evolutions.filter( (evolution) => evolution.step >= step && (path === 0 ? evolution.path >= 0 : evolution.path === path ) )
                                                           .map( (item) => item.pokedexNumber );
    const ranksToShow = [];
    let level = null;
    if ( cp != null ) {
      const response = await fetch('https://pkmn-go-api.herokuapp.com/api/pokemons?pokedexNumber=' + selectedSpecie.pokedexNumber + '&attackIv=' + attackIv + '&defenseIv=' + defenseIv + '&healthIv=' + healthIv + '&cp=' + cp)
      if ( response.status >= 200 && response.status <= 299 ) {
        const data = await response.json(); 
        level = data.level;
      }
    }
    debugger;
    for (const pokedexNumber of evolutionsToCalculate) {
      const response = await fetch('https://pkmn-go-api.herokuapp.com/api/pokemon-species/' + pokedexNumber + '/rank?' + 
          (cp != null ? ('level=' + level) : '') + '&attackIv=' + attackIv + '&defenseIv=' + defenseIv + '&healthIv=' + healthIv + '&levelCap=50');
      if ( response.status >= 200 && response.status <= 299 ) {
        setCalculated(true);
        const data = await response.json();
        ranksToShow.push({
          greatLeague: data.greatLeagueRank, 
          ultraLeague: data.ultraLeagueRank, 
          masterLeague: data.masterLeagueRank});
      } else {
        setCalculated(false);
        ranksToShow.push({
          greatLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false},
          ultraLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false},
          masterLeague: {rank: 0, level: 0, cp: 0, isCpCapReached: false}
        });
      }
    }
    setRanks(ranksToShow);
    setCalculatedSpecies(pokemonSpecies.filter( (item) => evolutionsToCalculate.includes(item.pokedexNumber) ) ); 
  }

  return (
    <div Style={"max-width: 700px; box-sizing: border-box;margin: 0 auto 20px;"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Dropdown 
          title="Pokemon" 
          isListOpen={false} 
          placeHolder="Seleccionar Pokemon" 
          list={pokemonSpecies} 
          onSelectItem={setSelectedSpecie} 
          required/>
        <DataGrid 
          value={cp != null ? cp : ""} 
          onChange={setCp} 
          inputRef="cp"/>
        <Appraisal 
          attack={attackIv} 
          defense={defenseIv} 
          health={healthIv} 
          onChangeAttack={setAttackIv} 
          onChangeDefense={setDefenseIv} 
          onChangeHealth={setHealthIv}
        />
        {!calculated && (<div className="message alert">A Pokemon with those stats couldn't be found.</div>)}
        <SendForm onSubmit={updateCalculatedSpecies}/>
      </form>
      {calculatedSpecies.map( (item, index) => {
        debugger;
        return <Rank image={item !== null ? item.image : ""}
            key={item.pokedexNumber}
            greatLeague={ index < ranks.length ? ranks[index].greatLeague : ranks[0].greatLeague }
            ultraLeague={ index < ranks.length ? ranks[index].ultraLeague : ranks[0].ultraLeague} 
            masterLeague={ index < ranks.length ? ranks[index].masterLeague : ranks[0].masterLeague}/>
      }) }
      
    </div>
  )
}

export default App;
