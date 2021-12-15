import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './components/Login';
import Logout from './components/Logout';
import FriendsList from './components/FriendsList';
import Friend from './components/Friend';
import AddFriend from './components/AddFriend';

import PrivateRoute from './components/PrivateRoute';

function App(props) {
  const isLoggedIn = localStorage.getItem('token');
  console.log("App.js", isLoggedIn)
  
  return (
    <Router>
      <div className="App">
        <h2>Client Auth Project</h2>
        <h2>{props.isLoggedIn}</h2>
        <h2></h2>
        <ul>
          <li>
          <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/logout">Logout</Link>
          </li>
          <li>
          {isLoggedIn && <Link to="/friends">FriendsList</Link>}
          </li>
          <li>
         { isLoggedIn && <Link to="/add">AddFriend</Link>}
          </li>
        </ul>
        <Switch>
          <Route path="/friends/:id"   component={Friend} /> 
          <PrivateRoute  path="/friends" component={FriendsList} />
          <Route  path="/add" component={AddFriend} />
          <Route path="/logout" component={Logout} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Login} />    
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  console.log("App.js mapStateToProps", state)
  return({
    isLoggedIn: state.isLoggedIn 
  })
}

export default connect(mapStateToProps)(App);
