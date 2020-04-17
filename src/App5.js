import React from "react";
import randomcolor from "randomcolor";

class App5 extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count != this.state.count) {
      const newColor = randomcolor();
      this.setState({ color: newColor });
    }
  }

  render() {
    return (
      <div>
        <h1 style={{ color: this.state.color }}>{this.state.count}</h1>
        <button onClick={this.handleClick}>Increment!</button>
      </div>
    );
  }
}

export default App5;
