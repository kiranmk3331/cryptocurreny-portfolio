import React from "react";
import CurrencyList from "./CurrencyList";

function Search({ handleSearch, searchResult, handleSelect }) {
  const results = searchResult.map((crypto) => {
    return (
      <CurrencyList
        key={crypto.id}
        crypto={crypto}
        handleSelect={handleSelect}
      />
    );
  });
  return (
    <div>
      <h1>Cryptocurrency Portfolio Calculator</h1>
      <form>
        <div className="form-group">
          <label>Search for the Cryptocurrency</label>
          <input
            onChange={handleSearch}
            type="text"
            autoComplete="off"
            name="amount"
            placeholder="Ex: bitcoin, etherium, litecoin"
            className="field"
          />
        </div>
        <div className="currency-list">{results}</div>
      </form>
    </div>
  );
}

export default Search;
