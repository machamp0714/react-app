import React from "react";

export class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }

  render = () => {
    return (
      <div>
        <h2>AddToDo</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.title} onChange={this.handleChange} />
          <input type="submit" value="Add ToDo" />
        </form>
      </div>
    );
  };

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState({ title: "" });
  };
}
