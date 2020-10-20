import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";

const InputStyling = styled.div.attrs({
    className: "w-full h-auto ",
  })`
    & {
        input {
            ${tw` w-full h-10 mb-2 shadow-inner rounded p-2`}
        }
        span {
            ${tw` w-full mb-2 mt-2 flex items-center `}
        }
        label {
            ${tw` w-full flex flex-col items-start `}
        }
        p {
            ${tw` text-normal font-semibold text-gray-900 pl-2 `}
        }
    }
  `;


const Input = ({
   register, 
   name, 
   icon,
   groupIcon,
   value,
   defaultValue,
   ...rest
}) => {

     return (
        <InputStyling>
            <label>
     <span>{icon}<p>{name}</p>{groupIcon}</span>
                <input 
                    name={name}
                    ref={register}
                    value={value}
                    defaultValue={defaultValue}
                    {...rest} 
                />
            </label>
        </InputStyling>
    );
     
};

export default Input;