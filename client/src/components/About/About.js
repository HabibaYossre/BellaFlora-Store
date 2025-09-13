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
    <img src="/images/istockphoto-843230322-612x612.jpg" />
    <p>
        Jenny Wilson
        <br/>
    <span>
Founder
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/istockphoto-1196693233-612x612.jpg" />
    <p>
       Bassiey Coper
        <br/>
    <span>
Store Maneger
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/istockphoto-918209156-612x612.jpg" />
    <p>
       Robert Fox
        <br/>
    <span>
Floral Designer
    </span>
    </p>

</div>

<div className="character">
    <img src="/images/istockphoto-523149033-1024x1024.jpg" />
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
