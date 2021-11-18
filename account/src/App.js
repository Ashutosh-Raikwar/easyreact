import React from "react";
import Transaction from "./components/Transcation.js";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentBalance: 0,
      inbox: 0,
      deduct: 0,
    };
  }

  //function for adding money
  addMoney = (e) => {
    console.log(this.state.inbox);
    console.log(this.state.currentBalance);
    let res = this.state.inbox + this.state.currentBalance;
    localStorage.setItem("currentBalance", res);
    this.setState({ currentBalance: res });
  };

  //function for deducting money
  deduction = (e) => {
    console.log(this.state.deduct);
    console.log(this.state.currentBalance);
    let res = localStorage.getItem("currentBalance") - this.state.deduct;
    localStorage.setItem("currentBalance", res);
    this.setState({ currentBalance: res });
  };

  //function deduction box
  deduct_box = (e) => {
    this.setState({ deduct: Number(e.target.value) });
  };

  //function for addmoney box
  input_box = (e) => {
    this.setState({ inbox: Number(e.target.value) });
  };
  render() {
    return (
      <div>
        <Transaction
          data={this.state.currentBalance}
          input={this.state.inbox}
          input_box={this.input_box}
          addMoney={this.addMoney}
          deduct={this.state.deduct}
          deduct_box={this.deduct_box}
          deduction={this.deduction}
        />
      </div>
    );
  }
}
export default App;
