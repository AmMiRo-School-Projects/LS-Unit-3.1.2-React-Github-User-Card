import React from "react";
import FollowerCard from "./FollowerCard";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

function FollowersList(props) {
  return (
    <ListDiv>
      {props.followers.map(user => {
        return (
          <FollowerCard
            user={user}
            img={
              props.imgArr[
                Math.floor(Math.random() * Math.floor(props.imgArr.length))
              ]
            }
          />
        );
      })}
    </ListDiv>
  );
}

export default FollowersList;
