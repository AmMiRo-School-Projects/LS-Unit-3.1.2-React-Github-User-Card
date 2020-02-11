import React from "react";
import styled from "styled-components";

const FollowerCardDiv = styled.div`
  border-radius: 7px;
  width: 40%;
  margin: 2% auto;
  background-color: gray;
  box-shadow: 10px 10px 10px 0px rgba(0, 0, 0, 0.5);
`;

const OverlayDiv = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.6);
`;

const FollowerTopDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const FollowerCardH2 = styled.h2`
  font-size: 2rem;
  margin: 0;
  z-index: 1;
`;

const FollowerCardH3 = styled.h3`
  font-size: 1.5rem;
  margin: 0.5%;
  font-style: italic;
  z-index: 1;
`;

const FollowerCardImg = styled.img`
  width: 200px;
  max-width: 80%;
  margin: 2%;
  box-shadow: 10px 10px 15px 0px rgba(0, 0, 0, 0.6);
  z-index: 1;
  background-color: white;
`;

const FollowerCardP = styled.p`
  margin: 0;
  z-index: 1;
`;

const FollowerDataDiv = styled.div`
  margin: 2%;
  z-index: 1;
`;

const FollowerTextDiv = styled.div`
  width: 60%;
  z-index: 1;
`;

const FollowerA = styled.a`
  color: white;
`;

const ChartImg = styled.img`
  margin: 2%;
  max-width: 90%;
`;

function FollowerCard(props) {
  if (!props) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <FollowerCardDiv style={{ backgroundImage: `url(${props.img})` }}>
        <OverlayDiv>
          <FollowerTopDiv>
            <FollowerCardImg
              src={props.user.avatar_url}
              alt="user profile photo"
            />
            <FollowerTextDiv>
              <FollowerCardH2>
                {props.user.name != null ? props.user.name : props.user.login}
              </FollowerCardH2>
              <FollowerCardH3>{props.user.login}</FollowerCardH3>
              <FollowerDataDiv>
                <FollowerCardP>Location: {props.user.location}</FollowerCardP>
                <FollowerCardP>
                  Profile:{" "}
                  <FollowerA href={props.user.html_url} target="_blank">
                    {props.user.html_url}
                  </FollowerA>
                </FollowerCardP>
                <FollowerCardP>Followers: {props.user.followers}</FollowerCardP>
                <FollowerCardP>Following: {props.user.following}</FollowerCardP>
                <FollowerCardP>Bio: {props.user.bio}</FollowerCardP>
              </FollowerDataDiv>
            </FollowerTextDiv>
          </FollowerTopDiv>
          <ChartImg
            src={`http://ghchart.rshah.org/${props.user.login}`}
            alt={`${props.user.name}'s Github chart`}
          />
        </OverlayDiv>
      </FollowerCardDiv>
    );
  }
}

export default FollowerCard;
