import React from "react";
import PortfolioContainer from "./PortfolioContainer";
import axios from "axios";

const csrfToken = document.querySelector('[name="csrf-token"]').content;
axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;

function App() {
  return <PortfolioContainer />;
}

export default App;
