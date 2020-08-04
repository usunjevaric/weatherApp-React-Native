//react
import React from "react";

//navigation
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

const HomeStack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <HomeStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#008996",
          },
          headerTintColor: "white",
          headerTitleAlign: "center",
        }}>
        <HomeStack.Screen name='Home' component={HomeScreen} />
        <HomeStack.Screen name='Settings' component={SettingsScreen} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
