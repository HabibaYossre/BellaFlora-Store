import React from 'react';
import "./Home.css"; 
import Header from '../Header/Header';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Marquee from '../Marquee/Marquee';
import Shipping from '../Shipping/Shipping';
import FAQ from '../FAQ/FAQ';
import Ocassions from '../occasions/Ocassions';
import Main from '../main/Main';
import AboutUs from '../aboutUs/AboutUs';
import FollowUs from '../followUs/FollowUs';












function Home() {

  return (

 
   <>
     {/* <Occassions></Occassions> */}
     <Header />
     <Main />
     <Ocassions></Ocassions>
       <AboutUs></AboutUs>
     {/* <Ocassions></Ocassions>
    <AboutUs></AboutUs>
    <Marquee></Marquee>
    <FollowUs></FollowUs>
    <Shipping></Shipping>
    <Subscribe></Subscribe>
    <Footer></Footer> */}
     
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