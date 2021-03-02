import StatBar from "../bar/StatBar";
import './Stat.css';

function Stat(props) {
    
    const segments = [
        {id : 1, isActive : props.value >= 1}, 
        {id : 2, isActive : props.value >= 2}, 
        {id : 3, isActive : props.value >= 3}, 
        {id : 4, isActive : props.value >= 4}, 
        {id : 5, isActive : props.value >= 5}, 
        {id : 6, isActive : props.value >= 6}, 
        {id : 7, isActive : props.value >= 7}, 
        {id : 8, isActive : props.value >= 8}, 
        {id : 9, isActive : props.value >= 9}, 
        {id : 10, isActive : props.value >= 10}, 
        {id : 11, isActive : props.value >= 11}, 
        {id : 12, isActive : props.value >= 12}, 
        {id : 13, isActive : props.value >= 13}, 
        {id : 14, isActive : props.value >= 14}, 
        {id : 15, isActive : props.value >= 15}
      ];
    return (
        <div id={props.id} className="stat">
            <h4>{props.name}
                <span>{props.value}</span>
            </h4>
            <StatBar id={props.id + "bar"} segments={segments}/>
        </div>
    );
}

export default Stat;