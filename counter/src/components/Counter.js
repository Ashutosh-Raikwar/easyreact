import react from "react";

function Counter(props) {
  return (
    <div>
      <p>{`${props.minute} minutes:${props.second} seconds`}</p>
    </div>
  );
}

export default Counter;
