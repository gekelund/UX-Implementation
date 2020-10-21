import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';
import { StateContext } from '../../StateContext';
import { createOrder } from '../../Utilities';

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
        localStorage.setItem('wizardState', JSON.stringify(state));
        localStorage.removeItem('State');
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
            .then(() =>  history.push(`/wizard/${id}`))
            .catch(function(error) {
                    console.log("Error getting document:", error);
                });
           
           

          } ) 
    }

   
    console.log(state)
  
    return (
        <div>
            <button onClick={onGoogleSignUp}>Sign up with Google</button>
            <button onClick={handleGuest}>Gå vidare som Gäst</button>
            <p>{message}</p>
        </div>
    )

}

export default GoogleSignUp;

