import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { UserTable } from './UserTable';

function App() {
  return (
    <div>
      <nav className="navbar bg-light navbar-expand-lg navbar-light">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              View Users
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/create" className="nav-link">
              Create User
            </Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/" component={UserTable} />
      </Switch>
    </div>
  );
}

export default App;
