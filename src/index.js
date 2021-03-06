import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseProvider } from './Firebase/FirebaseContext';
import { UserProvider } from './Firebase/UserContext';
import { StateContextProvider } from './StateContext';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseProvider>
      <UserProvider>
        <StateContextProvider>
          <App />
        </StateContextProvider>
      </UserProvider>
    </FirebaseProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
