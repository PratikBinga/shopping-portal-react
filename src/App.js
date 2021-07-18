import React from "react";
import Header from "./containers/Header";
import ProductListing from "./containers/productListing";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import "./App.css";
import ProductDetail from "./containers/productDetail";

function App() {
  return (

    <div className="App" >

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>

    </div>

  );
}

export default App;
