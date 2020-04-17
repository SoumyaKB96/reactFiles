import React from "react";

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false
    };
  }

  render() {
    let wordDisplay;
    if (this.state.isLoggedIn === true) {
      wordDisplay = "in";
    } else wordDisplay = "out";
    return (
      <div>
        <h1>Yout are currently logged (in/out){wordDisplay}</h1>
      </div>
    );
  }
}

export default App;
