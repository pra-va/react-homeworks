import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./components/02-NavBar/Nav";
import Home from "./components/03-Home/HomeComponent";

import Error from "./components/01-PageNotFound/DoesNotExist";
import GlobalContext from "./components/00-Context/GlobalContext";

ReactDOM.render(
  <BrowserRouter>
    <GlobalContext.Provider>
      <Navigation>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="*" component={Error} />
          <Route component={Error} />
        </Switch>
      </Navigation>
    </GlobalContext.Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
