import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivaveRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/protected">My Friends</Link>
        <Link to="/">Add A New Friend</Link>
        <Switch>
          <PrivaveRoute exact path="/protected" component={FriendsList} />
          <PrivaveRoute exact path="/" component={NewFriend} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}
