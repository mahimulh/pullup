import * as React from "react";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

// console.log(process.env);

//NEED TO FIX:
//Search Bar moves up once keyboard opens

export default function CustomerHome() {
  // const DismissKeyboard = ({ child }) => (
  //   <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
  //     {child}
  //   </TouchableWithoutFeedback>
  // );

  const [pin, setPin] = React.useState({
    latitude: 43.209524,
    longitude: -79.869275,
  });
  const [region, setRegion] = React.useState({
    latitude: 43.209524,
    longitude: -79.869275,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={{ flex: 1 }}>
      <GooglePlacesAutocomplete
        placeholder="Find a parking spot"
        fetchDetails={true}
        listViewDisplayed="auto"
        GooglePlacesSearchQuery={{
          rankby: "distance",
        }}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          setRegion({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          });
        }}
        query={{
          key: process.env.API_KEY, //Add API Key Here
          language: "en",
          components: "country:can",
          types: "establishment",
          radius: 30000,
          location: `${region.latitude}. ${region.longitude}`,
        }}
        styles={{
          container: {
            marginTop: 30,
            flex: 1,
            position: "absolute",
            alignSelf: "center",
            width: "90%",
            zIndex: 1,
          },
          listView: { backgroundColor: "white" },
        }}
      />

      <ScrollView scrollEventThrottle={16}>
        <View>
          <Text
            style={{
              marginTop: "170%",
              fontSize: 24,
              fontWeight: "700",
              paddingHorizontal: 20,
            }}
          >
            What can we help you find?
          </Text>
        </View>
      </ScrollView>

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 43.209524,
          longitude: -79.869275,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider="google"
      >
        <Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude,
          }}
        />

        <Marker
          coordinate={{
            latitude: 43.222409,
            longitude: -79.86528,
          }}
          title="Parking on Blackhorne Avenue"
          description="2 Parking Spots Available"
          rating="4"
          reviews="55"
        />

        <Marker
          coordinate={{
            latitude: 43.226381,
            longitude: -79.850027,
          }}
          title="Parking on Upper Sherman"
          description="1 Large Parking Spot Available"
          rating="4.4"
          reviews="75"
        />
      </MapView>
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
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  searchBox: {
    position: "absolute",
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#fff",
    width: "90%",
    alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
});
