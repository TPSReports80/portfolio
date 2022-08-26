import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import Home from "./pages";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Home />
    </Router>
  );
}

export default App;
