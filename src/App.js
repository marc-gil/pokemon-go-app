import { useEffect, useState } from 'react';
import './App.css';
import Appraisal from "./appraisal/Appraisal"
import DataGrid from './data-grid/DataGrid';
import Dropdown from './dropdown/Dropdown';
import Rank from './rank/Rank';
import SendForm from './send-form/SendForm';

function App() {
  const [pokemonSpecies, setPokemonSpecies] = useState([]);
  const [selectedSpecie, setSelectedSpecie] = useState(null);
  const [calculatedSpecie, setCalculatedSpecie] = useState(null);
  const [greatLeague, setGreatLeague] = useState({rank: 0, level: 0, cp: 0});
  const [ultraLeague, setUltraLeague] = useState({rank: 0, level: 0, cp: 0});
  const [masterLeague, setMasterLeague] = useState({rank: 0, level: 0, cp: 0});

  useEffect(() => {
    fetch('http://localhost:8080/api/pokemon-species')
      .then(response => response.json())
      .then(data => data.map(entry => {
        return {value: entry.name, label: entry.name, image: entry.image, pokedexNumber: entry.pokedex_number}
      }))
      .then(list => setPokemonSpecies(list))
  }, [] );

  function updateCalculatedSpecie() {
    console.log("Selected specie " + selectedSpecie);
    setCalculatedSpecie(selectedSpecie);
    fetch('http://localhost:8080/api/pokemon-species/' + selectedSpecie.pokedexNumber + '/rank?attackIv=0&cp=1498&defenseIv=15&healthIv=10&levelCap=50')
      .then(response => response.json())
      .then(data => {
        debugger;
        setGreatLeague(data.greatLeagueRank);
        setUltraLeague(data.ultraLeagueRank);
        setMasterLeague(data.masterLeagueRank);
    })
      //.then(data => data.map(entry => {
        //return {value: entry.name, label: entry.name, image: entry.image}
      //}))
      //.then(list => setPokemonSpecies(list))
  };

  console.log("great League " + greatLeague);

  return (
    <div Style={"max-width: 700px; box-sizing: border-box;margin: 0 auto 20px;"}>
      <Dropdown title="Pokemon" isListOpen={false} placeHolder="Seleccionar Pokemon" list={pokemonSpecies} onSelectItem={setSelectedSpecie}/>
      <DataGrid value=""/>
      <Appraisal attack="0" defense="0" health="0"/>
      <SendForm onSubmit={updateCalculatedSpecie}/>
      <Rank image={calculatedSpecie !== null ? calculatedSpecie.image : ""}
            greatLeague={greatLeague}
            ultraLeague={ultraLeague} 
            masterLeague={masterLeague}/>
    </div>
  )
}

export default App;
