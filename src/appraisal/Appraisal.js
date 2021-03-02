import Stat from '../stat/Stat.js';
import './Appraisal.css';

function Appraisal(props) {
    return (
        <div className="appraisal">
        <Stat id="attack" name="Ataque" value="10"/>
        <Stat id="defense" name="Defensa" value="0"/>
        <Stat id="health" name="PS" value="0"/>
        </div>
    )
}

export default Appraisal;