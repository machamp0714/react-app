import React from "react";
import { render } from "react-dom";

class H2O extends React.Component {
  constructor(props) {
    super(props);
    this.state = { tmp: 15 };
  }

  H2Ostate(tmp) {
    if (tmp < 0) {
      return "ice";
    }
    if (tmp >= 100) {
      return "steam";
    }
    return "water";
  }

  render() {
    return (
      <div>
        <h2>
          phase: {this.H2Ostate(this.state.tmp)} {this.state.tmp}度
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    this.setState({ tmp: this.state.tmp + 1 });
  };

  onPlus10Click = () => {
    this.setState({ tmp: this.state.tmp + 10 });
  };

  onMinusClick = () => {
    this.setState({ tmp: this.state.tmp - 1 });
  };

  onMinus10Click = () => {
    this.setState({ tmp: this.state.tmp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
