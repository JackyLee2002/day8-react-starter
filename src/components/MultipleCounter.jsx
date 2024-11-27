import { useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";

const MultipleCounter = () => {
  const [size, setSize] = useState(0);

  return (
    <div>
      <CounterGroupGenerator size={size} setSize={setSize} />
      <CounterGroup size={size} />
    </div>
  );
};

export default MultipleCounter;
