import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';
import { useHistory } from 'react-router-dom';

const GoogleSignUp = () => {
    const firebase = useContext(FirebaseContext);
    const [message, setMessage] = useState('');
    const history = useHistory()
   

   
    const onGoogleSignUp = async () => {

        const provider = new firebase.auth.GoogleAuthProvider();
        
           await firebase.auth().signInWithRedirect(provider)
            .then(() => setMessage('Success!'))
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            })
      
            history.push('/wizard');
    }

    const handleGuest = async () => {
        await firebase.auth().signInAnonymously()
            .then(() => setMessage('Success!'))
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            });

            history.push('/wizard')
    }

    const click = () => {
     
    }
  
    return (
        <div>
            <button onClick={onGoogleSignUp}>Sign up with Google</button>
            <p>{message}</p>
            <button onClick={handleGuest}>Gå vidare som Gäst</button>
            <button onClick={click}>click</button>
        </div>
    )

}

export default GoogleSignUp;

