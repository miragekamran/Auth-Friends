import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import PrivateRoute from "./components/PrivateRoute"

import Login from './components/Login';
import FriendsList from './components/FriendsList';
import NewFriend from './components/NewFriend';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Link to="/friendslist">Friends List</Link>
        <Link to="/addfriend">Add Friend</Link>
        <Switch>
          <PrivateRoute path="/friendsList" component={FriendsList} />
          <PrivateRoute path="/addfriend" component={NewFriend} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;










// import React from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
// import PrivaveRoute from "./components/PrivateRoute";
// import Login from "./components/Login";
// import FriendsList from "./components/FriendsList";
// import NewFriend from "./components/NewFriend";
// import { Grid, Button, Menu, MenuItem } from "@material-ui/core";

// export default function App() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const logout = (e) => {
//     e.preventDefault();
//     localStorage.removeItem("token");
//     window.location.reload(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Button
//           variant="contained"
//           color="primary"
//           aria-controls="simple-menu"
//           aria-haspopup="true"
//           onClick={handleClick}
//         >
//           Open Menu
//         </Button>
//         <Menu
//           color="primary"
//           id="simple-menu"
//           anchorEl={anchorEl}
//           keepMounted
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//         >
//           <Link to="/login">
//             <MenuItem onClick={handleClose}>Login</MenuItem>
//           </Link>
//           <Link to="/protected">
//             <MenuItem onClick={handleClose}>My Friends</MenuItem>
//           </Link>
//           <Link to="/addFriend">
//             <MenuItem onClick={handleClose}>Add A New Friend</MenuItem>
//           </Link>
//           <Button className="logout" color="secondary" onClick={logout}>
//             logout
//           </Button>
//         </Menu>

//         <Switch>
//           <PrivaveRoute exact path="/protected" component={FriendsList} />
//           <PrivaveRoute exact path="/addFriend" component={NewFriend} />
//           <Route path="/login" component={Login} />
//           <Route component={Login} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }
