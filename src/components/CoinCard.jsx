import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3">
      <div className="card rounded-0">
        <img src={coin?.large} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{coin?.name}</h5>
          <Link
            to={`/user/coin/${coin.id}`}
            className="btn btn-primary rounded-0 my-3"
          >
            Know More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoinCard;
