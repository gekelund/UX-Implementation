import React, { useContext, useEffect} from 'react';
import {StepContext} from './wizardContext';
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import Confirmation from './confirmation';
import PathHeader from '../../Components/PathHeader';
import { StateContext } from '../../StateContext';
import {UserContext} from '../../Firebase/UserContext';
import {FirebaseContext} from '../../Firebase/FirebaseContext';

const Wizard = () => {
const { stepState , updateStepState} = useContext(StepContext);
const { state, updateState } = useContext(StateContext);
const user = useContext(UserContext);
const firebase = useContext(FirebaseContext);
const {orderId} = state;

console.log(orderId)
useEffect(() => {
  if(!user){ return;}
}, [user]);

useEffect(() => {  
  let State = JSON.parse(localStorage.getItem("State"));
  updateState(State);

  let StepState = JSON.parse(localStorage.getItem("StepState"));
  updateStepState(StepState);

  window.scrollTo(0, 0);
  
},[]);

useEffect( () => {
  localStorage.setItem('StepState', JSON.stringify(stepState));
  localStorage.setItem('State', JSON.stringify(state));

  if(currentStep === 2) {
    localStorage.clear();
    return;
  }

}, [stepState, state]);



const { currentStep, steps } = stepState;

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

export default Wizard;

