import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { store } from "../context/store";
import { fetchHourlyForCurrentPosition } from "../API/requests";

import OneHourCard from "./OneHourCard";

const Hourly = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchHourlyForCurrentPosition(43.89365, 20.34938).then((res) => {
      dispatch({ type: "SET_HOURLY_DATA", payload: res.hourly.slice(0, 24) });
      setIsLoading(false);
    });
  }, [state.city]);

  const { hourlyData } = state;
  return isLoading ? (
    <View>
      <Text>Loading</Text>
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
    borderTopWidth: 1,
    paddingTop: 10,
    backgroundColor: "#008996",
  },
});

export default Hourly;
