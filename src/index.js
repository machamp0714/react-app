import React from "react";
import { render } from "react-dom";
// import { TodoApp } from "./TodoApp";
import axios from "axios";

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

const search = "cat";
const key = "BlLVN1kAzi2C5fqMynCUpbxWhqa6qOxL";
const limit = 3;

const url = `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${key}&limit=${limit}`;

axios.get(url).then(res => {
  const data = res.data.data;
  const imageURL = data[0].images.downsized.url;
  const img = document.createElement("img");
  img.src = imageURL;

  document.body.appendChild(img);
});
