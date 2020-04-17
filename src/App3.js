import React from "react";

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => {
      return { isLoggedIn: !prevState.isLoggedIn };
    });
  }

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN";
    let displayText = this.state.isLoggedIn ? "Logged in" : "Logged out";
    return (
      <div>
        {this.state.isLoggedIn === true ? (
          <h1>You are currently logged in</h1>
        ) : (
          <h1>You are currently logged out</h1>
        )}

        <button onClick={this.handleClick}>{buttonText}</button>
        <h1>{displayText}</h1>
      </div>
    );
  }
}

export default App;
