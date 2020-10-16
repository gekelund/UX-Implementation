import React, {useContext, useLayoutEffect, useEffect} from 'react';
import { StateContext } from '../../StateContext';
import { StepContext } from './wizardContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import OverviewCard from '../../Components/OverviewCard';
import DeliveryOverviewCard from '../../Components/DeliveryOverview';

const OverviewStyling = styled.div.attrs({
    className: "w-full h-screen mt-32 mb-64 flex flex-col items-center",
  })`
    & {
        div {
            ${tw`w-full bg-white text-center text-gray-800 flex flex-col items-center`}
        }
        table {
            ${tw`w-max h-auto bg-white`}
        }
        tbody {
            ${tw`w-full flex flex-col items-start bg-white`}
        }
        td {
            ${tw`p-4 w-full `}
        }
        tr {
            ${tw`w-full text-left`}
        }
        th {
            ${tw`w-full`}
        }
        
    }
  `;

const Overview = () => {
    const { state } = useContext(StateContext);
    const { deliveryinfo, soupe } = state;
    const { stepState , updateStepState} = useContext(StepContext);
    const {steps, currentStep} = stepState;


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useLayoutEffect(() => {
        
        let target = document.querySelector('#payment')
      if(currentStep === 1) {
        window.onscroll = () => {
            console.log(window.pageYOffset)
            if(window.pageYOffset * 3 >= target.getBoundingClientRect().top) {
                console.log("target reached");
                updateStepState(steps[2].access = true);
                updateStepState({currentStep: 1});
            }
        }
    }
      }, []);
    

  console.log(currentStep)
  

    return (
        <OverviewStyling>
            
            <OverviewCard soups={soupe}/>
            <DeliveryOverviewCard deliveryinfo={deliveryinfo} />
            <div id="payment">
                Betalning
               
                
            </div>
            
        </OverviewStyling>
    )
}

export default Overview;