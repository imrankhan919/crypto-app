import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoin } from "../features/coins/coinSlice";
import { toast } from "react-toastify";
import Loading from "../components/Loading";
import { add } from "../features/cart/cartSlice";

const CoinDetails = () => {
  const { coin, isLoading, isError, message } = useSelector(
    (state) => state.coin
  );

  const { id } = useParams();
  const dispatch = useDispatch();

  // Add to cart
  const handleAddToCart = (coin) => {
    dispatch(add(coin));
  };

  useEffect(() => {
    dispatch(getCoin(id));

    if (isError && message) {
      toast.error(message);
    }
  }, [isError, message]);

  if (isLoading || !coin) {
    return <Loading />;
  }

  return (
    <div className="container p-5">
      <div className="card my-3 rounded-0 p-3">
        <img
          style={{ height: "150px", width: "150px" }}
          className="my-3"
          src={coin.image.large}
          alt=""
        />
        <h1 className="display-6">Coin Name : {coin.name} </h1>
        <h1 className="display-6">
          Price : {coin.market_data.current_price.inr}{" "}
        </h1>
        <p className="p">Symbol : {coin.symbol} </p>
        <p className="p">Description : {coin.description.en} </p>

        <button
          onClick={() => handleAddToCart(coin)}
          className="btn btn-success rounded-0 w-50 my-3"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CoinDetails;
