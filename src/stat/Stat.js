import React, { useState } from 'react';
import StatBar from "../bar/StatBar";
import './Stat.css';

function Stat(props) {
    const [value, setValue] = useState(props.value);
    
    function updateValue(value) {
        props.onChange(value);
        setValue(value);
    }

    return (
        <div id={props.id} className="stat">
            <h4>{props.name}
                <span>{value}</span>
            </h4>
            <StatBar id={props.id + "bar"} value={value} onChange={updateValue}/>
        </div>
    );
}

export default Stat;