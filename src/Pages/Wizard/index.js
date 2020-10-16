import React, { useContext, useEffect} from 'react';
import {StepContext} from './wizardContext';
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import Confirmation from './confirmation';
import PathHeader from '../../Components/PathHeader';
import { StateContext } from '../../StateContext';
import {useLocation} from 'react-router-dom';

const Wizard = () => {
const { stepState , updateStepState} = useContext(StepContext);
const { state, updateState } = useContext(StateContext);

useEffect(() => {
  let State = JSON.parse(localStorage.getItem("State"));
  updateState(State);

  let StepState = JSON.parse(localStorage.getItem("StepState"));
  updateStepState(StepState);

},[]);

useEffect(() => {
  localStorage.setItem('StepState', JSON.stringify(stepState));
  localStorage.setItem('State', JSON.stringify(state));

}, [stepState, state]);


const Components = [<DeliveryInfo />, <Overview />, <Confirmation />];

const { currentStep, steps } = stepState;



const handleDeliveryInfo = () => {
  updateStepState({currentStep: 0})
  
}

const handleOverview = () => {
  if(steps[0].completed) {
    updateStepState({currentStep: 1})
  } 
  
}

const handlePay = () => {
  if(steps[1].completed) {
    updateStepState({currentStep: 1})
    
  }
}

const handleConfirmation = () => {
  if(steps[3].completed)
  updateStepState({currentStep: 2})
} 

console.log(stepState)

return (
  <div>
  
    <PathHeader 
      handleDeliveryInfo={handleDeliveryInfo} 
      handleOverview={handleOverview} 
      handlePay={handlePay}
      handleConfirmation={handleConfirmation}
    />
    <div>
      {Components[currentStep]}
    </div>
    
  </div>
    
)
}

export default Wizard;

