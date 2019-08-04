import React from "react";
import { render } from "react-dom";
// import { TodoApp } from "./TodoApp";
import axios from "axios";
import { Search } from "./Components/Search";

// render(<TodoApp />, document.getElementById("root"));

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { member: [] };
//   }

//   render() {
//     return (
//       <div>
//         <button onClick={this.getJson}>get json</button>
//         {this.memberList(this.state.member)}
//       </div>
//     );
//   }

//   memberList = list => {
//     const memberList = list.map((member, index) => {
//       return (
//         <li>
//           {index} {member.name} {member.age}
//         </li>
//       );
//     });

//     return <ul>{memberList}</ul>;
//   };

//   getJson = () => {
//     const url = "https://api.myjson.com/bins/6bjx9";

//     axios.get(url).then(res => {
//       this.setState(res.data);
//     });
//   };
// }

// render(<App />, document.getElementById("root"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gifUrlList: [] };
  }

  render() {
    return (
      <div>
        <Search search={this.giphyApi} />
        {this.renderImgaeList(this.state.gifUrlList)}
      </div>
    );
  }

  renderImgaeList(list) {
    const imageList = list.map(url => {
      // 必ず閉じタグが必要！！
      return (
        <li>
          <img src={url} alt="猫画像" />
        </li>
      );
    });

    return <ul>{imageList}</ul>;
  }

  giphyApi = query => {
    const q = query;
    const key = "BlLVN1kAzi2C5fqMynCUpbxWhqa6qOxL";
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?q=${q}&api_key=${key}&limit=${limit}`;

    axios.get(url).then(res => {
      const data = res.data.data;
      const imageUrlList = data.map(e => {
        return e.images.downsized.url;
      });
      this.setState({ gifUrlList: imageUrlList });
    });
  };
}

render(<App />, document.getElementById("root"));
