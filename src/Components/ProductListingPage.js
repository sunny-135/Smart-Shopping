import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getProducts } from '../Services/Api';
import '../App.css';
import { useDispatch } from 'react-redux';
import { prodActions } from '../Redux/Actions/prodAction';
import ProductDetail from './ProductDetail';
import {Link} from 'react-router-dom'

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);
  const [sortedBy, setSortedBy] = useState('price');
  const [cart, setCart] = useState([]);
  const [logoCount, setLogoCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);


  const dispatch = useDispatch();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  
  const addToCart = (productId) => {
    const isProductInCart = cart.some((item) => item.id === productId);
  
    if (!isProductInCart) {
      const product = products.find((item) => item.id === productId);
      const newCart = [...cart, product];
      setCart(newCart);
      console.log(newCart, "newCart");
      handleLogoButtonClick();
      dispatch(prodActions(productId));
    }
  };
  

  const handleLogoButtonClick = () => {
    setLogoCount(logoCount + 1);
  };

  const sortProducts = (sortingKey) => {
    const sortedProducts = [...products].sort((a, b) => {
      if (sortingKey === 'price') {
        return a.price - b.price;
      } else {
        return a[sortingKey].localeCompare(b[sortingKey]);
      }
    });

    setSortedBy(sortingKey);
    setProducts(sortedProducts);
  };
  
  return (
    <>
    <div className='header'>
        <img className='logo' src="cartlogo.png" />

      <Link to="/cart">
  <div className='cart-logo'>
    <img src="addtocart.png" />
    {logoCount !== 0 && (
      <p className='logo-count'>
        {logoCount}
      </p>
    )}
  </div>
</Link>
        <label>Sort By: </label>
        <select
          id="sort"
          value={sortedBy}
          onChange={(e) => sortProducts(e.target.value)}
        >
          <option value="price">Price</option>
          <option value="title">Name</option>
        </select>
        </div>
      
        {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              buttonText="Add To Cart"
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
      </>
  );
};

export default ProductListingPage;
