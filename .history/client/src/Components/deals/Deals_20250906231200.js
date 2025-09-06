import React from 'react'
import { Link } from "react-router-dom";
import Card from '../ui/Card'
import './Deals.css'
function Deals() {
    const [dealsProducts , setDetProducts]
  return (
    <div className='deals-container'>
        <div className="deals-header"><span>Deals</span> For You</div>
        <div className="deals-content">
            <div className="offer">
                <div className="offer-content">
                    <div className="offer-header">50% off</div>
                    <Link className="offer-link" to="/product/all">SHOP NOW</Link>

                </div>
            </div>
            <div className="deals-cards">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </div>
        </div>
      
    </div>
  )
}
export default Deals;