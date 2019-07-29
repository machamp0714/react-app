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
      // コールバック関数の中で使われるthisには注意が必要。
      <h2 onClick={this.onButtonClick}>
        {this.state.name} {this.props.age}
      </h2>
    );
  }
  // 一般的なメソッド定義だと、thisの参照先が意図したものではなくなってしまう。
  // onBUttonClick() {
  //   this.setState({name: "change"});
  // }

  // create-react-appで作られたReactアプリケーションでは、アロー関数を使うことで回避できる。
  onButtonClick = () => {
    this.setState({ name: this.state.name + "san" });
  };
}

render(<Human age="30" />, document.getElementById("root"));
