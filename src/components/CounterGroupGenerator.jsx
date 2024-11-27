import { useState } from "react";

const CounterGroupGenerator = ({ setGlobalSize }) => {
  const [size, setSize] = useState(0);

  const onChangeHandler = (event) => {
    const value = Math.max(0, Math.min(20, Number(event.target.value) || 0));
    setSize(value);
  };

  const resetHandler = () => {
    setGlobalSize(size);
  };

  return (
    <div className="counter-group-generator">
      <span style={{ marginRight: "15px" }}>Size:</span>
      <input
        style={{ marginRight: "15px" }}
        min={0}
        max={20}
        type={"number"}
        value={size}
        onChange={onChangeHandler}
      />
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CounterGroupGenerator;
