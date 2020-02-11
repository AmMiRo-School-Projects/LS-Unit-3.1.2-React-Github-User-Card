import React from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowersList from "./Components/FollowersList";
import "./App.css";

class App extends React.Component {
  // State form User and User's Followers
  state = {
    user: {},
    followers: []
  };

  componentDidMount() {
    // Main User request
    axios
      .get("https://api.github.com/users/AmMiRo")
      .then(res => {
        console.log("user response", res);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    // Followers request
    axios
      .get("https://api.github.com/users/AmMiRo/followers")
      .then(res => {
        console.log("followers response", res);
        res.data.map(follower => {
          // Individual Follower request
          axios
            .get(follower.url)
            .then(response => {
              console.log("follower response", response);
              this.setState({
                followers: [...this.state.followers, response.data]
              });
            })
            .catch(error => {
              console.log(error);
            });
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Github User!</h1>
        <UserCard user={this.state.user} />
        <FollowersList followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
