import React from "react";

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { q: "" };
  }

  render() {
    return (
      <div>
        <h2>Find Your Gif</h2>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.q} onChange={this.handleChange} />
          <input type="submit" value="search" />
        </form>
      </div>
    );
  }

  handleChange = event => {
    const q = event.target.value;
    this.setState({ q: q });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.q);
  };
}
