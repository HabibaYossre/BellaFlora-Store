import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Marquee from '../Marquee/Marquee';
import Shipping from '../Shipping/Shipping';
import FAQ from '../FAQ/FAQ';
import Main from '../main/Main';
import Occassions from "../occasions/Ocassions";
import AboutUs from "../aboutUs/AboutUs";
import FollowUs from "../followUs/FollowUs";

// import Header from "../Header";


function Home() {

  return (

 
   <>
     
     <Main></Main>
    <Occassions></Occassions>
    <AboutUs></AboutUs>
    <Marquee></Marquee>
    <FollowUs></FollowUs>
    <Shipping></Shipping>
    <Subscribe></Subscribe>



    <div className="FAQs">
      <h2 className='faq'>FAQs</h2>
      <p className='look'>Question?<span>Look here.</span></p>
       </div>
<FAQ></FAQ>
  

 

</>

      );
};

    
 

export default Home;