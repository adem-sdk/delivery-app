import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="nom" />
          <input type="text" placeholder="prenom" />
        </div>
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="votre position" />
        <div className="multi-fields">
          <input type="text" placeholder="wilaya" />
          <input type="text" placeholder="cite" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
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

          <button>Proceed to payement</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
