import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
  name: "caleb",
};

export const GlobalProvider = createContext(initialState);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   console.warn(state);
  return (
    <GlobalProvider.Provider
      value={{
        state,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};
