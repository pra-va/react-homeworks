import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Components/02-NavBar/Nav";
import Home from "./Components/03-Home/HomeComponent";
import CardsContainer from "./Components/04-Merchandise/CardList/CardsContainer";
import ProductInfo from "./Components/04-Merchandise/Info/ProductInfo";
import NewItem from "./Components/05-Admin/NewItem/NewItemContainer/NewItemContainer";
import ItemsList from "./Components/05-Admin/ItemsList/ItemsList";
import UserService from "./Components/00-Context/UserService";
import ShoppingCart from "./Components/06-Cart/Cart";
import Edit from "./Components/05-Admin/ItemsList/Edit/ProductEditPresentation/EditItemContainer/EditItemContainer";
import Error from "./Components/01-Error404/DoesNotExist";

ReactDOM.render(
  <BrowserRouter>
    <UserService.Provider>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/merch" component={CardsContainer} />
          <Route path="/merch/:id" component={ProductInfo} />
          <Route exact path="/admin/add" component={NewItem} />
          <Route exact path="/admin/list" component={ItemsList} />
          <Route exact path="/cart" component={ShoppingCart} />
          <Route path="/edit/:id" component={Edit} />
          <Route path="*" component={Error} />
          <Route component={Error} />
        </Switch>
      </Navigation>
    </UserService.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
