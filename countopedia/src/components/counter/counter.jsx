import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = { count: 0 };
  }
  handleAttack = () => {
    // alert("Attack clicked");
    this.setState({ count: this.state.count + 1 });
  };
  handleDefence = () => {
    //alert("Defend clicked");
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const counter = "Counter";
    return (
      <div className="row text-center">
        <h1 style={{ color: "white" }}>
          {counter} : {this.state.count}
        </h1>
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
