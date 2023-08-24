import React from "react";

const CurrencyList = ({ crypto, handleSelect }) => {
  return (
    <li
      data-id={crypto.id}
      onClick={handleSelect}
      className="currency-list-item"
    >
      <a href="#" className="currency">
        <span>{crypto.name}</span>
        <span className="currency_symbol">{crypto.currency_symbol}</span>
      </a>
    </li>
  );
};

export default CurrencyList;
