import React from 'react';
import { useHistory } from 'react-router-dom';
import FormGroup from '../../Components/FormGroup';
import Input from '../../Components/Inputs';

const DeliveryInfo = ({ children }) => {

    
        let history = useHistory()
      
        const onSubmit = data => console.log(data)
      

    return (
        <div>
            DeliveryInfo
            <FormGroup onSubmit={onSubmit}>
                <Input name="namn" placeholder="Mottagarens namn" />
                <Input name="email" placeholder="Email" type="mail" />
                <Input name="telefon" placeholder="Telefon" type="tel" />
                <Input name="adress" placeholder="Adress" />
                <Input name="postnummer" placeholder="Postnummer" type="number" />
                <Input name="ort" placeholder="Ort" />
                <Input type="submit" value="Submit" />
            </FormGroup>

            <button type="button" onClick={() => history.goBack()}>
                {children}
                Back
            </button>
        </div>
    )
}

export default DeliveryInfo;