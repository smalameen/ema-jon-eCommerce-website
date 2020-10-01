import React, { useState } from 'react';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './Component/Reviews/Review';
import Manage from './Component/Manage/Manage';
import NoFound from './Component/NoFOund/NoFound';
import ProductDetail from './Component/ProductDetails/ProductDetail';
import Login from './Component/LogIn/Login';
import Shipment from './Component/Shipment/Shipment';
import { createContext } from 'react';
import PrivateRoute from './Component/PrivateROuter/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setUserLoggedIn] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser, setUserLoggedIn]}>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route path="/Shop">
          <Shop></Shop>
          </Route>

          <Route path="/review">
          <Review></Review>
          </Route>

          <PrivateRoute path="/manage">
          <Manage></Manage>
          </PrivateRoute>

          <Route path="/login">
          <Login></Login>
          </Route>

          <PrivateRoute path="/shipment">
          <Shipment></Shipment>
          </PrivateRoute>

          <Route path="/product/:productKey">  
          {/* Note: *here colon is for "To find the fixed value"* */}
          <ProductDetail></ProductDetail>
          </Route>

          <Route exact path="/">
          <Shop></Shop>
          </Route>

          <Route exact path="*">
          <NoFound></NoFound>
          </Route>
        </Switch>
      </Router>
      
      </UserContext.Provider>
  );
};

export default App;
