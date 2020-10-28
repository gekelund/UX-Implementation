import React, {useEffect, useContext, useState} from 'react';
import styled from "styled-components";
import tw from "tailwind.macro";
import {FirebaseContext} from '../../Firebase/FirebaseContext';
import { initialState, StateContext } from '../../StateContext';
import {FilterdSoups} from '../../Utilities';
import ReceiptCard from '../../Components/ReceiptCard';
import PathHeader from '../../Components/PathHeader';
import CountDown from '../../Components/Timer';
import FeedbackCard from '../../Components/FeedbackCard';


const ConfirmationStyling = styled.div.attrs({
    className: "w-full h-full",
  })`
    & {
       main {
           ${tw`h-full pt-32 mr-16 ml-16 pb-32 flex flex-col justify-center bg-gray-200`}
           h1 {
               ${tw`text-center`}
           }
           div#timer {
               ${tw`h-32 flex flex-col justify-center items-center m-8 border-b-2`}
           }
       }
    }
  `;

const Confirmation = ({match}) => {
    const {state, updateState} = useContext(StateContext);
    const firebase = useContext(FirebaseContext);
    const [data, setData] = useState(false);
    const SoppAntal = data ? FilterdSoups(data.soupe) : "";
    const {params} =match;
    const [feedbackText, setFeedbackText] = useState("");
    const [feedbackData, setFeedbackData] = useState("")
   
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

    useEffect(() => {
        if(feedbackData.length > 0) {
            const db = firebase.firestore();
        
            const sendFeedback = async () => {
    
            await db.collection('feedback').doc(`${params.orderID}`).set({feeling: feedbackData, comment: feedbackText })
                      
                .catch(function(error) {
                    console.log("Error getting document:", error);
                });
            }
            sendFeedback();
        }
        
    }, [feedbackData])

    const handleFeedback = (e) => {
        if(e.target.closest('button').id === 'positiv') {
           setFeedbackData('positive');

        } else {
            setFeedbackData('negative');
        }
      
    }

    const handleTextArea = (e) => {
        console.log(e.target.value);
        setFeedbackText(e.target.value)
    }
    
    return (
        <ConfirmationStyling>
        <PathHeader completed={true} />
            
            
            {data  ?
            <main>
                <h1>Tack för din beställning</h1>
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
                <div id="timer">
                    <p>Din beställning levereras om:</p>
                    <CountDown />
                </div>
           {!feedbackData ?      
           <div>
                <FeedbackCard 
                    handleFeedback={handleFeedback} 
                    handleTextArea={handleTextArea}
                />
           </div>
           :
           <div>
               <h1>Tack för din Feedback!</h1>
           </div>
           }
                </main>
                : <p>Loding...</p>}
              
        </ConfirmationStyling>
    )
}

export default Confirmation;