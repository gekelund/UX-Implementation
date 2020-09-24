/* import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../Inputs';

const FormGroup = ({options, children }) => {

   
    const {register, handleSubmit} = useForm();
    const onSubmit = data => console.log(data);


    const _options =
        options && options.length ? options : React.Children.toArray(children);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {_options.map((option, index) => {
                const name = 
                    typeof option === 'string' ? option : option.props.name;
                const defaultValue =
                    typeof option === 'string' ? option : option.props.defaultValue; 
                    
                    const childProps = {
                        name,
                        defaultValue,
                    };

                    return <Input ref={register} {...childProps} />
            })}
            
            <input type='submit' />
        </form>
    )
}

export default FormGroup; */

import React from 'react';
import { useForm } from 'react-hook-form';


const FormGroup = ({ defaultValues, children, onSubmit }) => {
    const methods = useForm( {defaultValues });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {React.Children.map(children, child => {
                return child.props.name
                    ? React.createElement(child.type, {
                        ...{
                            ...child.props,
                                register: methods.register,
                                key: child.props.name
                        }
                    })
                : child;
            })}
        </form>
    )
}

export default FormGroup;