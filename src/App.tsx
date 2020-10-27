import React from 'react';
import './App.css';
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Home from './pages/Home';
import LoginPage from "./pages/Log-in";

function App() {

  const history = createBrowserHistory()

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home}  />
          <Route path="/login" component={LoginPage}  />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
