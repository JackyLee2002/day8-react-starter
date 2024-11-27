import { useState } from "react";

const Counter = () => {
  const [count, setCounter] = useState(0);

  return (
    <div>
      <button style={{marginRight: "5px"}} onClick={() => setCounter(count + 1)}>+</button>
      {count}
      <button style={{marginLeft: "5px"}} onClick={() => setCounter(count - 1)}>-</button>
    </div>
  );
};

export default Counter;
