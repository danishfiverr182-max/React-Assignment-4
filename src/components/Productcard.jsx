import React from "react";
import "./ProductCard.css";

const ProductCard = ({ title, price, description, image, rating, reviews, children }) => {
  // Task 4: Destructuring already done in function parameters above

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <span className="product-stars">
        {"★".repeat(fullStars)}
        {halfStar ? "½" : ""}
        {"☆".repeat(emptyStars)}
      </span>
    );
  };

  return (
    // Task 6: product-card CSS class
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={title} className="product-image" />
        <span className="product-badge">Best Seller</span>
      </div>

      <div className="product-info">
        {/* Task 2: Display props using destructured variables */}
        <h3 className="product-title">{title}</h3>
        

        <div className="product-rating">
          {renderStars(rating)}
          <span className="product-reviews">({reviews} reviews)</span>
        </div>

        <div className="product-price-section">
          <span className="product-price">{price}</span>
          <span className="product-free-delivery">FREE Delivery</span>
        </div>

        <p className="product-description">{description}</p>

        {/* Task 5: Children Props: button text from children */}
        <button className="product-button">{children}</button>

        <button className="product-button-secondary">Add to Cart</button>
      </div>
    </div>
  );
};

// Task 7: Default Props: if no data is passed, component still works
ProductCard.defaultProps = {
  title: "Product Name",
  price: "$0",
  description: "No description available.",
  image: "https://via.placeholder.com/300x300?text=No+Image",
  rating: 0,
  reviews: 0,
};

export default ProductCard;