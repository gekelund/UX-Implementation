import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";

const TextAreaStyling = styled.div.attrs({
    className: "w-auto h-auto ",
  })`
    & {
        textarea {
            ${tw` w-64 h-20 mb-2 shadow-inner resize-none rounded p-2`}
        }
        label {
            ${tw` flex flex-col mb-2 mt-10 font-semibold text-lg items-start `}
        }
        
    }
  `;


const TextArea = ({ name, form, placeholder, register, labelName }) => {

    return (
    <TextAreaStyling>
        <label>
            {labelName}
            <textarea name={name} form={form} placeholder={placeholder} ref={register} />
        </label>
    </TextAreaStyling>
    )
}

export default TextArea;