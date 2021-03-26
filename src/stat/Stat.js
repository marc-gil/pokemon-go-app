import React, { useState } from 'react';
import StatBar from "../bar/StatBar";
import './Stat.css';

function Stat(props) {
    const [value, setValue] = useState(props.value);
    return (
        <div id={props.id} className="stat">
            <h4>{props.name}
                <span>{value}</span>
            </h4>
            <StatBar id={props.id + "bar"} value={value} onChange={setValue}/>
        </div>
    );
}

export default Stat;