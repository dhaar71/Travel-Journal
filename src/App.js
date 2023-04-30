import './App.css';
import Home from './home.js';
import Login from './login.js';
import Register from './register.js';
import Password from './forgetpass';

import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="app">
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/forgetpass">
            <Password />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
    
  );
}

export default App;
