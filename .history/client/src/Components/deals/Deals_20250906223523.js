import React from 'react'

import './Deals.css'
function Deals() {
  return (
    <div className='deals-container'>
        <div className="deals-header"><span>Deals</span> For You</div>
        <div className="deals-content">
            <div className="offer">
                <div className="offer-content">
                    <div className="offer-header">50% off</div>
                    <Link className="main-link" to="/product/all">View All Products</Link>

                </div>
            </div>

        </div>
      
    </div>
  )
}
export default Deals;