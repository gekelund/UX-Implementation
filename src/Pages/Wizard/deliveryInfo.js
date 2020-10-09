import React, {useContext, useState} from 'react';
/* import { useHistory } from 'react-router-dom'; */
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
import {StepContext} from './wizardContext';


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
        input#submit {
            ${tw`w-32 bg-green-500 hover:bg-green-700 text-white shadow-lg font-bold py-2 px-4 mt-10 rounded`}
        }
        
    }
  `;


const DeliveryInfo = () => {
        const [open, setOpen] = useState(false);
        const { updateState } = useContext(StateContext);
        const { stepState , updateStepState} = useContext(StepContext);
        const { steps } = stepState;
      
        const onSubmit = data => {
        
                updateState({deliveryinfo: data});
                updateStepState(steps[0].completed = true);
                updateStepState({currentStep: 1});
                updateStepState(steps[1].access = true)
                
        }
      
        const onChange = (e) => {
            if(e.target.value !== "datum") {
                setOpen(false)
            } else {setOpen(!open)}
        }

    return (
        <DeliveryInfoStyling>
            <main>
            <h1>DeliveryInfo</h1>
            <FormGroup onSubmit={onSubmit} id="form1">
                <Input icon={<PersonOutlineOutlinedIcon style={{fontSize: "30"}} />} name="Namn" placeholder="Mottagarens namn" required={true} />
                <Input icon={<EmailOutlinedIcon style={{fontSize: "30"}} />} name="Email" placeholder="Email" type="mail" required={true}  />
                <Input icon={<PhoneOutlinedIcon style={{fontSize: "30"}} />} name="Telefon" placeholder="Telefon" type="tel" required={true} />
                <Input icon={<HomeOutlinedIcon style={{fontSize: "30"}} />} name="Adress" placeholder="Adress" required={true} />
                <Input icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} name="Postnummer" placeholder="Postnummer" type="number" required={true} />
                <Input icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} name="Ort" placeholder="Ort" required={true} />

                <TextArea labelName="Meddelande till bud" name="leveransmeddelande" placeholder="Extra information till bud (portkod, våning, mm)" />
                <TextArea labelName="Skicka en hälsning" name="greeting" placeholder="Skriv din hälsning här" />
            
                <RadioButton type="radio" name="leveranstid" label="Snarast" value="snarast" onChange={onChange} defaultValue="snarast" />
                <RadioButton type="radio" name="leveranstid" label="Upphämtning" value="pickup" onChange={onChange}/>
                <RadioButton type="radio" name="leveranstid" label="Annat datum" value="datum" onChange={onChange} />
                    <div style={open ? {display: "block"} : {display: "none"}}>
                        <p>Add datepicker</p>
                    </div>
                   
                <input id="submit" type="submit" value="Nästa" />
            </FormGroup>
            </main>
            
        </DeliveryInfoStyling>
    )
}

export default DeliveryInfo;