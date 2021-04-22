import Stat from '../stat/Stat.js';
import './Appraisal.css';

function Appraisal(props) {
    return (
        <div className="appraisal">
            <Stat id="attack" name="Ataque" value={props.attack} onChange={props.onChangeAttack}/>
            <Stat id="defense" name="Defensa" value={props.defense} onChange={props.onChangeDefense}/>
            <Stat id="health" name="PS" value={props.health} onChange={props.onChangeHealth}/>
        </div>
    )
}

export default Appraisal;