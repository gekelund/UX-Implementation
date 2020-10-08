import React from 'react';
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import tw from "tailwind.macro";

const FormStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-column mt-32 pb-32 justify-center",
  })`
    & {
        form {
            ${tw`w-full h-auto flex flex-col items-center`}
        }
      
    }
  `;

const FormGroup = ({ defaultValues, required, children, onSubmit, id }) => {
    const methods = useForm( {defaultValues, required });
    const { handleSubmit } = methods;

    return (
        <FormStyling>
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
        </FormStyling>
    )
}

export default FormGroup;