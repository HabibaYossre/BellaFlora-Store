import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import Card from '../ui/Card'
import './Deals.css'
function Deals() {
    const [dealsProducts , setDetProducts]=useState([]);
      const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(()=>{
    const fetchDeals=async()=>{
        try{
           const res=await fetch("http://localhost:3000/product/all");
           if(!res.ok){
             throw new Error("Failed to fetch deals");
           }
           const productsData =await res.json();
           setDetProducts((productsData.data || []).sort(()=>0.5-Math.random()).slice(0,6));
        }
        catch(err){
            setError(err.message)
        }
        finally {
        setLoading(false);
      }
    }
}
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
               {loading && <p>Loading..</p>}
               {error && <p>{error}</p>}
               {
                !loading && !error && 
                dealsProducts.map(({ _id, name, description, price, images, ratings })=>(
                    <Card
          key={_id}
          img={images?.[0]} // safe access in case images is missing
          title={name}
          description={description}
          price={price}
          rating={
            ratings?.length > 0
              ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
              : 0
          }
        />
                ))
               }

            </div>
        </div>
      
    </div>
  )
}
export default Deals;