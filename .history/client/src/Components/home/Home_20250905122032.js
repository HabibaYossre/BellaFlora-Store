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
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


function Home() {
  return (
<<<<<<< HEAD
    <>
      <Main></Main>
      <Ocassions></Ocassions>
      <AboutUs></AboutUs>
      <Marquee></Marquee>
      {/* <FollowUs></FollowUs> */}
      <Shipping></Shipping>
      <FAQ></FAQ>
      <Subscribe></Subscribe>
    </>
  );
}

export default Home;

 
   <>    
     <Header />
     <Main />
     <Ocassions></Ocassions>
     <AboutUs></AboutUs>
  
     <Marquee></Marquee>
     <FollowUs />
     <Marquee></Marquee>

    <div className="FAQs">
      <h2 className='faq'>FAQs</h2>
      <p className='look'>Question?<span>Look here.</span></p>
       </div>     
      <FAQ></FAQ>
      <Shipping />
      <Subscribe />
      <Footer />

</>

      );
};

    
 

export default Home;

