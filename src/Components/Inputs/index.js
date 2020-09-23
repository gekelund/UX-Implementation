import React from 'react';


const Input = ({
    name,
    defaultValue,
    ref

}) => {


     return (

            <input 
            name={name}
            defaultValue={defaultValue}
            ref={ref}
        />

    );
     
};

export default Input;