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
import { FaCartPlus, FaHeart } from "react-icons/fa";

function Card({ _id, title, description, price, img, rating }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // ✅ هيكل المنتج زي ما الكارت متوقع
    const product = {
      _id,
      title,
      description,
      price,
      img,
      rating,
    };

    console.log("🛒 [Card.js] Adding product to cart:", product);

    // نبعته بالـ id بس للباك اند (الكارت بيخزن الـproductId + qty)
    addToCart({ productId: _id, quantity: 1 });
  };

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
            <FaHeart title="Add to Wishlist" />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;

