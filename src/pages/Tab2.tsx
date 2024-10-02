import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../store/wishlistSlice";
import { RootState } from "../store/store";
import "./Wishlist.css"; 

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist.items);
  const dispatch = useDispatch();


  console.log("Wishlist items:", wishlist);

  const handleRemoveFromWishlist = (productId: string) => {
    console.log("Removing product with id:", productId); 
    dispatch(removeProduct(productId));
  };

  return (
    <div className="wishlist-container">
      <h1 className="wishlist-title">Wishlist</h1>
      <div className="wishlist-items">
        {wishlist.length === 0 ? ( 
          <p className="empty-message">Add a product to the wishlist</p>
        ) : (
          wishlist.map((product) => (
            <div key={product._id} className="wishlist-card">
              <div className="wishlist-header">
                <img
                  src={product.urlImage}
                  alt={product.name}
                  className="wishlist-img"
                />
              </div>
              <div className="wishlist-body">
                <h2 className="wishlist-name">{product.name}</h2>
                <p className="wishlist-price">${product.price}</p>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromWishlist(product._id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;