import React from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
// import { Button, TextField, Container } from "@material-ui/core";
// import styled from "styled-components";


class AddFriend extends React.Component {
  state = {
    newFriend: {
      name: "",
      email: "",
      age: ""
    }
  };

  handleChange = e => {
    this.setState({
      newFriend: {
        ...this.state.newFriend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    // login to retreive the JWT token
    // add the token to localStorage
    // route to /protected (whatever landing page)
    axiosWithAuth()
      // base of '/api/login' inside axiosWithAuth in utils folder
      .post("/friends", this.state.newFriend)
      .then(res => {
        console.log(res);
        this.props.history.push("/friendslist");
      })
      .catch(err => console.log(err.response));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={this.state.newFriend.name}
            onChange={this.handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={this.state.newFriend.email}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            value={this.state.newFriend.age}
            onChange={this.handleChange}
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriend;


// export default class NewFriend extends React.Component {
//   state = {
//     friends: {
//       name: "",
//       age: "",
//       email: ""
//       // id: Date.now(),
//     },
//   };

//   handleChange = (e) => {
//     this.setState({
//       friends: [
//         {
//           ...this.state.friends,
//           [e.target.name]: e.target.value,
//         },
//       ],
//     });
//   };

//   addFriend = (e) => {
//     e.prevendDefault();
//     axiosWithAuth()
//       .post("/friends", this.state.friends)
//       .then((res) => {
//         console.log("res", res);
//         this.props.history.push("/friendslist");
//       })
//       .catch((err) => {
//         console.log("Error is", err.response);
//       });
//   };

  

//   render() {
//     return (
//       <Container maxWidth="sm">
//         <MyNewFriendBox>
//           <form onSubmit={this.addFriend}>
//             <TextField
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={this.state.friends.name}
//               onChange={this.handleChange}
//             />
//             <TextField
//               type="number"
//               name="Age"
//               placeholder="Age"
//               value={this.state.friends.age}
//               onChange={this.handleChange}
//             />
//             <TextField
//               type="text"
//               name="email"
//               placeholder="Email"
//               value={this.state.friends.email}
//               onChange={this.handleChange}
//             />
//             <Button
//               // className="new-friend-btn"
//               variant="contained"
//               color="primary"
//               // type="submit"
//             >
//               Add New Friend
//             </Button>
//           </form>
//         </MyNewFriendBox>
//       </Container>
//     );
//   }
// }


// // styles
// const MyNewFriendBox = styled.div`
//   position: relative;
//   top: 200px;
//   .new-friend-btn {
//     margin: 10px 0px;
//   }
// `;
