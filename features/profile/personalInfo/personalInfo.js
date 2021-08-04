//renter's profile from customer perspective

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from './personalInfoElements';

import propic2 from '../../assets/me.jpeg';
import chatIcon from '../../assets/chat-white.png';
import editIcon from '../../assets/draw.png';
import deleteIcon from '../../assets/delete.png';
import placeholderIcon from '../../assets/placeholderImage.png';
import steeringWheel from '../../assets/steering-wheel.png';

// import ListingCard from './ListingCard';

export default function personalInfo() {
    //insert function here
    const [image, setImage] = useState();
    const [location, setLocation] = useState();
    const [price, setPrice] = useState();

    useEffect(() => {
        setImage(placeholderIcon);
        setLocation("4 St Anthony Pl, Hamilon, ON L9C 0E4");
        setPrice("5");
    });

    return (
        <ScrollView>
            <Container>
                <View styles={styles.top}>
                    <View style={styles.horizontal}>
                        <View style={styles.profilePictureContainer}>
                            <Image source={propic2} style={styles.picture} />
                        </View>
                        <View style={styles.textContainer}>
                            <TouchableOpacity>
                                <Text style={styles.editButton}>Edit</Text>
                            </TouchableOpacity>
                            <Text style={styles.username} numberOfLines={1}>Mahimul Hoque</Text>
                            <Text style={styles.subText}>Rating: x/5</Text>
                        </View>
                        <View style={styles.editButtonContainer}>
                        </View>
                    </View>
                </View>
                {/* About User */}
                <View style={styles.about}>
                    <Text style={styles.subTitle}>About Me</Text>
                    <Text style={styles.subText}>Hi, I am a student currently on internship at AMD. Because of my internship, I have to travel to Markham from Hamilton so I am looking for parking spots close to my work!</Text>
                </View>
                {/* If user has listings, show listings as well*/}
                <View style={styles.rowContainer}>
                    <Text style={styles.subTitle}>My Listings</Text>
                    {/* <ListingCard 
                        image={image}
                        location={location}
                        price={price}
                    /> */}
                </View>
            </Container>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    top: {
        display: 'flex',
        height: 100,
        overflow: 'hidden',
        justifyContent: 'center'
    },
    horizontal: {
        flexDirection: 'row',
    },
    profilePictureContainer: {
        display: 'flex',
        width: 100,
        overflow: 'hidden'
    },
    picture: {
        width: 80,
        height: 80,
        borderRadius: 45,
        borderColor: '#1F97A8',
        borderWidth: 4,
    },
    textContainer: {
        width: '70%',
        overflow: 'hidden',
        marginLeft: 10
    },
    editButton: {
        fontSize: 15,
        textDecorationLine: 'underline',
        color: '#878080',
        textAlign: 'right'
    },
    username: {
        fontSize: 25,
        color: '#1F97A8'
    },
    subText: {
        color: '#878080',
        fontSize: 15,
        textAlign: 'justify'
    },
    about: {
        marginTop: 25
    },
    subTitle: {
        fontSize: 20,
        color: '#1F97A8',
        marginBottom: 5
    },

    topContainer: {
        flexDirection: 'row'
    },
    nameRatingContainer: {
        flexDirection: 'column',
        paddingLeft: 10,
        paddingTop: 10
    },
    name: {
        color: '#1F97A8',
        fontWeight: 'bold',
        fontSize: 20
    },
    subText_1: {
        color: '#878080',
        lineHeight: 18,
        fontSize: 15
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40
    },
    touchContainer: {
        marginTop: 0,
        marginLeft: 30,
        marginRight: 0,
        width: 130,
        height: 40,
        backgroundColor: "#1F97A8",
        borderRadius: 22,
        borderColor: 'white',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "normal",
        textAlign: 'center',
        marginRight: 4,
    },
    rowContainer: {
        marginTop: 20
    },
    rowTitle: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1F97A8'
    },
    descriptionInput: {
        borderColor: '#1F97A8',
        borderWidth: 1,
        marginTop: 5
    },
    subRowContainer: {
        height: 100
    },
    touchContainer_1: {
        marginTop: 0,
        marginLeft: 0,
        marginRight: 0,
        width: 140,
        height: 40,
        backgroundColor: "#1F97A8",
        borderRadius: 22,
        borderColor: 'white',
        borderWidth: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topContainer_1: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    listingsContainer: {
        alignItems: 'center',
        marginTop: 10
    },
    listingContainer: {
        height: 130,
        width: '100%',
        borderRadius: 18,
        borderColor: '#1F97A8',
        borderWidth: 1,
        marginBottom: 15,
        justifyContent: 'center'
    },
    editDelContainer: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
        paddingRight: 8,
        paddingTop: 8
    },
    editDel: {
        marginLeft: 5
    },
    spotImage: {
        width: 100,
        height: 85,
        borderRadius: 10,
    },
    textBlock: {
        width: 120,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        marginLeft: 20,
        marginTop: -0
    },
    subTitle_1: {
        fontSize: 20,
        color: '#878080'
    },
    priceBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
    },
    priceBig: {
        color: '#1F97A8',
        fontSize: 30
    },
    priceSmall: {
        color: '#1F97A8',
        fontSize: 20,
        paddingTop: 8
    },
    aboutLogos: {
        width: 20,
        height: 'auto',
        marginRight: 10
    },
    listing: {
        flexDirection: 'row',
        width: '100%',
        height: 120,
        borderRadius: 22,
        borderColor: '#1F97A8',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    listingImage: {
        height: 80,
        width: 100,
        borderRadius: 11
    },
    listingLocation: {
        paddingLeft: 20,
        width: 150,
        fontSize: 15,
        color: '#1F97A8',
        textAlign: 'left'        
    },
    listingPrice: {
        paddingLeft: 0,
        width: 80,
        overflow: 'hidden',
        flexDirection: 'column',
        textAlign: 'left',
        color: '#1F97A8',
        fontSize: 30
    }
});