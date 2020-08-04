import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { store } from "../context/store";
import { fetchDailyForPosition } from "../API/requests";
import OneDayCard from "./OneDayCard";

const FiveDays = () => {
  const { state, dispatch } = useContext(store);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDailyForPosition(43.89365, 20.34938).then((res) => {
      console.log(res.daily[0]);
      dispatch({ type: "SET_DAILY_DATA", payload: res.daily });
      setIsLoading(false);
    });
  }, [state.city]);

  let { dailyData } = state;
  dailyData.shift();
  return isLoading ? (
    <View>
      <Text>Loading...</Text>
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

export default FiveDays;
