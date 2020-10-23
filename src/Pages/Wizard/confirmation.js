import React, {useEffect, useContext, useState} from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import {FirebaseContext} from '../../Firebase/FirebaseContext';
import { initialState, StateContext } from '../../StateContext';
import {FilterdSoups} from '../../Utilities';
import ReceiptCard from '../../Components/ReceiptCard';
import PathHeader from '../../Components/PathHeader';

const ConfirmationStyling = styled.div.attrs({
    className: "w-full h-screen",
  })`
    & {
       main {
           ${tw`mt-32 mr-16 ml-16`}
       }
    }
  `;

const Confirmation = ({match}) => {
    const {state, updateState} = useContext(StateContext);
    const firebase = useContext(FirebaseContext);
    const [data, setData] = useState(false);
    const SoppAntal = data ? FilterdSoups(data.soupe) : "";
    const {params} =match
   
    useEffect(() => {
    
            localStorage.setItem('State', JSON.stringify(initialState))
       
   }, [state])

    const getdoc = async () => {
        const db = firebase.firestore();
        let docRef = await db.collection("orders").doc(`${params.orderID}`);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                setData(doc.data())
                updateState(initialState)
            } else {
                console.log("No such document!");
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }
  
    useEffect(() => {
          getdoc()
    }, [])

    
    return (
        <ConfirmationStyling>
        <PathHeader completed={true} />
            Confirmation
            
            {data  ?
            <main>
               <ReceiptCard 
                    adress={data.deliveryinfo.Adress} 
                    ort={data.deliveryinfo.Ort} 
                    datum={data.deliveryinfo.leveransdatum ? data.deliveryinfo.leveransdatum.toString().substring(0, 10) : data.deliveryinfo.leveranstyp} 
                    tid={data.deliveryinfo.leveranstid ? data.deliveryinfo.leveranstid : "ingen tid satt"} 
                    leveransMeddelande={data.deliveryinfo.leveransmeddelande} 
                    soppor={data.soupe.soupe} 
                    antal={SoppAntal} 
                    orderId={params.orderID}
                    totaltPris={data.totalPris}
               />
               <div>
               <p>Din beställning levereras om:</p>
               <p>Todo: timer</p>
           </div>
           <div>
               <p>Todo: feedback card</p>
           </div>
                </main>
                : <p>Loding...</p>}
              
        </ConfirmationStyling>
    )
}

export default Confirmation;