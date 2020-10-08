import React from 'react';

const RadioButton = ({ value, name, register, label, checked }) => {

    return (

        <label> {label}
            <input type="radio" checked={checked} value={value} name={name} ref={register} /> 
        </label>
    )
}

export default RadioButton;