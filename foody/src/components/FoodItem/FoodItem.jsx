import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt="" className="food-item-image" />
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            alt="Add Icon"
            className="add"
            onClick={() => addToCart(id)}
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              alt="Remove Icon"
              onClick={() => removeFromCart(id)}
            />
            <p>{cartItems[id]}</p>
            <img
              src={assets.add_icon_green}
              alt="Add Icon"
              onClick={() => addToCart(id)}
            />
          </div>
        )}
      </div>
      <hr />
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating Stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">
          {price}
          <span>DZD</span>
        </p>
      </div>
    </div>
  );
};

export default FoodItem;
