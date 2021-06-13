import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { BottomPopup } from "./BottomPopup";

const PhotosModal = () => {
  let popupRef = React.createRef();

  const onShowPopup = () => {
    popupRef.show();
  };
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={onShowPopup}>
          <Text style={styles.textSize}>Show Popup</Text>
        </TouchableWithoutFeedback>
        <BottomPopup ref={(target) => (popupRef = target)} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textSize: {
    fontSize: 20,
  },
});

export default PhotosModal;
