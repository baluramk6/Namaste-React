import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log(this.props.name, "Constructor");
  }

  componentDidMount() {
    console.log(this.props.name, "Didmount");
  }

  render() {
    console.log(this.props.name, "Inside");
    return (
      <div>
        <h1>This is a Class Component</h1>
        <h3>Name:{this.props.name}</h3>
        <h3>Count: {this.state.count}</h3>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          SetCount
        </button>
      </div>
    );
  }
}

export default Profile;
