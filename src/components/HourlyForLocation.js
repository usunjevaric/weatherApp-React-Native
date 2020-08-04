//react
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, FlatList, ActivityIndicator } from "react-native";

//data
import { store } from "../context/store";
import { fetchHourlyForCurrentPosition } from "../API/requests";
import { SET_HOURLY_DATA } from "../context/variables";
//components
import OneHourCard from "./OneHourCard";

const Hourly = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(state.currentWeatherCast).length !== 0) {
      //wait for data from service
      const { lat, lon } = state.currentWeatherCast.coord;
      setIsLoading(true);
      fetchHourlyForCurrentPosition(lat, lon, state.celsius).then((res) => {
        dispatch({ type: SET_HOURLY_DATA, payload: res.hourly.slice(0, 24) });
        setIsLoading(false);
      });
    }
  }, [state.currentWeatherCast]);
  //if user change unit, currentWeatherCast was change so no need to add celsius variable

  const { hourlyData } = state;
  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color='white' />
    </View>
  ) : (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.dt}`}
        data={hourlyData}
        horizontal={true}
        renderItem={({ item }) => (
          <OneHourCard temp={item.temp} time={item.dt} icon={item.weather[0].icon} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopColor: "#eee",
    borderTopWidth: 0.2,
    paddingTop: 10,
    backgroundColor: "#008996",
  },
});

export default Hourly;
