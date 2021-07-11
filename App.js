import { StatusBar } from "expo-status-bar";
import React from "react";
import CustomerHome from "./Components/CustomerHome/CustomerHome";
import CardsCarousel from "./Components/CustomerHome/CardsCarousel";
import { StyleSheet, Text, View } from "react-native";
import AddEditListingsPage from "./Components/AddEditListingsPage/AddEditListingsPage";
import ListingsPageCustomerView from "./Components/ListingsPageCustomerView/ListingsPageCustomerView";
import Navbar from "./Components/Navbar/Navbar";

export default function App() {
  return (
    <View style={styles.container}>
      <Navbar />
      {/* <CustomerHome />
      <CardsCarousel /> */}
      {/* <AddEditListingsPage /> */}
      {/* <ListingsPageCustomerView /> */}
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
