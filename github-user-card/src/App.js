import React from "react";
import axios from "axios";
import UserCard from "./Components/UserCard";
import FollowersList from "./Components/FollowersList";
import "./App.css";
import img01 from "./assets/code-background-01.jpg";
import img02 from "./assets/code-background-02.jpg";
import img03 from "./assets/code-background-03.jpg";
import img04 from "./assets/code-background-04.jpg";
import img05 from "./assets/code-background-05.jpg";
import img06 from "./assets/code-background-06.jpg";
import img07 from "./assets/code-background-07.jpg";
import img08 from "./assets/code-background-08.jpg";
import img09 from "./assets/code-background-09.jpg";
import img10 from "./assets/code-background-10.jpg";
import img11 from "./assets/code-background-11.jpg";
import img12 from "./assets/code-background-12.jpg";
import img13 from "./assets/code-background-13.jpg";
import img14 from "./assets/code-background-14.jpg";
import img15 from "./assets/code-background-15.jpg";
import img16 from "./assets/code-background-16.jpg";
import img17 from "./assets/code-background-17.jpg";
import img18 from "./assets/code-background-18.jpg";
import img19 from "./assets/code-background-19.jpg";
import img20 from "./assets/code-background-20.jpg";
import img21 from "./assets/code-background-21.jpg";
import img22 from "./assets/code-background-22.jpg";
import img23 from "./assets/code-background-23.jpg";
import img24 from "./assets/code-background-24.jpg";
import img25 from "./assets/code-background-25.jpg";

class App extends React.Component {
  // State form User and User's Followers
  state = {
    user: {},
    followers: [],
    imgArr: [
      img01,
      img02,
      img03,
      img04,
      img05,
      img06,
      img07,
      img08,
      img09,
      img10,
      img11,
      img12,
      img13,
      img14,
      img15,
      img16,
      img17,
      img18,
      img19,
      img20,
      img21,
      img22,
      img23,
      img24,
      img25
    ]
  };

  componentDidMount() {
    // Main User request
    axios
      .get("https://api.github.com/users/AmMiRo")
      .then(res => {
        // console.log("user response", res);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    // Followers request
    axios
      .get("https://api.github.com/users/AmMiRo/followers")
      .then(res => {
        // console.log("followers response", res);
        res.data.map(follower => {
          // Individual Follower request
          axios
            .get(follower.url)
            .then(response => {
              // console.log("follower response", response);
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
        <UserCard
          user={this.state.user}
          img={
            this.state.imgArr[
              Math.floor(Math.random() * Math.floor(this.state.imgArr.length))
            ]
          }
        />
        <FollowersList
          followers={this.state.followers}
          imgArr={this.state.imgArr}
        />
      </div>
    );
  }
}

export default App;
