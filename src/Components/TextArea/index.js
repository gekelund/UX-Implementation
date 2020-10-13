import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";

const TextAreaStyling = styled.div.attrs({
    className: "w-full h-auto ",
  })`
    & {
        textarea {
            ${tw` w-full h-20 mb-2 shadow-inner resize-none rounded p-2`}
        }
        label {
            ${tw`w-full flex flex-col mb-2 mt-10 font-semibold text-lg items-start `}
        }
        span {
            ${tw` flex w-full items-end justify-between pl-2 pb-4`}
        }
        
    }
  `;


const TextArea = ({ name, form, placeholder, register, labelName, icon}) => {

    return (
    <TextAreaStyling>
        <label>
            <span>
                {labelName}
                {icon}
            </span>
            <textarea name={name} form={form} placeholder={placeholder} ref={register} />
        </label>
    </TextAreaStyling>
    )
}

export default TextArea;