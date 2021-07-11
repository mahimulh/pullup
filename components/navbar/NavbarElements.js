import styled from "styled-components";

export const NavContainer = styled.View`
  align-items: center;
  position: absolute;
  bottom: 0;
`;

export const NavNavbar = styled.View`
  justify-content: space-evenly;
  flex-direction: row;
  background-color: #164a6e;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
`;

export const Icons = styled.TouchableOpacity`
  align-items: center;
`;

export const IconText = styled.Text`
  font-size: 10px;
  align-self: center;
  padding-top: 5px;
  color: #c3e0e7;
`;
