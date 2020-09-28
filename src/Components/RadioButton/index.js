import React from 'react';

const RadioButton = ({ value, name, register, label }) => {

    return (

        <label> {label}
            <input type="radio" value={value} name={name} ref={register} /> 
        </label>
    )
}

export default RadioButton;