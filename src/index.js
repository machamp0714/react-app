import React from "react";
import { render } from "react-dom";

const returnReactElement = () => <h2>text</h2>;

const returnReactElement2 = hello => <h2>{hello}</h2>;

const returnReactElement3 = (no, name) => {
  const newStrings = `${no}番目は${name}さんです。`;
  return <h2>{newStrings}</h2>;
};

render(returnReactElement3(1, "nakanishi"), document.getElementById("root"));
