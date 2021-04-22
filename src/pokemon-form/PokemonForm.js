import Appraisal from "../appraisal/Appraisal";
import DataGrid from "../data-grid/DataGrid";
import Dropdown from "../dropdown/Dropdown";
import SendForm from "../send-form/SendForm";

function PokemonForm() {
    return (
        <div>
            <Dropdown title="Pokemon" isListOpen={false} placeHolder="Seleccionar Pokemon" list={pokemonSpecies} onSelectItem={setSelectedSpecie}/>
            <DataGrid value={cp != null ? cp : ""} onChange={setCp}/>
            <Appraisal attack={attackIv} defense={defenseIv} health={healthIv} onChangeAttack={setAttackIv} onChangeDefense={setDefenseIv} onChangeHealth={setHealthIv}/>
            <SendForm onSubmit={updateCalculatedSpecie}/>
      </div>
    );
}