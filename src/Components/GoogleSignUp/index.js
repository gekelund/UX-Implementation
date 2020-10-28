import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../../StateContext';
import { createOrder } from '../../Utilities';
import styled from "styled-components";
import tw from "tailwind.macro";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import GoogleIcon from '../../SoupImages/google-icon.svg';


const SignInButtonStyle = styled.div.attrs({
    className: "w-full h-auto flex flex-column justify-center",
  })`
    & {
        button {
            ${tw`w-64 h-16 bg-white hover:bg-green-400 text-gray-900 font-normal py-4 px-8 rounded-full m-10 shadow flex justify-between items-center`}
            span {
                ${tw`mr-16`}
                img {
                    ${tw`mr-16`}
                }
            }
        }
      
        
    }
  `;

const GoogleSignUp = () => {
    const firebase = useContext(FirebaseContext);
    const { state, updateState } = useContext(StateContext);
    const [message, setMessage] = useState('');
    const history = useHistory()
    const db = firebase.firestore();

    useEffect(() => {
        let State = JSON.parse(localStorage.getItem("State"));
        updateState(State);
    }, [])

    useEffect(() => {
        localStorage.setItem('State', JSON.stringify(state));
    }, [state])

    const onGoogleSignUp = async () => {

        const provider = new firebase.auth.GoogleAuthProvider();
       
           await firebase.auth().signInWithPopup(provider)
            .then(function(result) {
                let userId = result.user.uid
                createOrder(userId, db, state, updateState, history, firebase);

            })
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            });
}

    const handleGuest = async () => {
        await firebase.auth().signInAnonymously()
            .then(() => setMessage('Success!'))
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            });

          await firebase.auth().onAuthStateChanged(async function(user) {
            let userId = user.uid;
            console.log(userId)

            const { id } = await db.collection('orders').add(state);
            
   
            await db.doc(`users/${userId}`).set({
            orders: firebase.firestore.FieldValue.arrayUnion(id),
            })
            .then(() => updateState({orderId: id}))
            .then(() =>  history.push(`/wizard`))
            .catch(function(error) {
                    console.log("Error getting document:", error);
                });
           
           

          } ) 
    }

  
    return (
        <SignInButtonStyle>
            <div>
                <button onClick={onGoogleSignUp}><img src={GoogleIcon} alt="google-icon" style={{width: "30px", height: "30px"}}/><span> Google</span></button>
                <button onClick={handleGuest}><span><PersonOutlineIcon style={{fontSize: 30}} /></span> <span>Gäst</span></button>
                <p>{message}</p>
            </div>
        </SignInButtonStyle>
    )

}

export default GoogleSignUp;