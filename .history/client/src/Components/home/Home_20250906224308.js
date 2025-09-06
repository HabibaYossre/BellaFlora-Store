import "./Home.css";
import Subscribe from "../Subscribe/Subscribe";
import Marquee from "../Marquee/Marquee";
import Shipping from "../Shipping/Shipping";
import FAQ from "../FAQ/FAQ";
import Main from "../main/Main";
import Ocassions from "../ocassions/Ocassions";
import AboutUs from "../aboutUs/AboutUs";
import FollowUs from "../followUs/FollowUs";

import React from 'react';
import "./Home.css"; 
import Deals from "../deals/Deals";

function Home() {
  return (
    <>
      <Main></Main>
      <Ocassions></Ocassions>
      <AboutUs></AboutUs>
      <Marquee></Marquee>
      <FollowUs></FollowUs>
      <Deals></Deals>
      <Shipping></Shipping>
      <FAQ></FAQ>
      <Subscribe></Subscribe>
    </>
  );
}

export default Home;


