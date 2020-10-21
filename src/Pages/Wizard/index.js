import React, { useContext, useEffect} from 'react';
import {StepContext} from './wizardContext';
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import Confirmation from './confirmation';
import PathHeader from '../../Components/PathHeader';
import { StateContext } from '../../StateContext';
import { StepContextProvider } from './wizardContext';

const Wizard = () => {

const WizardSteps = () => {
const { stepState , updateStepState} = useContext(StepContext);
const { state, updateState } = useContext(StateContext);
const { currentStep, steps } = stepState;


useEffect(() => {  
  let wizardState = JSON.parse(localStorage.getItem("wizardState"));
  updateState(wizardState);

  let StepState = JSON.parse(localStorage.getItem("StepState"));
  updateStepState(StepState);

  window.scrollTo(0, 0);
  
},[]);

useEffect( () => {
  localStorage.setItem('StepState', JSON.stringify(stepState));
  localStorage.setItem('wizardState', JSON.stringify(state));


}, [stepState, state]);



const handleDeliveryInfo = () => {
  if(steps[0].access) {
  updateStepState({currentStep: 0})
}
}

const handleOverview = () => {
  if(steps[0].completed && steps[1].access) {
    updateStepState({currentStep: 1})
    window.location.hash = "#order"
  } 
  
}

const handlePay = () => {
  
  if(steps[1].completed && steps[2].access && steps[1].access) {
    updateStepState({currentStep: 1})
    window.location.hash = "#payment"
  }
}

const handleConfirmation = () => {
  if(steps[3].completed && steps[3].access)
  updateStepState({currentStep: 2})
} 

console.log(stepState)
const Components = [<DeliveryInfo />, <Overview />,  <Confirmation />];
  
  return (
    <div>
    <PathHeader 
      handleDeliveryInfo={handleDeliveryInfo} 
      handleOverview={handleOverview} 
      handlePay={handlePay}
      handleConfirmation={handleConfirmation}
    />
 
     <div>{Components[currentStep]}</div>
    </div>
  )
}


return (
  <StepContextProvider>
    <WizardSteps />
  </StepContextProvider>
)
}

export default Wizard;

