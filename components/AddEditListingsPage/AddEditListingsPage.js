import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function AddEditListingsPage() {
  const [title, setTitle] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. Spacious parking space"
          onChangeText={(val) => setTitle(val)}
        />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Adress:</Text>
        <TextInput style={styles.input} placeholder="e.g. 2 King Stree West" />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Spots Available:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. 2"
          keyboardType="numeric"
        />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Add Photos:</Text>
        <TextInput style={styles.input} placeholder="Upload" />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Description:</Text>
        <TextInput
          multiline
          style={styles.input}
          placeholder="Add a description"
        />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Dates Available:</Text>
        <TextInput style={styles.input} placeholder="Opens Calender" />
      </View>
      <View style={styles.stateSection}>
        <Text style={styles.states}>Price/Hour:</Text>
        <TextInput
          style={styles.input}
          placeholder="e.g. $5"
          keyboardType="numeric"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
  stateSection: {
    flexDirection: "row",
    marginBottom: 14,
  },
  states: {
    fontSize: 25,
    color: "#1F97A8",
  },
  input: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderColor: "#777",
    marginHorizontal: 10,
    // padding: 8,
    // margin: 10,
    width: 200,
  },
});
