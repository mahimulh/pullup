import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import parkingSpot from "../../assets/parkingSpot.jpg";
import star from "../../assets/star.png";

export default function CardsCarousel() {
  return (
    <View style={styles.cardsCarousel}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.cardImage}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                }}
                source={parkingSpot}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View
                  style={{
                    // flex: 0.5,
                    // marginLeft: 15,
                    marginHorizontal: 12,
                    overflow: "hidden",
                  }}
                >
                  <Text style={styles.cardTitle}>James St.</Text>
                  <Text style={styles.cardLocation}>Hamilton, ON</Text>
                  <Text style={styles.cardLocation}>Distance: 300 m</Text>
                </View>
                <View>
                  <Text style={styles.cardPrice}>
                    $5<Text style={styles.cardPriceHour}>/hr</Text>
                  </Text>
                  <Text style={styles.review}>
                    <Image source={star}></Image>4.4 stars
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity style={styles.viewProfileButton}>
                  <Text style={{ color: "#1F97A8" }}>VIEW LISTING</Text>
                </TouchableOpacity>
                <View style={{ paddingTop: 5 }}>
                  <TouchableOpacity style={styles.reserveButton}>
                    <Text style={{ color: "white" }}>RESERVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.cardImage}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                }}
                source={parkingSpot}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View
                  style={{
                    // flex: 0.5,
                    // marginLeft: 15,
                    marginHorizontal: 12,
                    overflow: "hidden",
                  }}
                >
                  <Text style={styles.cardTitle}>James St.</Text>
                  <Text style={styles.cardLocation}>Hamilton, ON</Text>
                  <Text style={styles.cardLocation}>Distance: 300 m</Text>
                </View>
                <View>
                  <Text style={styles.cardPrice}>
                    $5<Text style={styles.cardPriceHour}>/hr</Text>
                  </Text>
                  <Text style={styles.review}>
                    <Image source={star}></Image>4.4 stars
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity style={styles.viewProfileButton}>
                  <Text style={{ color: "#1F97A8" }}>VIEW LISTING</Text>
                </TouchableOpacity>
                <View style={{ paddingTop: 5 }}>
                  <TouchableOpacity style={styles.reserveButton}>
                    <Text style={{ color: "white" }}>RESERVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.cardImage}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderTopLeftRadius: 16,
                  borderBottomLeftRadius: 16,
                }}
                source={parkingSpot}
              />
            </View>
            <View>
              <View style={{ flexDirection: "row", padding: 10 }}>
                <View
                  style={{
                    // flex: 0.5,
                    // marginLeft: 15,
                    marginHorizontal: 12,
                    overflow: "hidden",
                  }}
                >
                  <Text style={styles.cardTitle}>James St.</Text>
                  <Text style={styles.cardLocation}>Hamilton, ON</Text>
                  <Text style={styles.cardLocation}>Distance: 300 m</Text>
                </View>
                <View>
                  <Text style={styles.cardPrice}>
                    $5<Text style={styles.cardPriceHour}>/hr</Text>
                  </Text>
                  <Text style={styles.review}>
                    <Image source={star}></Image>4.4 stars
                  </Text>
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity style={styles.viewProfileButton}>
                  <Text style={{ color: "#1F97A8" }}>VIEW LISTING</Text>
                </TouchableOpacity>
                <View style={{ paddingTop: 5 }}>
                  <TouchableOpacity style={styles.reserveButton}>
                    <Text style={{ color: "white" }}>RESERVE</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardsCarousel: {
    marginTop: "115%",
  },
  card: {
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#C3E0E7",
    borderRadius: 18,
    // padding: 12,
    width: 390,
    height: 170,
    marginHorizontal: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1.5,
  },
  cardImage: {
    width: "40%",
  },
  cardTitle: {
    fontSize: 16,
  },
  cardLocation: {
    paddingTop: 4,
    fontSize: 12,
  },
  cardPrice: {
    color: "#1F97A8",
    // paddingTop: 8,
    fontSize: 29,
    marginHorizontal: 28,
  },
  cardPriceHour: {
    color: "#1F97A8",
    fontSize: 20,
  },
  review: {
    marginHorizontal: 12,
    fontSize: 16,
  },
  container: {
    width: "80%",
    alignSelf: "center",
  },
  viewProfileButton: {
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 5,
    borderWidth: 2,
    borderColor: "#1F97A8",
    borderRadius: 18,
  },
  reserveButton: {
    alignItems: "center",
    backgroundColor: "#1F97A8",
    padding: 5,
    borderWidth: 2,
    borderColor: "#1F97A8",
    borderRadius: 18,
  },
});
