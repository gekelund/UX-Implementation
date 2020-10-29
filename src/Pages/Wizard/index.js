import React, { useContext, useEffect } from 'react';
import {StepContext} from './wizardContext';
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import PathHeader from '../../Components/PathHeader';
import { StateContext } from '../../StateContext';
import { StepContextProvider } from './wizardContext';
import {useHistory} from 'react-router-dom';


const Wizard = () => {

const WizardSteps = () => {
const { stepState , updateStepState} = useContext(StepContext);
const { state, updateState } = useContext(StateContext);
const { currentStep, steps } = stepState;
const history = useHistory();

useEffect(() => {  
  let State = JSON.parse(localStorage.getItem("State"));
  updateState(State);

  let StepState = JSON.parse(localStorage.getItem("StepState"));
  updateStepState(StepState);

  
},[]);

useEffect( () => {
  localStorage.setItem('StepState', JSON.stringify(stepState));
  localStorage.setItem('State', JSON.stringify(state));

if(currentStep && !steps[2].access) {
  window.scrollTo(0, 0);
}


}, [stepState, state, steps, currentStep, history]);



const handleDeliveryInfo = () => {
  if(steps[0].access) {
  updateStepState({currentStep: 0})
}
}

const handleOverview = () => {
  if(steps[0].completed && steps[1].access) {
    updateStepState({currentStep: 1})
    
  } 
  
}

const handlePay = () => {
  
  if(steps[1].completed && steps[2].access && steps[1].access) {
    updateStepState({currentStep: 1})
    
  }
}



const Components = [<DeliveryInfo />, <Overview />];
  
  return (
    <>
    <PathHeader 
      handleDeliveryInfo={handleDeliveryInfo} 
      handleOverview={handleOverview} 
      handlePay={handlePay}
      steps={steps}
      completed={false}
    />
 
     <div>{Components[currentStep]}</div>
    </>
  )
}


return (
  <StepContextProvider>
    <WizardSteps />
  </StepContextProvider>
)
}

export default Wizard;

