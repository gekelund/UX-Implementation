import React from 'react';
import styled from "styled-components";

const Span = styled.span`
    
    height: 40px;
    width: 120px;
    background-color: gray;
    border-radius: 5px;
`;

const Label = styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 120px;
    height: 40px;
    color: white;
    cursor: pointer;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    margin: 15px;
`;

const Input = styled.input`
    
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked + ${Span} {
        background-color: green;
    }       
`;

const TimeSelect = ({ value, name, label, onChange, type }) => {


    return (
    
        <Label> 
            <Input type={type} onChange={onChange} value={value} name={name} /> 
            <Span>{label}</Span>
        </Label>
       
    )
}

export default TimeSelect;