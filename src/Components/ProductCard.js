import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ProductCard = ({ product, buttonText, addToCart }) => {
  const { id, image, title, price } = product;

  const handleAddToCart = () => {
    console.log('handleTocart');
    addToCart(id);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${id}`} className="product-link" >
        <img className="productcard-image" src={image} alt={title} />
        <div className="productcard-details">
          <h3 className="productcard-title">{title}</h3>
          <p className="productcard-price">Price: ${price}</p>
        </div>
      </Link>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        {buttonText}
      </button>
    </div>
  );
};

export default ProductCard;
