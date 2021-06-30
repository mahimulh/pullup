import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  CheckBox,
  TouchableOpacity,
  ScrollView,
  Button,
  Image,
} from "react-native";

import parkingSpot from "../../assets/parkingSpot.jpg";
import star from "../../assets/star.png";
import profile from "../../assets/MeetPatel1.jpg";

export default function ListingsPageCustomerView() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.photoContainer}>
          <Image style={styles.photo} source={parkingSpot} />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.parkingSpotInformation}>
            <Text style={styles.title}>Spacious parking space</Text>
            <Text style={styles.parkingSpotInformationText}>
              2 King Street West, Hamilton, ON L9A 5B6
            </Text>
            <Text style={styles.parkingSpotInformationText}>
              Spots Available:{" "}
              <Text style={styles.spotsAvailableNumber}>1</Text>
            </Text>
            <Text style={styles.parkingSpotInformationText}>Description:</Text>
          </View>
          <View style={styles.renterInformation}>
            <Text style={styles.price}>
              $5<Text style={styles.pricePerHour}>/hr</Text>
            </Text>
            <Text style={styles.review}>
              <Image style={styles.star} source={star}></Image>4.4 stars
            </Text>
            <TouchableOpacity style={styles.profileContainer}>
              <Image style={styles.profile} source={profile}></Image>
              <Text style={styles.profileName}>Meet Patel</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* <View style={styles.parkingSpotInformation}> */}
        <View style={styles.descriptionTextContainer}>
          <Text style={styles.descriptionText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Text>
        </View>
        {/* </View> */}
        <TouchableOpacity style={styles.reserveButton}>
          <Text style={styles.reserveButtonText}>Reserve</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    alignContent: "center",
    width: "100%",
  },
  photoContainer: {
    marginTop: 0,
    width: "100%",
    height: 320,
    overflow: "hidden",
  },
  photo: {
    width: 450,
    height: "100%",
  },
  textContainer: {
    flexDirection: "row",
    marginTop: 10,
    width: "90%",
    alignSelf: "center",
  },
  parkingSpotInformation: {
    maxWidth: "55%",
  },
  title: {
    color: "#1F97A8",
    fontSize: 18,
    marginBottom: 17,
    fontWeight: "bold",
  },
  parkingSpotInformationText: {
    color: "#1F97A8",
    fontSize: 15,
    marginBottom: 17,
  },
  spotsAvailableNumber: {
    fontWeight: "bold",
  },
  descriptionTextContainer: {
    alignSelf: "center",
    borderWidth: 2,
    borderColor: "#70707096",
    borderRadius: 15,
    width: "90%",
  },
  descriptionText: {
    fontSize: 15,
    padding: 10,
  },

  renterInformation: {
    marginHorizontal: 70,
  },
  price: {
    color: "#1F97A8",
    fontSize: 30,
    marginBottom: 0,
    alignSelf: "center",
  },
  pricePerHour: {
    fontSize: 20,
    alignSelf: "center",
  },
  review: {
    marginTop: 0,
    alignSelf: "center",
  },
  star: {
    width: 15,
    height: 15,
  },
  profileContainer: {
    marginTop: 5,
    marginBottom: 0,
    alignSelf: "center",
  },
  profile: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderColor: "#164A6E",
    borderWidth: 1,
    alignSelf: "center",
  },
  profileName: {
    fontSize: 13,
    color: "#164A6E",
    alignSelf: "center",
  },
  reserveButton: {
    marginTop: 15,
    marginBottom: 20,
    alignSelf: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 18,
    borderColor: "#164A6E",
    backgroundColor: "#164A6E",
    width: 100,
    height: 35,
  },
  reserveButtonText: {
    fontSize: 18,
    alignSelf: "center",
    color: "#C3E0E7",
  },
});
