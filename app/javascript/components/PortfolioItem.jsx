import React from "react";

const PortfolioItem = ({item}) => {
  return (
    <div>
      <div className="row">
        <div className="col">
          <div className="header">Currency:</div>
          <div className="text">{item.currency.name}</div>
        </div>

        <div className="col">
          <div className="header">Current Price:</div>
          <div className="text">₹{item.current_price}</div>
        </div>

        <div className="col">
          <div className="header">Amount In Your Portfolio:</div>
          <div className="text">{item.amount}</div>
        </div>

        <div className="col">
          <div className="header">Current Value:</div>
          <div className="text">₹{item.value}</div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
