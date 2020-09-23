import React, { createContext, useContext, useState, useEffect } from 'react';
import { FirebaseContext } from './FirebaseContext';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const firebase = useContext(FirebaseContext);
  const [user, setUser] = useState(null);

  console.log(firebase)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if (!authUser) {
        setUser(null);
        return;
      }

      const dbUser = firebase.firestore().doc(`users/${authUser.uid}`);

      dbUser.get().then((doc) => {
        if (!doc.exists) {
          dbUser.set({});
        }

        dbUser.onSnapshot((snapshot) =>
          setUser({ ...authUser, ...snapshot.data() })
        );
      });
    });

    return () => unsubscribe();
  }, [firebase]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};