import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './pages/login'
import TablePage from './pages/tablePage'
import Home from './pages/home'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/table">Table</Link>
            </li>
          </ul>
        </nav>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/table">
            <TablePage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
