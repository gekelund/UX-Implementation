import React, {useContext, useLayoutEffect, useEffect} from 'react';
import { StateContext } from '../../StateContext';
import { StepContext } from './wizardContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import OverviewCard from '../../Components/OverviewCard';
import DeliveryOverviewCard from '../../Components/DeliveryOverview';
import PaymentCard from '../../Components/PaymentCard';
import {UserContext} from '../../Firebase/UserContext';
import {FirebaseContext} from '../../Firebase/FirebaseContext';



const OverviewStyling = styled.div.attrs({
    className: "w-full h-screen mt-32 mb-64 flex flex-col items-center",
  })`
    & {
        div {
            ${tw`w-full h-auto bg-white text-center text-gray-800 flex flex-col items-center`}
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
    const { state, updateState } = useContext(StateContext);
    const user  = useContext(UserContext);
    const firebase = useContext(FirebaseContext);
    const { deliveryinfo, soupe } = state;
    const { stepState , updateStepState} = useContext(StepContext);
    const {steps} = stepState;
    
    const Scrolling = () => {
        let target = document.querySelector('#payment');
        window.onscroll = () => {
            console.log(window.pageYOffset)
            if(window.pageYOffset * 3 >= target.getBoundingClientRect().top) {
                updateStepState(steps[2].access = true);
            }
        }
    }

    useEffect(() => {
        if(!steps[2].access) {
            window.scrollTo(0, 0);
        }
    }, [])
    

    useLayoutEffect(() => {
            if(!steps[2].access) {
                Scrolling()
            } else return;
      
      }, []);
    

      const handleSwish = async () => {
        updateStepState(steps[3].completed = true);
        updateStepState(steps[2].completed = true);
        updateStepState(steps[3].access = true);
        updateStepState(steps[2].access = false);
        updateStepState(steps[1].access = false);
        updateStepState(steps[0].access = false);
        updateStepState({currentStep: 3});
        
        let userId = user?.uid;
        const db = firebase.firestore();
        let docRef = db.collection("users").doc(userId);
        console.log(userId)
            docRef.get().then(async function(doc) {
                
                if (doc.exists) {
                    const { id } = await db.collection('orders').add(state);
                    updateState({orderId: id});
                
                    await db.doc(`users/${userId}`).update({
                    orders: firebase.firestore.FieldValue.arrayUnion(id),
                    });
                } else {
                    const { id } = await db.collection('orders').add(state);
                    updateState({orderId: id});
           
                    await db.doc(`users/${userId}`).set({
                    orders: firebase.firestore.FieldValue.arrayUnion(id),
                });
                return;
                }
           
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        
            
      }

      const handleMastercard = () => {
          steps.map(step => {
              if(step.access === true) {
                updateStepState(step.access = false)
              } else updateStepState(step.access = true)
              
          });
        updateStepState(steps[3].completed = true);
        updateStepState(steps[2].completed = true);
        updateStepState(steps[1].completed = true);
        updateStepState(steps[0].completed = true);
        updateStepState({currentStep: 3});
        console.log(stepState)
      }

  
  

    return (
        <OverviewStyling id="order">
            
            <OverviewCard soups={soupe}/>
            <DeliveryOverviewCard deliveryinfo={deliveryinfo} />
            
            <div id="payment">
                <PaymentCard handleSwish={handleSwish} handleMastercard={handleMastercard} />
               
                
            </div>
            
        </OverviewStyling>
    )
}

export default Overview;