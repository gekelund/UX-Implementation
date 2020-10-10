import React, { useContext} from 'react';
import {StepContext} from './wizardContext';
import DeliveryInfo from './deliveryInfo';
import Overview from './overview';
import Confirmation from './confirmation';
import PathHeader from '../../Components/PathHeader';


const Wizard = () => {
const { stepState , updateStepState} = useContext(StepContext);




const Components = [<DeliveryInfo />, <Overview />, <Confirmation />];

const { currentStep, steps } = stepState;



const handleDeliveryInfo = (e) => {
  console.log(e.target.closest('span').id)
  updateStepState({currentStep: 0})
  
}

const handleOverview = () => {
  if(steps[0].completed) {
    updateStepState({currentStep: 1})
  } 
  
}

const handleConfirmation = () => {
  if(steps[0].completed)
  updateStepState({currentStep: 2})
} 



console.log(stepState)

return (
  <div>
  
    <PathHeader 
      handleDeliveryInfo={handleDeliveryInfo} 
      handleOverview={handleOverview} 
      handleConfirmation={handleConfirmation}
    />
    <div>
      {Components[currentStep]}
    </div>
    
  </div>
    
)
}

export default Wizard;

