import { useState } from "react";


const CounterGroupGenerator = (props) => {
  const [size, setSize] = useState(0);

  const { setSize: setHigherLevelSize } = props;

  const onChangeHandler = (event) => {
    if (event.target.value < 0) {
      setSize(0);
    }
    else if (event.target.value > 20) {
      setSize(20);
    } else {
      setSize(event.target.value);
    }
  };

  const resetHandler = () => {
    setHigherLevelSize(size);
  };

  return (
    <div className="counter-group-generator">
      <span style={{marginRight: "15px"}}>Size:</span>
      <input
        style={{marginRight: "15px"}}
        min={0}
        max={20}
        type={"number"}
        value={size}
        onChange={onChangeHandler}
      ></input>
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
};

export default CounterGroupGenerator;
