import React from "react";

class Counter extends React.Component {
  handleAttack = () => {
    alert("Attack clicked");
  };
  handleDefence = () => {
    alert("Defend clicked");
  };

  render() {
    const counter = "Counter";
    return (
      <div className="row text-center">
        <h1 style={{ color: "white" }}>{counter}</h1>
        <div>
          <button onClick={this.handleAttack} style={{ width: "200px" }}>
            +1
          </button>
          <button onClick={this.handleDefence} style={{ width: "200px" }}>
            -1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
