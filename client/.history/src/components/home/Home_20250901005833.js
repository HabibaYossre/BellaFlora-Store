import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Marquee from '../Marquee/Marquee';
import Shipping from '../Shipping/Shipping';
import FAQ from '../FAQ/FAQ';
import Main from '../main/Main';
import Ocassions from "../"
import AboutUs from "./components/aboutUs/AboutUs";
import FollowUs from "./components/followUs/FollowUs";

// import Header from "../Header";


function Home() {

  return (

 
   <>
     {/* <Occassions></Occassions> */}
     <Header></Header>
     
     <Main></Main>
    <Ocassions></Ocassions>
    <AboutUs></AboutUs>
    <Marquee></Marquee>
    <FollowUs></FollowUs>
    <Shipping></Shipping>
    <Subscribe></Subscribe>
<Marquee></Marquee>
<div className="follow-insta">
  <span className='insta-follow'>Follow us </span>
  <p className='insta-p'> Follow Us on <span className='insta-span'> Instagram</span></p>
  
  </div>
   <div className="image-grid">
    <div className="image2-item">
  <div className="image-item">
    <img src="/images/istockphoto-1495626970-612x612.jpg" alt="Image 1" />
  </div>
  <div className="image-item">
    <img src="/images/vecteezy_woman-holding-flower-bouquet_29559015.jpg" alt="Image 2" />
  </div>
 
  </div>
  <div className="image-item-single">
    <img src="/images/pexels-roman-odintsov-6022828.jpg" alt="Image 3" />
  </div>
    
   <div className="image2-item">
  <div className="image-item">
    <img src="/images/pexels-roman-odintsov-6022838.jpg" alt="Image 4" />
  </div>
  <div className="image-item">
    <img src="/images/pexels-emma-bauso-1183828-3585806.jpg" alt="Image 5" />
  </div>
 

  </div>
 
</div>

    <div className="FAQs">
      <h2 className='faq'>FAQs</h2>
      <p className='look'>Question?<span>Look here.</span></p>
       </div>
<FAQ></FAQ>
  

 

</>

      );
};

    
 

export default Home;