import React from "react";
import { render } from "react-dom";

class Human extends React.Component {
  constructor(props) {
    // 必ず必要
    super(props);
    this.state = { name: "Oide" };
  }
  // 必ずrenderメソッドを実装する必要がある
  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }
  onButtonClick() {
    alert("click");
  }
}

render(<Human age="30" />, document.getElementById("root"));
