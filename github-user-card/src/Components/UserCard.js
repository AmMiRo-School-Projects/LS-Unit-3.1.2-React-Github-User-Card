import React from "react";

function UserCard(props) {
  console.log("user card props", props);
  if (!props.user) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <div>
        <img src={props.user.avatar_url} alt="user profile photo" />
        <h2>{props.user.name != null ? props.user.name : props.user.login}</h2>
        <h3>{props.user.login}</h3>
        <div>
          <p>Location: {props.user.location}</p>
          <p>Profile: {props.user.html_url}</p>
          <p>Followers: {props.user.followers}</p>
          <p>Following: {props.user.following}</p>
          <p>Bio: {props.user.bio}</p>
        </div>
      </div>
    );
  }
}

export default UserCard;
