import React from "react";

function Calculate({ activeCurrency, handleAmount, handleSubmit, amount }) {
  return (
    <div>
      <h1>How much {activeCurrency.name} do you own?</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter amount owned</label>
          <br />
          <input
            onChange={handleAmount}
            type="number"
            autoComplete="off"
            name="amount"
            placeholder="Enter amount"
            className="field"
            value={amount}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Calculate total"
            className="calculate-btn"
          />
        </div>
      </form>
    </div>
  );
}

export default Calculate;
