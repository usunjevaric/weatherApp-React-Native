//react
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

//data
import { store } from "../context/store";
import { fetchDailyForPosition } from "../API/requests";
import { SET_DAILY_DATA } from "../context/variables";

//components
import OneDayCard from "./OneDayCard";

const SevenDays = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (Object.keys(state.currentWeatherCast).length !== 0) {
      const { lat, lon } = state.currentWeatherCast.coord;
      setIsLoading(true);
      fetchDailyForPosition(lat, lon, state.celsius).then((res) => {
        dispatch({ type: SET_DAILY_DATA, payload: res.daily });
        setIsLoading(false);
      });
    }
  }, [state.currentWeatherCast]);

  let { dailyData } = state;

  return isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator size='large' color='white' />
    </View>
  ) : (
    <View style={styles.container}>
      {dailyData.map((item) => (
        <OneDayCard key={item.dt} {...item} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: "#008996",
    paddingHorizontal: 20,
  },
});

export default SevenDays;
