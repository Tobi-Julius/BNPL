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
  shopProduct: [
    {
      id: 4,
      imageUri1:
        "https://images.pexels.com/photos/10077898/pexels-photo-10077898.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      imageUri2:
        "https://images.pexels.com/photos/904350/pexels-photo-904350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "3.0 Off Court Leather",
      subTitle: "Off-White™ Official Store",
      price: "840",
      productInfo:
        "Virgil Abloh—Off-Whites founder and creative director—wanted to create a tennis shoe with a late 1980s and early 1990s aesthetic.Virgil Abloh—Off-Whites founder and creative director—wanted to create a tennis shoe with a late 1980s and early 1990s aesthetic",
    },
    {
      id: 5,
      imageUri1:
        "https://images.pexels.com/photos/1039518/pexels-photo-1039518.jpeg?auto=compress&cs=tinysrgb&w=600",
      imageUri2:
        "https://images.pexels.com/photos/7945660/pexels-photo-7945660.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Adibas Trainer & bag",
      subTitle: "Adibas™ Official Store",
      price: "1160",
      productInfo:
        "Carry yourself in comfort and style with our range of adidas women's sports bags, gym bags and backpacks. Buy online today at  .com.my.Carry yourself in comfort and style with our range of adidas women's sports bags, gym bags and backpacks. Buy online today at .com.my",
    },
    {
      id: 6,
      imageUri1:
        "https://images.pexels.com/photos/6180640/pexels-photo-6180640.jpeg?auto=compress&cs=tinysrgb&w=600g",
      imageUri2:
        "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Casio wrist and wall watch",
      subTitle: "Casio™ Official Store",
      price: "1020",
      productInfo:
        "Get Unisex Casio watches price in Lagos Island nigeria & for sale on OList | the best quality Casio designers water resistant wrist watch at the best price.Get Unisex Casio watches price in Lagos Island nigeria & for sale on OList | the best quality Casio designers water resistant wrist watch at the best price",
    },
  ],
  deliveryAdress: {
    area: "10465 Talbot Lane Bronx",
    state: "New Year City (NYC)",
  },
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
        shopProduct: state.shopProduct,
        deliveryAdress: state.deliveryAdress,
      }}
    >
      {children}
    </GlobalProvider.Provider>
  );
};
