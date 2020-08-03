import React, { createContext, useReducer } from "react";

const initialState = {
  city: "Cacak",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_LOCATION":
      return { ...state, city: action.payload };
    default:
      return state;
  }
};

const store = createContext(initialState);

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <store.Provider value={{ state, dispatch }}>{children}</store.Provider>;
};

export { store, StateProvider };
