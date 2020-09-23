import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';

const GoogleSignUp = () => {

    const firebase = useContext(FirebaseContext);
    const [message, setMessage] = useState('');

    const onGoogleSignUp = () => {

        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithRedirect(provider)
            .then(() => setMessage('Success!'))
            .catch((error) => {
                setMessage(`Failed: ${error.message}`)
            })
    };

    return (
        <div>
            <button onClick={onGoogleSignUp}>Sign up with Google</button>
            <p>{message}</p>
        </div>
    )

}

export default GoogleSignUp;

