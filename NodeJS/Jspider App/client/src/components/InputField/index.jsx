import { Component } from "react";
import './style.css'

class InputField extends Component {
    render() {
        const { label, name, type = "text", error } = this.props;
        return <div className="input-container">

            <input type={type} name={name} />
            {label && <label>{label}</label>}
            {error && <p className="error-tag">{error}</p>}
        </div>
    }
}

export default InputField;