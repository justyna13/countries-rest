import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppState from "./context/app/AppState";
import CountryState from "./context/country/CountryState";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Country from "./components/countries/Country";

function App() {
  return (
    <>
      <AppState>
        <CountryState>
            <Router>
                <div className="box">
                    <Navbar />

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/country/:alpha3Code" component={Country} />
                    </Switch>
                </div>
            </Router>
        </CountryState>
      </AppState>
    </>
  );
}

export default App;
