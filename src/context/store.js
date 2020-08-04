//react
import React, { createContext, useReducer } from "react";

//varables
import {
  CHANGE_LOCATION,
  SET_CURRENT_WEATHER,
  SET_HOURLY_DATA,
  SET_DAILY_DATA,
  SET_UNIT,
} from "./variables";
const initialState = {
  city: "Cacak",
  celsius: true,
  currentWeatherCast: {},
  hourlyData: [],
  dailyData: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return { ...state, city: action.payload };
    case SET_CURRENT_WEATHER:
      return { ...state, currentWeatherCast: action.payload };
    case SET_HOURLY_DATA:
      return { ...state, hourlyData: action.payload };
    case SET_DAILY_DATA:
      return { ...state, dailyData: action.payload };
    case SET_UNIT:
      return { ...state, celsius: action.payload };
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
