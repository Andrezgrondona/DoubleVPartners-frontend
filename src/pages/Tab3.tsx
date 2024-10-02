


import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/wishlistSlice';
import { fetchProducts } from '../services/api';
import './Products.css'; 
interface Product {
    _id: string;
    name: string;
    category: string;
    price: number;
    description: string;
    urlImage: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]); 
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products);
    };
    getProducts();
  }, []);

  const handleAddToWishlist = (product: Product) => { 
    dispatch(addProduct(product));
  };

  return (
    <div className="products-container">
      <h1 className="products-title">Instruments</h1>
      <div className="products-list">
        {products.map((product) => (
          <div key={product._id} className="product-card"> 
            <div className="product-header">
              <img src={product.urlImage} alt={product.name} className="product-img" />
            </div>
            <div className="product-body">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-category">{product.category}</p>
              <p className="product-price">${product.price}</p>
              <button className="add-to-wishlist" onClick={() => handleAddToWishlist(product)}>
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

