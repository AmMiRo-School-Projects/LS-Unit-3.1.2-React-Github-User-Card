import React from "react";

function FollowerCard(props) {
  console.log("user card props", props);
  if (!props) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <img src={props.avatar_url} alt="user profile photo" />
        <h2>{props.name != null ? props.name : props.login}</h2>
        <h3>{props.login}</h3>
        <div>
          <p>Location: {props.location}</p>
          <p>Profile: {props.html_url}</p>
          <p>Followers: {props.followers}</p>
          <p>Following: {props.following}</p>
          <p>Bio: {props.bio}</p>
        </div>
      </div>
    );
  }
}

export default FollowerCard;
