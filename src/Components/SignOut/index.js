import React, { useContext } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';

const SignOutPage = () => {
    const firebase = useContext(FirebaseContext);

    const SignOutUser = () => {
        firebase.auth().signOut()
            .then(() => {
                console.log("signed out");
            })
            .catch((error) => {
                console.error('Sign Out Error', error);
            })
    }

    return (
        <>
            <span onClick={SignOutUser}>Logga ut</span>
        </>
    )
}

export default SignOutPage;