import React from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
import { Button, TextField, Container } from "@material-ui/core";
import styled from "styled-components";

export default class NewFriend extends React.Component {
  state = {
    friends: {
      name: "",
      age: "",
      email: "",
      id: Date.now(),
    },
  };

  handleChange = (e) => {
    this.setState({
      friend: [
        {
          ...this.state.friends,
          [e.target.name]: e.target.value,
        },
      ],
    });
  };

  addFriend = (e) => {
    e.prevendDefault();
    axiosWithAuth()
      .post("/friends", this.state.friends)
      .then((res) => {
        console.log("res", res);
        this.props.history.push("/protected");
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  };

  render() {
    return (
      <Container maxWidth="sm">
        <MyNewFriendBox>
          <form onSubmit={this.state.addFriend}>
            <TextField
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <TextField
              type="number"
              name="Age"
              placeholder="Age"
              value={this.state.age}
              onChange={this.handleChange}
            />
            <TextField
              type="text"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={this.onChange}
            />
            <Button
              className="new-friend-btn"
              variant="contained"
              color="primary"
              type="submit"
            >
              Add New Friend
            </Button>
          </form>
        </MyNewFriendBox>
      </Container>
    );
  }
}

// styles
const MyNewFriendBox = styled.div`
  position: relative;
  top: 200px;
  .new-friend-btn {
    margin: 10px 0px;
  }
`;
