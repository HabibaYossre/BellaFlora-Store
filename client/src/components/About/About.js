import React from "react";
import "./About.css"
import Shipping from "../Shipping/Shipping";
import Subscribe from "../Subscribe/Subscribe";
import FollowUs from "../followUs/FollowUs";
import AboutUs from "../aboutUs/AboutUs";
import Marquee from "../Marquee/Marquee";
import { NavLink } from "react-router-dom";
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
    <img src="/images/88f541e7-565d-4dbd-9e37-1f8ab86cf166.jpg" />
    <p>
      Fatma El Zahraa
        <br/>
    <span>
Front End Developer 
    </span>
     <br/>
    <NavLink to="https://github.com/FatmmaELZahraa">https://github.com/FatmmaELZahraa</NavLink>
    </p>
    <div className="character">
    <img src="/images/15dd8908-5436-4dad-9bf2-471ff63464ce.jpg" />
    <p>
     Zeina Waddy
        <br/>
    <span>
Front End Developer 
    </span>
    <br/>
          <NavLink to="https://github.com/zeinawady">https://github.com/zeinawady</NavLink>
    </p>

</div>

</div>

<div className="character">
    <img src="/images/9510eae3-5ad1-4d02-9817-90e42ae9c315.jpg" />
    <p>
        Eman Khaled
        <br/>
    <span>
Back End Developer
    </span>
        <br/>
          <NavLink to="https://github.com/EmanK888">https://github.com/EmanK888</NavLink>
    </p>

</div>


<div className="character">
    <img src="/images/4ce94f2b-370f-4a51-b37c-1103e9538005.jpg" />
    <p>
      Habiba Yousry
        <br/>
    <span>
Back End Developer
    </span>
     <br/>
    <NavLink to="https://github.com/HabibaYossre">https://github.com/HabibaYossre</NavLink>
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
