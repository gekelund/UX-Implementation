import React from 'react';


const Input = ({
   register, 
   name, 
   ...rest
}) => {

     return (
            <input 
                name={name}
                ref={register}
                {...rest} 
            />
    );
     
};

export default Input;