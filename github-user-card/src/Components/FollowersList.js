import React from "react";
import FollowerCard from "./FollowerCard";

function FollowersList(props) {
  return (
    <div>
      {props.followers.map(user => {
        return FollowerCard(user);
      })}
    </div>
  );
}

export default FollowersList;
