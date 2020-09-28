import React from 'react';


const TextArea = ({ name, form, placeholder, register }) => {

    return (
        <textarea name={name} form={form} placeholder={placeholder} ref={register}>
            
        </textarea>
    )
}

export default TextArea;