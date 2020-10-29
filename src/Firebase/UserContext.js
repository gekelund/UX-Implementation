import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from './FirebaseContext';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  useEffect(() => {

    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (!authUser) {
        setUser(null);
        return;
      } else return setUser(authUser);
     });

    return () => unsubscribe();
  }, [firebase]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};