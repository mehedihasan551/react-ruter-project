import React from "react";
import { useLoaderData } from "react-router-dom";

const FriendsDetails = () => {
  const friend = useLoaderData();
  console.log(friend);
  //    const { name, phone, username, email, address,id}=friend
  return (
    <div>
      <h1>Everything about this person is here</h1>

      <h3>Friend Name :{friend.name}</h3>
      <h5>Phone:{friend.phone}</h5>
      <h5>Emali:{friend.email}</h5>
      <h6>Address:{friend.address.city}</h6>
    </div>
  );
};

export default FriendsDetails;
