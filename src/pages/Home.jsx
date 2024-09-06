import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CoinCard from "../components/CoinCard";
import { getCoins } from "../features/coins/coinSlice";
import { toast } from "react-toastify";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  const { coins, isLoading, isError, message } = useSelector(
    (state) => state.coin
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (isError && message) {
      toast.error(message);
    }

    dispatch(getCoins());
  }, [user]);

  if (isLoading) {
    return <isLoading />;
  }

  return (
    <div className="container p-5">
      <h1 className="display-6 text-center my-3">Trending Coins</h1>
      <div className="row g-3">
        {coins.map((coin) => (
          <CoinCard key={coin.item.id} coin={coin.item} />
        ))}
      </div>
    </div>
  );
};

export default Home;
