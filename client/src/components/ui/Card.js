import React, { useContext, useState } from "react";
import { FaStar, FaCartPlus, FaHeart } from "react-icons/fa";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

function Card({
  _id,
  id,
  title,
  description,
  price,
  img,
  rating,
  name,
  images,
}) {
  const { addToCart, loading } = useContext(CartContext);
  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    loading: wishlistLoading,
  } = useContext(WishlistContext);

  const [isAdding, setIsAdding] = useState(false);
  const [isWishlisting, setIsWishlisting] = useState(false);

  const productId = _id || id;
  const productName = name || title;
  const productImage = img || images?.[0];

  // ✅ Handle Add to Cart
  const handleAddToCart = async () => {
    if (!productId || isAdding || loading) return;

    try {
      setIsAdding(true);
      await addToCart({
        productId,
        quantity: 1,
        product: {
          _id: productId,
          name: productName,
          title: productName,
          description,
          price,
          img: productImage,
          images: images || [productImage],
          rating,
        },
      });
    } catch (error) {
      console.error("❌ Error adding to cart:", error);
    } finally {
      setIsAdding(false);
    }
  };
// ✅ Handle Wishlist Toggle
const handleToggleWishlist = async () => {
  if (!productId || isWishlisting || wishlistLoading) return;

  try {
    setIsWishlisting(true);
    if (isInWishlist(productId)) {
      await removeFromWishlist(productId);
    } else {
      // ✅ Only send productId
      await addToWishlist(productId);
    }
  } catch (error) {
    console.error("❌ Error updating wishlist:", error);
  } finally {
    setIsWishlisting(false);
  }
};


  return (
    <section className="card">
      <img className="card-img" src={productImage} alt={productName} />

      <div className="card-details">
        <h3 className="card-title">{productName}</h3>

        <section className="card-reviews">
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <FaStar className="ratings-star" />
          <span className="total-reviews">({rating || 0})</span>
        </section>

        <section
          className="card-price"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "85%",
          }}
        >
          <div className="price" style={{ fontWeight: "bold" }}>
            {price} $
          </div>

          <div
            className="icons"
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <FaCartPlus
              size={22}
              onClick={handleAddToCart}
              title={isAdding ? "Adding..." : "Add to Cart"}
              style={{ cursor: "pointer" }}
            />

            <FaHeart
              size={22}
              onClick={handleToggleWishlist}
              title={
                isInWishlist(productId)
                  ? "Remove from Wishlist"
                  : "Add to Wishlist"
              }
              style={{
                cursor: "pointer",
                color: isInWishlist(productId) ? "red" : "black",
              }}
            />
          </div>
        </section>
      </div>
    </section>
  );
}

export default Card;
