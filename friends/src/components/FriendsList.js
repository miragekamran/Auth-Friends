import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utill/axiosWithAuth";

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
          <div>
            <h2>{friend.name}</h2>
            <p>{friend.age}</p>
            <p>{friend.email}</p>
          </div>
        );
      })}
    </div>
  );
}
