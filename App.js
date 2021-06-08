import { StatusBar } from "expo-status-bar";
import React from "react";
import CustomerHome from "./Components/CustomerHome/CustomerHome";
import CardsCarousel from "./Components/CustomerHome/CardsCarousel";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <CustomerHome />
      <CardsCarousel />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
