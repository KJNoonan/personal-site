import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./js/Main.jsx";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
    </Router>
  );
};

export default App;
