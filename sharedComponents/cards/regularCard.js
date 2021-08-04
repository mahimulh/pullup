
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Listing, ListingImage, ListingLocation, ListingPrice} from './regularCardElement'

function regularCard(data){
    // var location = data.location.toString();
    // console.log(data.location.toString());
    return (
        <Listing> 
            {/* <ListingImage source={data.image}/>
            <ListingPrice numberOfLines={1}>${data.price}/hr</ListingPrice> */}
            {/* <ListingLocation  numberOfLines={3}>{data.location}</ListingLocation> */}
        </Listing>
    )
}

export default regularCard;