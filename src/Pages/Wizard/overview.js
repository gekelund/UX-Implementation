import React, {useContext, useLayoutEffect, useRef } from 'react';
import { StateContext, initialState } from '../../StateContext';
import { StepContext, initialStepState } from './wizardContext';
import styled from "styled-components";
import tw from "tailwind.macro";
import OverviewCard from '../../Components/OverviewCard';
import DeliveryOverviewCard from '../../Components/DeliveryOverview';
import PaymentCard from '../../Components/PaymentCard';
import {UserContext} from '../../Firebase/UserContext';
import {FirebaseContext} from '../../Firebase/FirebaseContext';
import { useHistory} from 'react-router-dom';



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
        div#payment {
            ${tw`mb-32`}
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
    const {orderId} = state;
    const history = useHistory();

  console.log(user)

    const Scrolling = () => {
        let target = document.querySelector('#payment');
        window.onscroll = () => {
            if(window.pageYOffset * 3 >= target.getBoundingClientRect().top) {
                updateStepState(steps[2].access = true);
            }
        }
    }

    

    useLayoutEffect(() => {
            if(!steps[2].access) {
                Scrolling()
            } else return;
      
      }, []);
    

      const handleSwish = async () => {
       
        
        let userId = user?.uid;
        const db = firebase.firestore();
        
        await db.collection('orders').doc(orderId).set(state);
                  
        await db.doc(`users/${userId}`).set({
            orders: firebase.firestore.FieldValue.arrayUnion(orderId),
            
            })
            .then(localStorage.clear())
            .then(() => {
                updateStepState(initialStepState);
                updateState(initialState);
            })
            .then(history.push(`/confirmation/${orderId}`))
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
        
            
      }

      const handleMastercard = async () => {
        let userId = user?.uid;
        const db = firebase.firestore();
        
        await db.collection('orders').doc(orderId).set(state);
                  
        await db.doc(`users/${userId}`).set({
            orders: firebase.firestore.FieldValue.arrayUnion(orderId),
            
            })
          
            .then(() => {
                updateStepState(initialStepState);
                updateState(initialState);
            })
            .then(localStorage.clear())
            .then(history.push(`/confirmation/${orderId}`))
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
      }


    return (
        <OverviewStyling id="order">
            <OverviewCard soups={soupe} orderId={orderId} />
            <DeliveryOverviewCard deliveryinfo={deliveryinfo} />
            
            <div id="payment" >
                <PaymentCard handleSwish={handleSwish} handleMastercard={handleMastercard} />
            </div>
            
        </OverviewStyling>
    )
}

export default Overview;