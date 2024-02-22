import React from "react";
import '/Users/dm/Desktop/react-navbar/src/components/Home.css';
import Carousel from "./Carousel";
import SecSpon from "./SecSpon";
import { Carousel2 } from "./Carousel2";
import { SecHost } from "./SecHost";
import { Header } from "./Header";
import CountdownTimer from "./CountdownTimer";


export const Home = () => {
  return (
    <><div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "#000000" }}>
      <Header />
    </div>
    <Carousel />
    <Carousel2 /> 
    <SecHost/>
    <SecSpon /></>
  );
};
