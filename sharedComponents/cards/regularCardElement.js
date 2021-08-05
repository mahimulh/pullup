//either one card type or multiple ones for different pages
//these are the listing cards

import styled from 'styled-components';

export const Listing = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    height: 120;
    border-radius: 22;
    border-color: #1F97A8;
    border-width: 1;
    justify-content: center;
    align-items: center;
    margin-bottom: 10;
    margin-top: 10;
`

export const ListingImage = styled.Image`
    height: 80;
    width: 100;
    border-radius: 11;
`

export const ListingLocation = styled.Text`
    padding-left: 20;
    width: 150;
    font-size: 15;
    color: #1F97A8;
    text-align: left;     
`

export const ListingPrice = styled.Text`
    padding-left: 0;
    width: 80;
    overflow: hidden;
    flex-direction: column;
    text-align: left;
    color: #1F97A8;
    font-size: 30;
`