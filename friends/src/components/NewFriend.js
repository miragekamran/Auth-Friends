import React from "react";
import axiosWithAuth from "../utill/axiosWithAuth";

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
      <div>
        <form onSubmit={this.state.addFriend}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="Age"
            placeholder="Age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.onChange}
          />
          <button>Add New Friend</button>
        </form>
      </div>
    );
  }
}
