import React from "react";
import "./About.css"
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import FollowUs from "../followUs/FollowUs";
import AboutUs from "../aboutUs/AboutUs";
import Marquee from "../Marquee/Marquee";
function About(){
    return(
        <>
     

           <AboutUs />
    <div className="FAQs">
      <h2 className='faq'>Our Team</h2>
      <p className='look'>Meet The Passionate<span> <br/>Team Behind Our Successes</span></p>
       </div>
       <div className="characters-img">
<div className="character">
    <img src="/images/photo-1599698011977-c08128ff1652.avif" />
    <p>
        Jenny Wilson
        <br/>
    <span>
Founder
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/photo-1585598007006-2995ea95e22a.avif" />
    <p>
       Bassiey Coper
        <br/>
    <span>
Store Maneger
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/photo-1597614456977-f8fdcb73e8a0.avif" />
    <p>
       Robert Fox
        <br/>
    <span>
Floral Designer
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/photo-1709980699771-955cea4ce1fc.avif" />
    <p>
      Jane Cooper
        <br/>
    <span>
Floral Designer
    </span>
    </p>

</div>

       </div>
<Marquee />
      <FollowUs></FollowUs>
       <Shipping/>
       <Subscribe></Subscribe>

      </>
    )
} 
export default About;
