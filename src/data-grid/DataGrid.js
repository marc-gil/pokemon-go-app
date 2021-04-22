import React, { useState } from 'react';
import './DataGrid.css';

function DataGrid(props) {
    const [value, setValue] = useState(props.value);

    function updateValue(value) {
        debugger;
        if ( value === "" ) {
            value = null;
        }
        setValue(value);
        props.onChange(value);
    }
    
    return (
        <div className="data-grid">
            <label>
                <span>PC</span> 
                <input 
                    type="number" 
                    placeholder="0" 
                    defaultValue={value} 
                    onChange={(e) => updateValue(e.target.value)}
                    required={props.required}/>    
            </label>
        </div>
    )
}

export default DataGrid;