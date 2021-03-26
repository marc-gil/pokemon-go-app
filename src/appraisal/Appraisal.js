import Stat from '../stat/Stat.js';
import './Appraisal.css';

function Appraisal(props) {
    return (
        <div className="appraisal">
            <Stat id="attack" name="Ataque" value={props.attack}/>
            <Stat id="defense" name="Defensa" value={props.defense}/>
            <Stat id="health" name="PS" value={props.health}/>
        </div>
    )
}

export default Appraisal;