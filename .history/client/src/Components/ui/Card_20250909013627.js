// import React , { useContext }from 'react'
// import { FaStar } from "react-icons/fa";
// import { CartContext } from "../../context/CartContext";
// import { FaCartPlus } from "react-icons/fa";
// import { FaHeart } from "react-icons/fa";


//  function Card({ _id,title, description, price, img, rating}) {
//     const { addToCart } = useContext(CartContext);
//   return (
//     <section className="card">
//             <img className="card-img"
//               src={img}
//               alt={title}
//             />
    
//             <div className="card-details">
//               <h3 className="card-title">{title}</h3>
//               <section className="card-reviews">
//                 <FaStar className="ratings-star" />
//                 <FaStar className="ratings-star" />
//                 <FaStar className="ratings-star" />
//                 <FaStar className="ratings-star" />
//               <span className="total-reviews"></span>
//               </section>
//               <section className="card-price">
//                 <div className="price">
//                   {/* <del>$300</del> */}
//                   {price} $
//                 </div>
//                 <div className="icons">
//                   <FaCartPlus  className="bag-icon"  onClick={() =>addToCart({ _id, img, title, price })}/>
//                   <FaHeart />

//                 </div>
//               </section>
//             </div>
//           </section>
//   )
// }
// export default Card;
import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import {WishlistContext} from '../../context/WishlistContext'
import { FaCartPlus, FaHeart } from "react-icons/fa";

function Card({ _id, id, title, description, price, img, rating }) {
  const { addToCart } = useContext(CartContext);
  const {addToWishlist} =useContext(wishListContext);
  const productId = _id || id; // ✅ استخدمي اللي موجود

  const handleAddToCart = () => {
    if (!productId) {
      console.error("❌ Product ID is missing!", { _id, id, title });
      return;
    }

    console.log("🛒 [Card.js] Adding product to cart:", { productId, title });

    addToCart({ productId, quantity: 1 });
  };
  const handleAddToWishList=()=>{
   if (!productId) {
      console.error("Product ID is missing!");
      return;
    }

    console.log(" Adding product to wishlist:", { productId, title });
    addToWishlist({productId, quantity:1})
 
  }

  return (
    <section className="card">
      <img className="card-img" src={img} alt={title} />
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <section className="card-reviews">
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <span className="total-reviews"></span>
        </section>
        <section className="card-price">
          <div className="price">{price} $</div>
          <div className="icons">
            <FaCartPlus
              className="bag-icon"
              onClick={handleAddToCart}
              title="Add to Cart"
            />
            <FaHeart title="Add to Wishlist" 
            onClick={handleAddToWishList}
            />
          </div>
        </section>
      </div>
    </section>
  );
}


export default Card;
