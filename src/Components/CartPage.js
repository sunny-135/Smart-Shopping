import { useSelector } from "react-redux";
import { getProductById } from '../Services/Api';
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


const CartPage = () => {
  const allProducts = useSelector(state => state.allProducts);
  const products = allProducts.products;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);



  const fetchProducts = async () => {
    try {
      const productData = await Promise.all(
        products.map(item => getProductById(item))
      );
      setProduct(productData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {product.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {product.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              buttonText="Buy Now"
            />
          )
          )
          }
        </div>
      )}
    </div>
  );
};

export default CartPage;
