import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";

import Animated from "react-native-reanimated";
import BottomSheet from "reanimated-bottom-sheet";

export default function AddEditListingsPage() {
  const renderContent = () => (
    <View
      style={{
        backgroundColor: "white",
        padding: 10,
        height: 450,
        borderColor: "grey",
        borderWidth: 2,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
    >
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.Button}>
        <Text style={styles.Text}>Choose From Gallery</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => sheetRef.current.snapTo(2)}
      >
        <Text style={styles.cancelText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const sheetRef = React.useRef(null);
  const [title, setTitle] = useState();
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <BottomSheet
        ref={sheetRef}
        initialSnap={2}
        snapPoints={[250, 250, 0]}
        renderContent={renderContent}
        enabledGestureInteraction={true}
        enabledContentTapInteraction={false}
      />
      <ScrollView>
        <View style={styles.stateSection}>
          <Text style={styles.states}>Title:</Text>
          <TextInput
            style={styles.input}
            placeholder="Spacious parking space"
            onChangeText={(val) => setTitle(val)}
          />
        </View>
        <View style={styles.stateSection}>
          <Text style={styles.states}>Address:</Text>
          <TextInput style={styles.input} placeholder="2 King Street West" />
        </View>
        <View style={styles.stateSection}>
          <Text style={styles.states}>Spots Available:</Text>
          <TextInput
            style={styles.input}
            placeholder="2"
            keyboardType="numeric"
          />
        </View>
        <TouchableOpacity
          value={isSelected}
          onValueChange={setSelection}
          style={styles.Button}
          onPress={() => sheetRef.current.snapTo(0)}
        >
          <Text style={styles.Text}>Add Photos</Text>
        </TouchableOpacity>
        <View style={styles.stateSection}>
          <View style={{ flexDirection: "column" }}>
            <Text style={styles.states}>Description:</Text>
            <TextInput
              multiline
              style={styles.description}
              placeholder="Add a description"
            />
          </View>
        </View>
        <TouchableOpacity style={styles.Button}>
          <Text style={styles.Text}>Dates Available</Text>
        </TouchableOpacity>
        <View style={styles.stateSection}>
          <Text style={styles.states}>Price/Hour:</Text>
          <TextInput
            style={styles.input}
            placeholder="$5"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={setSelection}
            style={styles.checkbox}
          ></CheckBox>
          <Text style={styles.label}>
            Agree to Terms {isSelected ? "👍" : "👎"}
          </Text>
        </View>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submit}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    marginTop: 50,
  },
  stateSection: {
    flexDirection: "row",
    marginBottom: 20,
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
    width: "100%",
  },
  description: {
    marginTop: 10,
    paddingHorizontal: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "#777",
    width: 370,
    fontSize: 15,
  },
  Button: {
    justifyContent: "center",
    // alignSelf: "center",
    borderWidth: 2,
    borderColor: "#1F97A8",
    borderRadius: 30,
    width: "100%",
    height: 50,
    marginTop: 10,
    marginBottom: 20,
  },
  Text: {
    color: "#1F97A8",
    fontSize: 25,
    // margin: 5,
    justifyContent: "center",
    alignSelf: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  checkbox: {
    // width: 50,
    alignSelf: "center",
  },
  label: {
    fontSize: 15,
    margin: 5,
  },
  submitButton: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#1F97A8",
    // borderWidth: 2,
    // borderColor: "#1F97A8",
    borderRadius: 30,
    height: 50,
    width: "100%",
  },
  submit: {
    fontSize: 25,
    alignSelf: "center",
    color: "#FFFFFF",
  },
  cancelButton: {
    justifyContent: "center",
    alignSelf: "center",
    backgroundColor: "#1F97A8",
    // borderWidth: 2,
    // borderColor: "#1F97A8",
    borderRadius: 30,
    height: 50,
    width: "100%",
    marginTop: 10,
    marginBottom: 20,
  },
  cancelText: {
    fontSize: 25,
    alignSelf: "center",
    color: "#FFFFFF",
  },
});
