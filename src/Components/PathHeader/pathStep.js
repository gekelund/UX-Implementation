import React from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";


const PathStepStyling = styled.div.attrs({
    className: "w-full h-64",
  })`
    & {
       
        div {
            ${tw`flex flex-col justify-center items-center`}
        }
        p {
            ${tw`font-sans font-normal text-xs text-gray-800`}
        }
        span {
            ${tw`w-12 h-12 mb-1 bg-gray-400 rounded-full flex justify-center text-white items-center`}
        }
         
    }
  `;

const PathStep = ({onClick, icon, stepLabel, id, style}) => {
    
    return (
        <PathStepStyling>
        <div onClick={onClick}>
            <span style={style} id={id} >{icon}</span>
            <p>{stepLabel}</p>
        </div>
        </PathStepStyling>
    )
}

export default PathStep;