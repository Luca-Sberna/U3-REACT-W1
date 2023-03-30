import { Component } from "react";

class ClassComponents extends Component {
  render() {
    return <div className="welcome-text"> ciao{this.props.content}</div>;
  }
}

export default ClassComponents;
