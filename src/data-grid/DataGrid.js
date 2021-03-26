import './DataGrid.css';

function DataGrid(props) {
    return (
        <div className="data-grid">
            <label>
                <span>PC</span> 
                <input type="number" placeholder="0" defaultValue={props.value}/>    
            </label>
        </div>
    )
}

export default DataGrid;