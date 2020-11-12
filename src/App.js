import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/";
import Contact from "./pages/contact/";
import Header from "./components/header";
import Footer from "./components/footer";
import Portfolio from "./pages/portfolio";
// import "./reset.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./index.css";

function App() {
  return (
    <Router>
      {/* Header */}
      <Header/>
      <Switch>
        <Route exact path={["/", "/about"]}>
          <Home/>
        </Route>
        <Route exact path="/portfolio">
          {/* Portfolio  */}
          <Portfolio/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
      {/* footer */}
    </Router>
  );
}

export default App;
