import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AdminNew from "./Components/Admin/AdminFormMain";
import ProductList from "./Components/ProductList/ProductListContainer";
import Rotates from "./Components/Rotates/PictureContainer";
import Navigation from "./Components/Navigation/Navigation";
import ButtonCounter from "./Components/ButtonCounter/IncreasingButtonCount";
import CountDownTimer from "./Components/Timer/SelfDestructTimerComponent";
import AdminNavigation from "./Components/Admin/ProductNavigation";
import AdminId from "./Components/Admin/AdminId";
import ServicesContext from "./ServicesContext";

ReactDOM.render(
  <BrowserRouter>
    <ServicesContext.Provider value={{ author: "Pranas Varaneckas" }}>
      <Navigation>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/admin/new" component={AdminNew} />
          <Route path="/admin/products/:id" component={AdminId} />
          <Route path="/admin" component={AdminNavigation} />
          <Route path="/countdown-timer" component={CountDownTimer} />
          <Route path="/list" component={ProductList} />
          <Route path="/rotates" component={Rotates} />
          <Route path="/button-counter" component={ButtonCounter} />
          <Route path="*" component={App} />
          <Route component={App} />
        </Switch>
      </Navigation>
    </ServicesContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
