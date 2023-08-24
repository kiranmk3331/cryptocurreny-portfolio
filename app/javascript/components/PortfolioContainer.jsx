import React, { useState } from "react";
import Search from "./Search";
import Calculate from "./Calculate";
import axios from "axios";
import Portfolio from "./Portfolio";

function PortfolioContainer() {
  const [portfolio, setPortfolio] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [activeCurrency, setActiveCurrency] = useState(null);
  const [amount, setAmount] = useState("");

  const handleSearch = (e) => {
    axios
      .post("/search", {
        search: e.target.value,
      })
      .then((data) => {
        setSearchResult([...data.data.currencies]);
      })
      .catch((err) => console.log(err));
  };

  const handleSelect = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("data-id");
    const selectedCrypto = searchResult.filter(
      (item) => item.id == parseInt(id)
    );
    setActiveCurrency(selectedCrypto[0]);
    setSearchResult([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/calculate", {
        id: activeCurrency.id,
        amount: amount,
      })
      .then((data) => {
        console.log(data);
        setAmount("");
        setActiveCurrency(null);
        setPortfolio([...portfolio, data.data]);
      })
      .catch((err) => console.log(err));
  };

  const handleAmount = (e) => {
    setAmount(e.target.value);
	};

	const searchOrCalculate = activeCurrency ? (
    <Calculate
      activeCurrency={activeCurrency}
      handleAmount={handleAmount}
      handleSubmit={handleSubmit}
      amount={amount}
    />
  ) : (
    <Search
      handleSearch={handleSearch}
      searchResult={searchResult}
      handleSelect={handleSelect}
    />
  );

  return (
    <div className="grid">
      <div className="left">{searchOrCalculate}</div>
      <div className="right">
        <Portfolio portfolio={portfolio} />
      </div>
    </div>
  );
}

export default PortfolioContainer;
