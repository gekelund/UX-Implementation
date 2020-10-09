import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";


const RadioButtonStyling = styled.div.attrs({
    className: "w-full h-16 ",
  })`
    & {
       
        label {
            ${tw`flex items-center justify-between shadow-lg p-3 m-2 bg-gray-300 rounded-lg border-2`}
        }
       
         
    }
  `;

const RadioButton = ({ value, name, register, label, onChange, defaultValue, type }) => {

    return (
    <RadioButtonStyling>
        <label> {label}
            <input type={type} onChange={onChange} defaultValue={defaultValue} value={value} name={name} ref={register} /> 
        </label>
    </RadioButtonStyling>
    )
}

export default RadioButton;