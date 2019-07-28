import React from "react";
import { render } from "react-dom";

// React Component
const ReturnReactElement = ({ name, music }) => {
  return (
    <h2>
      {name} {music}
    </h2>
  );
};

render(
  <ReturnReactElement name="nakanishi" music="jazz" />,
  document.getElementById("root")
);
