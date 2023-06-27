import React from "react";
import attack from "../../images/attack.png";
import defend from "../../images/defend.png";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAttack = this.handleAttack.bind(this);
    this.handleDefence = this.handleDefence.bind(this);
    this.state = { count: 0 };
  }
  handleAttack = () => {
    // alert("Attack clicked");

    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  };
  handleDefence = () => {
    //alert("Defend clicked");

    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10);
      return {
        count: newCount,
      };
    });
  };

  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if (playMode === 0) {
      this.handleAttack();
    } else {
      this.handleDefence();
    }
  };

  handleReset = () => {
    this.setState((previousState) => {
      return {
        count: 0,
      };
    });
  };

  render() {
    const score = "Game Score";
    return (
      <div className="row text-center text-white">
        <h1 style={{ color: "white" }}>
          {score} : {this.state.count}
        </h1>
        <p>You win at +10 points and lose at -10 points</p>
        <p>Last play:</p>
        <h3>Game status:</h3>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid green",
            }}
            className="p-4 rounded"
            src={attack}
            onClick={this.handleAttack}
          ></img>
        </div>
        <div className="col-6 col-md-3 offset-md-3">
          <img
            style={{
              width: "100%",
              cursor: "pointer",
              border: "1px solid red",
            }}
            className="p-4 rounded"
            src={defend}
            onClick={this.handleDefence}
          ></img>
        </div>
        <div className="col-12 col-md-4 offset md-4">
          <button
            className="btn btn-secondary w-100 mt-2"
            onClick={this.handleRandomPlay}
          >
            Random Play
          </button>
          <button
            className="btn btn-warning w-100 mt-2"
            onClick={this.handleReset}
          >
            Restart
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
