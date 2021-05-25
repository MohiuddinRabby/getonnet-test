import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./app/pages/Home/Home";
import { CartContextProvider } from "./global/context/CartContext";
const Routes = () => {
  return (
    <>
      <CartContextProvider>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </CartContextProvider>
    </>
  );
};

export default Routes;
