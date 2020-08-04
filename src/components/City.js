import React, { useEffect, useState, useContext } from "react";
import { store } from "../context/store";
import { View, Text, StyleSheet } from "react-native";
import { fetchCurrentWetherCast } from "../API/requests";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const City = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetchCurrentWetherCast(state.city).then((res) => {
      dispatch({ type: "SET_CURRENT_WEATHER", payload: res });
      setIsLoading(false);
    });
  }, [state.city]);

  const { currentWeatherCast } = state;
  return isLoading ? (
    <View>
      <Text>Loading...</Text>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.cityName}>
        {currentWeatherCast.name}, {currentWeatherCast.sys.country}
      </Text>
      <Text style={styles.temp}>{Math.round(currentWeatherCast.main.temp)}°C</Text>
      {state.dailyData.length > 0 && (
        <Text style={styles.minMax}>
          {Math.round(state.dailyData[0].temp.max)}/{Math.round(state.dailyData[0].temp.min)}
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

export default City;
