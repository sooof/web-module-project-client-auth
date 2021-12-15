import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';


function App() {
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/logout">Logout</Link>
          </li>
          <li>
          <Link to="/friendslist">FriendsList</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/friendslist" component={FriendsList} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

export default App;
