import React, {
    useReducer, 
    createContext,
} from 'react';


export const StepContext = createContext(null);
export  const initialStepState = {
  currentStep: 0,
  steps: [
      {
          id: 0,
          completed: false,
          access: true,
        }, 
      {
        id: 1,
        completed: false,
        access: false,
      }, 
      {
        id: 2,
        completed: false,
        access: false,
      },
      {
        id: 3,
        completed: false,
        access: false,
      }  
    ]

};

export const StepContextProvider = ({ children }) => {


  const reducer = (currentState, newState) => ({ ...currentState, ...newState });
  
  const [stepState, updateStepState] = useReducer(reducer, initialStepState);

  return (
    <StepContext.Provider value={{ stepState, updateStepState }}>
      {children}
    </StepContext.Provider>
  );
};