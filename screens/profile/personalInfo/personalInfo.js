//renter's profile from customer perspective

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { 
  Container,
	Top,
	Horizontal,
	ProfilePictureContainer,
	Picture,
	EditButton,
	Username,
	SubText,
	EditButtonContainer,
	About,
	SubTitle,
	RowContainer,
	TextContainer,
	Listings

} from './personalInfoElements';

import propic2 from '../../../assets/icon.png';
import chatIcon from '../../../assets/icon.png';
import editIcon from '../../../assets/icon.png';
import deleteIcon from '../../../assets/icon.png';
import placeholderIcon from '../../../assets/icon.png';
import steeringWheel from '../../../assets/icon.png';

import { RegularCard } from "../../../sharedComponents/cards/regularCard"

export default function PersonalInfo({ navigation }) {
	//insert function here
	// const [image, setImage] = useState();
	// const [location, setLocation] = useState();
	// const [price, setPrice] = useState();

	// useEffect(() => {
	// 		setImage(placeholderIcon);
	// 		setLocation("4 St Anthony Pl, Hamilon, ON L9C 0E4");
	// 		setPrice("5");
	// });

	return (
		<ScrollView>
			<Container>
				<Top>
					<Horizontal>
						<ProfilePictureContainer>
							<Picture source={propic2}/>
						</ProfilePictureContainer>
						<TextContainer>
							<TouchableOpacity>
								<EditButton
									onPress={() => navigation.navigate('EditPersonalInfo')}
								>
									Edit
								</EditButton>
							</TouchableOpacity>
							<Username numberOfLines={1}>Mahimul Hoque</Username>
							<SubText>Rating: x/5</SubText>
						</TextContainer>
						<EditButtonContainer>
						</EditButtonContainer>
					</Horizontal>
				</Top>
				{/* About User */}
				<About>
					<SubTitle>About Me</SubTitle>
					<SubText>Hi, I am a student currently on internship at AMD. Because of my internship, I have to travel to Markham from Hamilton so I am looking for parking spots close to my work!</SubText>
				</About>
				{/* If user has listings, show listings as well*/}
				<RowContainer>
					<SubTitle>My Listings</SubTitle>
					<Listings>
						<RegularCard 
								image="placeholderIcon"
								location="4 St Anthony Pl, Hamilton, ON L9C0E4"
								price="12"
						/>
						<RegularCard 
								image="placeholderIcon"
								location="4 St Anthony Pl, Hamilton, ON L9C0E4"
								price="12"
						/>
						<RegularCard 
								image="placeholderIcon"
								location="4 St Anthony Pl, Hamilton, ON L9C0E4"
								price="12"
						/>
					</Listings>
				</RowContainer>
			</Container>
		</ScrollView>
	);
}