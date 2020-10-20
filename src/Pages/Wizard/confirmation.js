import React, {useEffect, useContext, useState} from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import {FirebaseContext} from '../../Firebase/FirebaseContext';
import { StateContext } from '../../StateContext';
import {FilterdSoups} from '../../Utilities';
import ReceiptCard from '../../Components/ReceiptCard';


const ConfirmationStyling = styled.div.attrs({
    className: "w-full h-screen",
  })`
    & {
       main {
           ${tw`mt-32 mr-16 ml-16`}
       }
    }
  `;

const Confirmation = () => {
    const {state, updateState} = useContext(StateContext);
    const firebase = useContext(FirebaseContext);
    const {orderId} = state;
    const [data, setData] = useState(false);
    const SoppAntal = data ? FilterdSoups(data.soupe) : "";
    console.log(SoppAntal);

    useEffect(() => {
       
        const getdoc = async () => {
              const db = firebase.firestore();
              var docRef = await db.collection("orders").doc(`${orderId}`);
          
              docRef.get().then(function(doc) {
                  if (doc.exists) {
                      console.log("Document data:", doc.data());
                      setData(doc.data())
                  } else {
                      console.log("No such document!");
                  }
              }).catch(function(error) {
                  console.log("Error getting document:", error);
              });
          }
          getdoc()
    }, [])

    
    return (
        <ConfirmationStyling>
        
            Confirmation
            
            {data  ?
            <main>
               <ReceiptCard 
                    adress={data.deliveryinfo.Adress} 
                    ort={data.deliveryinfo.Ort} 
                    datum={data.deliveryinfo.date ? data.deliveryinfo.date : data.deliveryinfo.leveranstyp} 
                    tid={data.deliveryinfo.tid ? data.deliveryinfo.tid : "ingen tid satt"} 
                    leveransMeddelande={data.deliveryinfo.leveransmeddelande} 
                    soppor={data.soupe.soupe} 
                    antal={SoppAntal} 
                    orderId={orderId}
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