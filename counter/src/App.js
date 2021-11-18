import React from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0,
      status: "stop",
    };
  }

  counter = () => {
    // this.setState({minutes: this.state.minutes +1})

    if (this.state.seconds >= 59) {
      this.setState({ seconds: 0 });
      this.setState({minutes: this.state.minutes +1})
    } else {
      this.setState({ seconds: this.state.seconds + 1 });
    }
  };

  stopCount = () => {
    this.setState({ status: "stop" });
    clearInterval(this.secondId);
    clearInterval(this.minuteId);
  };

  startCount = () => {
    this.secondId = setInterval(this.counter, 1000);
    this.minuteId = setInterval(this.counter, 3600000);
    this.setState({ status: "start" });
  };

  resetCount = () => {
    this.setState({ status: "stop" });
    clearInterval(this.secondId);
    this.setState({ seconds: 0 });
    clearInterval(this.minuteId);
    this.setState({ minutes: 0 });
  };

  render() {
    return (
      <div>
        <button
          id="start"
          onClick={this.startCount}
          {...(this.state.status == "stop" ? {} : { disabled: "disabled" })}
        >
          Start
        </button>
        <button
          id="stop"
          onClick={this.stopCount}
          {...(this.state.status == "stop" ? { disabled: true } : {})}
        >
          Stop
        </button>
        <button id="reset" onClick={this.resetCount}>
          Reset
        </button>

        <Counter
          second={this.state.seconds}
          minute={this.state.minutes}
          hour={this.state.hour}
        />
      </div>
    );
  }
}

export default App;
