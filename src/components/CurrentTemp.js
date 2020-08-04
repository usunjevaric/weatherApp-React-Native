//react
import React, { useEffect, useState, useContext } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

//data
import { SET_CURRENT_WEATHER } from "../context/variables";
import { store } from "../context/store";
import { fetchCurrentWetherCast } from "../API/requests";

const CurrentTemp = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchCurrentWetherCast(state.city, state.celsius).then((res) => {
      dispatch({ type: SET_CURRENT_WEATHER, payload: res });
      setIsLoading(false);
    });
  }, [state.city, state.celsius]);

  const { currentWeatherCast } = state;
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.cityName}>
        {currentWeatherCast.name}, {currentWeatherCast.sys.country}
      </Text>
      <Text style={styles.temp}>
        {Math.round(currentWeatherCast.main.temp)}°{state.celsius ? "C" : "F"}
      </Text>
      {state.dailyData.length > 0 && (
        <Text style={styles.minMax}>
          {Math.round(state.dailyData[0].temp.max)}°{state.celsius ? "C" : "F"}/
          {Math.round(state.dailyData[0].temp.min)}°{state.celsius ? "C" : "F"}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#008996",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  cityName: {
    color: "white",
    fontSize: 30,
  },
  temp: {
    color: "white",
    fontSize: 50,
    marginTop: 20,
  },
  minMax: {
    marginTop: 20,
    color: "white",
    fontSize: 18,
  },
});

export default CurrentTemp;
