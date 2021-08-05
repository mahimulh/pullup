import styled from 'styled-components';

export const Container = styled.View`
	flex: 1;
	padding-left: 20;
	padding-right: 20;
	padding-top: 30;
	padding-bottom: 20;
	background-color: white;
`

export const Top = styled.View`
	display: flex;
	height: 100;
	overflow: hidden;
	justify-content: center;
`

export const Horizontal = styled.View`
	flex-direction: row;
`

export const ProfilePictureContainer = styled.View`
	display: flex;
	width: 100;
	overflow: hidden;
`

export const Picture = styled.Image`
	width: 80;
	height: 80;
	border-radius: 45;
	border-color: #1F97A8;
	border-width: 4;
`

export const TextContainer = styled.View`
	width: 70%;
	overflow: hidden;
	margin-left: 10;
`

export const EditButton = styled.Text`
	font-size: 15;
	text-decoration-line: underline;
	color: #878080;
	text-align: right;
`

export const Username = styled.Text`
	font-size: 25;
	color: #1F97A8;
`

export const SubText = styled.Text`
	color: #878080;
	font-size: 15;
	text-align: justify;
`

export const EditButtonContainer = styled.View`

`

export const About = styled.View`
	margin-top: 25;
`

export const SubTitle = styled.Text`
	font-size: 20;
	color: #1F97A8;
	margin-bottom: 5;
`

export const RowContainer = styled.Text`
	margin-top: 20;
`

export const Listings = styled.View`
	justify-content: center;
`
