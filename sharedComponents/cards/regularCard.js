
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView, Alert} from 'react-native';
import {Listing, ListingImage, ListingLocation, ListingPrice} from './regularCardElement'

import placeholderIcon from '../../assets/icon.png';

export function RegularCard(data){
	return(
		<View>
			<Listing> 
				<ListingImage source={placeholderIcon}/>
				<ListingLocation numberOfLines={3}>{data.location}</ListingLocation> 
				<ListingPrice numberOfLines={1}>${data.price}/hr</ListingPrice>
			</Listing>
		</View>
	)
}