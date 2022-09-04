import React, { createContext, useReducer } from "react";
import { color, image } from "../constants";
import { AppReducer } from "./AppReducer";

const initialState = {
  store: [
    {
      id: 1,
      name: "Off-White Coat",
      remaining: 1,
      monthlyPayment: "$210",
      image: image.offWhite,
      color: color.primary,
    },
    {
      id: 2,
      name: "Adibas Shoes",
      remaining: 2,
      monthlyPayment: "$290",
      image: image.adidas,
      color: color.secondary,
    },
    {
      id: 3,
      name: "Casio Watch",
      remaining: 3,
      monthlyPayment: "$255",
      image: image.casio,
      color: color.tertiary,
    },
  ],
};

export const GlobalProvider = createContext(initialState);

export const GlobalContext = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   console.warn(state);
  return (
    <GlobalProvider.Provider
      value={{
        state,
        store: state.store,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};
