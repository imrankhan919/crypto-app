import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../features/cart/cartSlice";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div className="card p-4 rounded-0 my-1">
      <div>
        <img
          src={cart.image.large}
          style={{ height: "100px", width: "100px" }}
          alt=""
        />
        <h5 className="my-2">Coin Name : {cart.name}</h5>
        <h4 className="my-2">Price : {cart.market_data.current_price.inr}e</h4>
        <p>Qty : 1</p>
      </div>
      <button
        onClick={() => handleRemove(cart.id)}
        className="btn btn-sm btn-danger rounded-0"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
