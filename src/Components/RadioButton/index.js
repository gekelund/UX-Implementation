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
       input {
           ${tw`appearance-none bg-white w-6 h-6 border-transparent`}
       }
       input:checked {
        ${tw`appearance-none w-6 h-6 bg-green-600 border-transparent `}
    }
    }
  `;

const RadioButton = ({ value, name, register, label, onChange, type, defaultChecked }) => {
    
   

    return (
    <RadioButtonStyling>
        <label> {label}
            <input type={type} onChange={onChange} defaultChecked={defaultChecked} value={value} name={name} ref={register} /> 
        </label>
    </RadioButtonStyling>
    )
}

export default RadioButton;