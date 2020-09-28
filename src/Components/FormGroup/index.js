import React from 'react';
import { useForm } from 'react-hook-form';


const FormGroup = ({ defaultValues, children, onSubmit, id }) => {
    const methods = useForm( {defaultValues });
    const { handleSubmit } = methods;

    return (
        <form onSubmit={handleSubmit(onSubmit)} id={id}>
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