import "./SendForm.css"

function SendForm(props) {
    return (
        <div className="submit">
            <button type="reset" tabIndex="-1" className="reset">Reset</button> 
            <button type="submit" className="calculate" onClick={props.onSubmit}>Calcular »</button>
        </div>
    )
}

export default SendForm;