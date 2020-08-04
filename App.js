//react
import React from "react";

//state & navigation
import { StateProvider } from "./src/context/store";
import Navigator from "./src/routes/HomeStackNavigation";

export default function App() {
  return (
    <StateProvider>
      <Navigator />
    </StateProvider>
  );
}
