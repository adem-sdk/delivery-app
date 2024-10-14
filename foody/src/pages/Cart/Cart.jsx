import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { food_list } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0)
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>
                    {item.price}
                    <span>DZD</span>
                  </p>
                  <p>{cartItems[item._id]}</p>
                  <p>
                    {item.price * cartItems[item._id]}
                    <span>DZD</span>
                  </p>
                  <p onClick={() => removeFromCart(item._id)} className="cross">
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
        })}
      </div>
      <div className="cart-buttons">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>
              {getTotalCartAmount()}
              <span>DZD</span>
            </p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Service Fee</p>
            <p>
              {3}% <span>DZD</span>
            </p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>
              {getTotalCartAmount() + (3 * getTotalCartAmount()) / 100}
              <span>DZD</span>
            </p>
          </div>
        </div>
        <button onClick={() => navigate("/order")}>Proceed to checkout</button>
        <div className="cart-promocode">
          <p>Si vous avez un code promo, entrez le ici</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
