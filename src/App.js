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
  useEffect(() => {
    fetch('http://localhost:8080/api/pokemon-species')
      .then(response => response.json())
      .then(data => data.map(entry => {
        return {value: entry.name, label: entry.name, image: entry.image}
      }))
      .then(list => setPokemonSpecies(list))
  }, [] );

  function updateCalculatedSpecie() {
    console.log("Selected specie " + selectedSpecie);
    setCalculatedSpecie(selectedSpecie);
  };

  return (
    <div Style={"max-width: 700px; box-sizing: border-box;margin: 0 auto 20px;"}>
      <Dropdown title="Pokemon" isListOpen={false} placeHolder="Seleccionar Pokemon" list={pokemonSpecies} onSelectItem={setSelectedSpecie}/>
      <DataGrid value=""/>
      <Appraisal attack="0" defense="0" health="0"/>
      <SendForm onSubmit={updateCalculatedSpecie}/>
      <Rank image={calculatedSpecie !== null ? calculatedSpecie.image : ""}
            greatRank="3" 
            ultraRank="43" 
            masterRank="278"
            greatLevel="26.5"
            ultraLevel="37"
            masterLevel="50"
            greatCp="1490"
            ultraCp="2482"
            masterCp="3218"/>
    </div>
  )
}

export default App;
