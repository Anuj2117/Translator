import React from "react";

function TextInput({ label, value, onChange, readOnly = false }) {
    return (
        <div>
            <label htmlFor="textInput">{label}</label>
            <input 
                type="text" 
                id="textInput" 
                value={value} 
                onChange={onChange} 
                readOnly={readOnly} 
            />
        </div>
    );
}

export default TextInput;
