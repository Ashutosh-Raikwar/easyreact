import react from "react";

const Transaction = (props) => {
  return (
    <div>
      <div>
        <input className="input_Box" type="number" value={props.input} onChange={props.input_box} />
        <button id="add_Money_Btn" onClick={props.addMoney}>Add Money</button>
      </div>
      <div>
        <input className="input_Box" type="number" value={props.deduct} onChange={props.deduct_box} />
        <button id="buy_Now_Btn" onClick={props.deduction}>Buy Now</button>
      </div>
      <h1>{`Balance: ${
        localStorage.getItem("currentBalance") > 0
          ? localStorage.getItem("currentBalance") + " Rs"
          : "Add money in your account"
      }`}</h1>
    </div>
  );
};

export default Transaction;
