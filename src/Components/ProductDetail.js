import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import { getProductById } from '../Services/Api';
import CartPage from './CartPage';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const productData = await getProductById(id);
      setProduct(productData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!product) {
    return <div className="error">Product not found.</div>;
  }

  const { title, description, price, image } = product;

  const handle = () =>{
    navigate('/cart');
  }

  return (
    <div className="product-detail-container">
      <div className="product-image-container">
        <img className="product-image" src={image} alt={title} />
      </div>
      <div className="product-details-container">
        <h2 className="product-title">{title}</h2>
        <p className="product-price">Price: ${price}</p>
        <p className="product-description">{description}</p>
        <button className="add-to-cart-button" onClick={handle}>
          Go To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
