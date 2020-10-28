import React, { useContext, useState, useEffect } from 'react';
import { FirebaseContext } from '../../Firebase/FirebaseContext';

const AdminPage = () => {
const firebase = useContext(FirebaseContext);
const [email, setEmail] = useState(null);
const [password, setPassword] = useState(null);
const handleSubmit = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
}

console.log(firebase)
    return (
        <form>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password" />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}

export default AdminPage;