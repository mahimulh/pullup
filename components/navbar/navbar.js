import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { NavContainer, NavNavbar, Icons, IconText } from "./NavbarElements";

const fill = "#C3E0E7";
const height = "27px";
const width = "27px";

export default function Navbar() {
  return (
    <NavContainer>
      <NavNavbar>
        <Icons>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill={fill}
          >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </Svg>
          <IconText>Search</IconText>
        </Icons>

        <Icons>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill={fill}
          >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2v4c1.1 0 1.99.9 1.99 2s-.89 2-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-4c-1.1 0-2-.9-2-2s.9-2 2-2zm-2-1.46c-1.19.69-2 1.99-2 3.46s.81 2.77 2 3.46V18H4v-2.54c1.19-.69 2-1.99 2-3.46 0-1.48-.8-2.77-1.99-3.46L4 6h16v2.54zM9.07 16L12 14.12 14.93 16l-.89-3.36 2.69-2.2-3.47-.21L12 7l-1.27 3.22-3.47.21 2.69 2.2z" />
          </Svg>
          <IconText>Explore</IconText>
        </Icons>

        <Icons>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill={fill}
          >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
            <Circle cx="7.5" cy="14.5" r="1.5" />
            <Circle cx="16.5" cy="14.5" r="1.5" />
          </Svg>
          <IconText>Park</IconText>
        </Icons>

        <Icons>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill={fill}
          >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z" />
          </Svg>
          <IconText>Inbox</IconText>
        </Icons>

        <Icons>
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={height}
            viewBox="0 0 24 24"
            width={width}
            fill={fill}
          >
            <Path d="M0 0h24v24H0V0z" fill="none" />
            <Path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
          </Svg>
          <IconText>Profile</IconText>
        </Icons>
      </NavNavbar>
    </NavContainer>
  );
}
