
import "./Products.css";

import Card from "../ui/Card";
import { NavLink, useNavigate } from "react-router-dom";

function Products({ result }) {
  const navigate = useNavigate();
  if (!result || result.length === 0) {
    // return <p>No products found.</p>;
      navigate("/KnowType")
  }

  return (
    <section className="card-container">
      {result.map(({ _id, name, description, price, images, ratings }) => (
        <Card
          key={_id}
          _id={_id}
          id={_id}
          title={name}
          name={name}
          description={description}
          price={price}
          img={images?.[0]}
          images={images}
          rating={
            ratings?.length > 0
              ? ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length
              : 0
          }
        />
      ))}
    </section>
  );
}
export default Products;
