import React from "react";

export default class App7 extends React.Component {
  constructor() {
    super();
    this.state = {
      loding: false,
      character: {}
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.co/api/people/1")
      .then(response => response.json())
      .then(data => {
        this.setState({
          loading: true,
          character: data
        });
      });
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name;
    return (
      <div>
        <p>{text}</p>
      </div>
    );
  }
}
