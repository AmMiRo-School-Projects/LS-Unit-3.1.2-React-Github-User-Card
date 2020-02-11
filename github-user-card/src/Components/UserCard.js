import React from "react";
import styled from "styled-components";

const UserCardDiv = styled.div`
  background-size: cover;
  border-radius: 7px;
  width: 50%;
  margin: 2% auto;
  background-color: gray;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.5);
`;

const OverlayDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
`;

const UserCardH2 = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const UserCardH3 = styled.h3`
  font-size: 1.5rem;
  margin: 0.5%;
  font-style: italic;
`;

const UserCardImg = styled.img`
  width: 400px;
  max-width: 80%;
  margin: 2%;
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.75);
`;

const UserCardP = styled.p`
  margin: 0;
`;

const UserDataDiv = styled.div`
  margin: 2%;
`;

const UserA = styled.a`
  color: white;
`;

const ChartImg = styled.img`
  margin: 2%;
  max-width: 90%;
`;

function UserCard(props) {
  if (!props.user) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <UserCardDiv style={{ backgroundImage: `url(${props.img})` }}>
        <OverlayDiv>
          <UserCardImg src={props.user.avatar_url} alt="user profile photo" />
          <UserCardH2>
            {props.user.name != null ? props.user.name : props.user.login}
          </UserCardH2>
          <UserCardH3>{props.user.login}</UserCardH3>
          <UserDataDiv>
            <UserCardP>Location: {props.user.location}</UserCardP>
            <UserCardP>
              Profile:{" "}
              <UserA href={props.user.html_url} target="_blank">
                {props.user.html_url}
              </UserA>
            </UserCardP>
            <UserCardP>Followers: {props.user.followers}</UserCardP>
            <UserCardP>Following: {props.user.following}</UserCardP>
            <UserCardP>Bio: {props.user.bio}</UserCardP>
          </UserDataDiv>
          <ChartImg
            src={`http://ghchart.rshah.org/${props.user.login}`}
            alt={`${props.user.name}'s Github chart`}
          />
        </OverlayDiv>
      </UserCardDiv>
    );
  }
}

export default UserCard;
