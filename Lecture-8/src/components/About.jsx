import React from "react";
import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileClassComponent from "./ProfileClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {},
    };
    console.log("Parent- Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/baluramk6");
    const json = await data.json();
    console.log(json);
    this.setState({
      userInfo: json,
    });
    console.log("Parent - Didmount");
  }

  render() {
    console.log("Parent- Inside");
    return (
      <div>
        <h1>This is about us page.</h1>
        <h3>{this.state.userInfo.name}</h3>
        <h3>{this.state.userInfo.location}</h3>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <ProfileClassComponent name={"First child"} />
        <ProfileClassComponent name={"Second child"} />
      </div>
    );
  }
}

export default About;
