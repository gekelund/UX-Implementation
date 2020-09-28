import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import FormGroup from '../../Components/FormGroup';
import Input from '../../Components/Inputs';
import RadioButton from '../../Components/RadioButton';
import TextArea from '../../Components/TextArea';
import { StateContext } from '../../StateContext';

const DeliveryInfo = ({ children }) => {

        const { state, updateState } = useContext(StateContext);
        
    
        
        let history = useHistory()
      
        const onSubmit = data => {
            console.log(data);
            updateState({deliveryinfo: data});
            
           history.push("/wizard/overview");
        }

        console.log(state)
       
    return (
        <div>
            DeliveryInfo
            <FormGroup onSubmit={onSubmit} id="form1">
                <Input name="namn" placeholder="Mottagarens namn" />
                <Input name="email" placeholder="Email" type="mail" />
                <Input name="telefon" placeholder="Telefon" type="tel" />
                <Input name="adress" placeholder="Adress" />
                <Input name="postnummer" placeholder="Postnummer" type="number" />
                <Input name="ort" placeholder="Ort" />
                <TextArea name="leveransmeddelande" placeholder="Extra information till bud (portkod, våning, mm)" />
                <TextArea name="greeting" placeholder="Skriv din hälsning här" />
                <RadioButton name="leveranstid" label="Snarast" value="snarast" />
                <RadioButton name="leveranstid" label="Upphämtning" value="pickup" />
                <RadioButton name="leveranstid" label="Annat datum" value="datum" />
                <Input type="submit" value="Submit" />
            </FormGroup>

            

            {/* TODO: add next button to push to next step in wizard */}

            {/* Not to be used in app. Test for useHistory function */}
            <button type="button" onClick={() => history.goBack()}>
                {children}
                Back
            </button>
        </div>
    )
}

export default DeliveryInfo;