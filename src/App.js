import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import styles from "./App.module.scss";
import Main from "./js/Main.jsx";

const App = () => {
  return (
    <div class={styles.App}>
      <Router>
        <Route exact path="/" component={Main} />
      </Router>
    </div>
  );
};

export default App;
