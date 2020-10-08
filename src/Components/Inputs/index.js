import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";

const InputStyling = styled.div.attrs({
    className: "w-auto h-auto ",
  })`
    & {
        input {
            ${tw` w-64 h-10 mb-2 shadow-inner rounded p-2`}
        }
        span {
            ${tw` w-20 pr-4 mb-2 mt-2 flex items-center `}
        }
        label {
            ${tw` flex flex-col items-start `}
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
   ...rest
}) => {

     return (
        <InputStyling>
            <label>
                <span>{icon}<p>{name}</p></span>
                <input 
                    name={name}
                    ref={register}
                    {...rest} 
                />
            </label>
        </InputStyling>
    );
     
};

export default Input;