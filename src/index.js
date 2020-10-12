import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";

//styles
import "bootswatch/dist/superhero/bootstrap.min.css";

//PWA
import * as serviceWorker from "./serviceWorker";

//component
import Navbar from "./components/Navbar";
import Reports from "./pages/Reports";
import Sells from "./pages/Sells";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/ventas" component={Sells} />
        <Route path="/reportes" component={Reports} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
