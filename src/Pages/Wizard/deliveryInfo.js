import React, { useContext, useState } from 'react';
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
import DirectionsBikeOutlinedIcon from '@material-ui/icons/DirectionsBikeOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import TimeSelect from '../../Components/RadioButton/timeSelect';

const DeliveryInfoStyling = styled.div.attrs({
    className: "w-full h-auto flex justify-center",
  })`
    & {
        main {
            ${tw`w-min h-full mt-32 mb-48 text-center`}
        }
        h3 {
            ${tw`font-sans text-xl font-normal text-xl text-gray-600`}
        }
        h2 {
            ${tw`font-sans text-xl font-semibold text-2xl text-gray-900 pb-8`}
        }
        input#submit {
            ${tw`w-32 mb-32 bg-green-500 hover:bg-green-700 text-white shadow-lg font-bold py-2 px-4 mt-10 rounded`}
        }
       
        
    }
  `;

  const SelectTimeStyling = styled.div.attrs({
    className: "h-auto w-full",
  })`
    & {
       div {
           ${tw`w-max h-32 flex flex-row flex-wrap justify-center items-center`}
       }
        
    }
  `;



const DeliveryInfo = () => {
        const [open, setOpen] = useState(false);
        const { state, updateState } = useContext(StateContext);
        const { stepState , updateStepState} = useContext(StepContext);
        const { steps } = stepState;
        const {deliveryinfo} = state;
        const [date, setDate] = useState(false);

        const onSubmit = (data, date) => {
            if(date) {
                let totData = Object.assign(deliveryinfo, data);
                updateState({deliveryinfo: totData})
            } else {
                updateState({deliveryinfo: data});
            }
            updateStepState(steps[0].completed = true);
            updateStepState(steps[1].access = true);
            updateStepState(steps[1].completed = true)
            updateStepState({currentStep: 1})
        }
      
        const onChange = (e) => {
            if(e.target.value !== "datum") {
                setOpen(false)
            } else {setOpen(!open)}
            
        }

        const handleDatePicker = date => {
            updateState({deliveryinfo: {leveransdatum: date}})
            setDate(date);
        } 
        
        const handleTime = (e) => {  
            let levTid = Object.assign(deliveryinfo, {levernastid: e.target.value})
            updateState({deliveryinfo: levTid})
        }

    return (
        <DeliveryInfoStyling>
            <main >
            <h2>Leveransinformation</h2>
            <FormGroup onSubmit={onSubmit} id="form1">
                <Input 
                    groupIcon={<DirectionsBikeOutlinedIcon style={{marginLeft: "auto", fontSize: 35}} />} 
                    icon={<PersonOutlineOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Namn" 
                    placeholder="Mottagarens namn" 
                    required={true} 
                    value={state.deliveryinfo.Namn} 
                />
                <Input 
                    icon={<EmailOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Email" placeholder="Email" 
                    type="mail" 
                    required={true} 
                    value={state.deliveryinfo.Email} 
                />
                <Input 
                    icon={<PhoneOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Telefon" 
                    placeholder="Telefon" 
                    type="tel" 
                    required={true} 
                    value={state.deliveryinfo.Telefon}
                />
                <Input 
                    icon={<HomeOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Adress" 
                    placeholder="Adress" 
                    required={true} 
                    value={state.deliveryinfo.Adress }
                />
                <Input 
                    icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Postnummer" 
                    placeholder="Postnummer" 
                    type="number" 
                    required={true}  
                    value={state.deliveryinfo.Postnummer}
                />
                <Input 
                    icon={<RoomOutlinedIcon style={{fontSize: "30"}} />} 
                    name="Ort" 
                    placeholder="Ort" 
                    required={true} 
                    value={state.deliveryinfo.Ort} 
                />

                <TextArea 
                    icon={<ErrorOutlineOutlinedIcon style={{fontSize: 35}} />} 
                    labelName="Meddelande till bud" 
                    name="leveransmeddelande" 
                    placeholder="Extra information till bud (portkod, våning, mm)" 
                    value={state.deliveryinfo.leveransmeddelande }
                />
                <TextArea 
                    icon={<MailOutlineOutlinedIcon style={{fontSize: 35}} />} 
                    labelName="Skicka en hälsning" 
                    name="greeting" 
                    placeholder="Skriv din hälsning här" 
                    value={state.deliveryinfo.greeting}
                />
            
                <RadioButton 
                    type="radio" 
                    name="leveranstyp" 
                    label="Snarast" 
                    value="snarast" 
                    onChange={onChange} 
                    defaultChecked={state.deliveryinfo.levernastyp === "snarast"}
                />
                <RadioButton 
                    type="radio" 
                    name="leveranstyp" 
                    label="Upphämtning" 
                    value="pickup" 
                    defaultChecked={state.deliveryinfo.levernastyp === "pickup"}
                    onChange={onChange}
                />
                <RadioButton 
                    type="radio" 
                    name="leveranstyp" 
                    label="Annat datum" 
                    value="datum" 
                    defaultChecked={state.deliveryinfo.levernastyp === "datum"}
                    onChange={onChange} 
                />

                
                    <div style={open ? {display: "block"} : {display: "none"}}>
                        <p>Välj leveransdag/tid</p>
                        <DatePicker
                            selected={date}
                            onChange={handleDatePicker}
                            inline
                        />
                        {date ? 
                        <SelectTimeStyling>
                            <div>
                                <TimeSelect type="radio" onChange={handleTime} label="16:00" name="tid" value="16:00" />
                                <TimeSelect type="radio" onChange={handleTime} label="17:00" name="tid" value="17:00" />
                                <TimeSelect type="radio" onChange={handleTime} label="18:00" name="tid" value="18:00" />
                                <TimeSelect type="radio" onChange={handleTime} label="19:00" name="tid" value="19:00" />
                                <TimeSelect type="radio" onChange={handleTime} label="20:00" name="tid" value="20:00" />
                                <TimeSelect type="radio" onChange={handleTime} label="21:00" name="tid" value="21:00" />
                            </div>
                        </SelectTimeStyling>
                        :
                        ""
                    }
                    </div>
               
                <input id="submit" type="submit" value="Nästa" />
            </FormGroup>
           
            </main>
            
        </DeliveryInfoStyling>
    )
}

export default DeliveryInfo;