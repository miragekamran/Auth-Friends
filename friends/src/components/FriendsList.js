import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utill/axiosWithAuth";
import {Grid} from '@material-ui/core';
import styled from 'styled-components';

export default function FriendsList() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log("Error is", err));
  });
  return (
    <div>
      {friends.map((friend) => {
        return (
          <FriensListStyle>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </FriensListStyle>
        );
      })}
    </div>
  );
}

const FriensListStyle = styled.div`
    border: 1px solid black;
`;