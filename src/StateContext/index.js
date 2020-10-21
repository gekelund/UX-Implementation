import React, { createContext, useReducer } from 'react';


export const StateContext = createContext(null);

export const initialState = {
  completed: false,
  orderId: false,
  soupe: [],
  quantity: 0,
  ref: 0,
  totalPris: 0,
  deliveryinfo: {},
  dateCreate: Date.now() + 7 * 24 * 60 * 60 * 1000,
};

export const StateContextProvider = ({ children }) => {
 /*  const initialState = {
    completed: false,
    orderId: false,
    soupe: [],
    quantity: 0,
    ref: 0,
    totalPris: 0,
    deliveryinfo: {},
    dateCreate: Date.now() + 7 * 24 * 60 * 60 * 1000,
  }; */

  const reducer = (currentState, newState) => ({ ...currentState, ...newState });
  
  const [state, updateState] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, updateState }}>
      {children}
    </StateContext.Provider>
  );
};