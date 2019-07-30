import React from "react";
import { render } from "react-dom";
import "./App.css";

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
    const { tmp } = this.state;

    return (
      <div className={this.H2Ostate(tmp)}>
        <h2>
          phase: {this.H2Ostate(tmp)} {tmp}度
        </h2>
        <button onClick={this.onPlusClick}>+</button>
        <button onClick={this.onPlus10Click}>+10</button>
        <button onClick={this.onMinusClick}>-</button>
        <button onClick={this.onMinus10Click}>-10</button>
      </div>
    );
  }

  onPlusClick = () => {
    const { tmp } = this.state;
    this.setState({ tmp: tmp + 1 });
  };

  onPlus10Click = () => {
    const { tmp } = this.state;
    this.setState({ tmp: tmp + 10 });
  };

  onMinusClick = () => {
    const { tmp } = this.state;
    this.setState({ tmp: tmp - 1 });
  };

  onMinus10Click = () => {
    const { tmp } = this.state;
    this.setState({ tmp: tmp - 10 });
  };
}

render(<H2O />, document.getElementById("root"));
