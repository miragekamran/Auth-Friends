import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivaveRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import NewFriend from "./components/NewFriend";
import { Grid, Button, Menu, MenuItem } from "@material-ui/core";

export default function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};

  return (
    <Router>
      <div className="App">
        <Button
          variant="contained"
          color="primary"
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          Open Menu
        </Button>
        <Menu
          color="primary"
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Link to="/login">
            <MenuItem onClick={handleClose}>Login</MenuItem>
          </Link>
          <Link to="/protected">
            <MenuItem onClick={handleClose}>My Friends</MenuItem>
          </Link>
          <Link to="/">
            <MenuItem onClick={handleClose}>Add A New Friend</MenuItem>
          </Link>
        </Menu>

        <Switch>
          <PrivaveRoute exact path="/protected" component={FriendsList} />
          <PrivaveRoute exact path="/" component={NewFriend} />
          <Route path="/login" component={Login} />
        </Switch>
        <Button className="logout" color="secondary" onClick={logout}>
          logout
        </Button>
      </div>
    </Router>
  );
}
