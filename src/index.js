import React from "react";
import { render } from "react-dom";

const title = "こんにちは、世界";
const body = "こちらが本文です。";

const returnStrings = () => "文字列を返す。";

var reactElement = (
  <div>
    <p>{returnStrings()}</p>
    <p>{Math.random()}</p>
    <h2>{title}</h2>
    <p>{body}</p>
  </div>
);

render(reactElement, document.getElementById("root"));
