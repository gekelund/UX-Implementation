import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import FormGroup from '../../Components/FormGroup';
import Input from '../../Components/Inputs';
import RadioButton from '../../Components/RadioButton';
import TextArea from '../../Components/TextArea';
import { StateContext } from '../../StateContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';

const DeliveryInfoStyling = styled.div.attrs({
    className: "w-full h-screen flex flex-column flex-wrap mt-32 pb-32 justify-center",
  })`
    & {
        main {
            ${tw`w-full h-auto text-center m-6`}
        }
        h3 {
            ${tw`font-sans text-xl font-normal text-xl text-gray-600`}
        }
        button {
            ${tw`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded`}
        }
    }
  `;


const DeliveryInfo = ({ children }) => {

        const { state, updateState } = useContext(StateContext);
        
        /* const {deliveryinfo} = state;
        
        const emptyField = (currentValue) => currentValue !== "";
        const delInfo = Object.values(deliveryinfo).every(emptyField) */
        
        
        let history = useHistory()
      
        const onSubmit = data => {
            console.log(data);
            updateState({deliveryinfo: data});
            
           history.push("/wizard/overview");
        }

       
    return (
        <DeliveryInfoStyling>
            <main>
            <h1>DeliveryInfo</h1>
            <FormGroup onSubmit={onSubmit} id="form1">
                <Input icon={<PersonOutlineOutlinedIcon style={{fontSize: "30"}} />} name="Namn" placeholder="Mottagarens namn" required={true} />
                <Input icon={<EmailOutlinedIcon style={{fontSize: "30"}} />} name="Email" placeholder="Email" type="mail" required={true} />
                <Input icon={<PhoneOutlinedIcon style={{fontSize: "30"}} />} name="Telefon" placeholder="Telefon" type="tel" required={true} />
                <Input icon={<HomeOutlinedIcon style={{fontSize: "30"}} />} name="Adress" placeholder="Adress" required={true} />
                <Input icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} name="Postnummer" placeholder="Postnummer" type="number" required={true} />
                <Input icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} name="Ort" placeholder="Ort" required={true} />

                <TextArea labelName="Meddelande till bud" name="leveransmeddelande" placeholder="Extra information till bud (portkod, våning, mm)" />
                <TextArea labelName="Skicka en hälsning" name="greeting" placeholder="Skriv din hälsning här" />
                
                <RadioButton name="leveranstid" label="Snarast" value="snarast" checked="checked" />
                <RadioButton name="leveranstid" label="Upphämtning" value="pickup"  />
                <RadioButton name="leveranstid" label="Annat datum" value="datum"  />
               
                <button type="submit" value="Submit">Nästa</button>
            </FormGroup>
            </main>
            

            {/* TODO: add next button to push to next step in wizard */}

            {/* Not to be used in app. Test for useHistory function */}
            <button type="button" onClick={() => history.goBack()}>
                {children}
                Back
            </button>
        </DeliveryInfoStyling>
    )
}

export default DeliveryInfo;