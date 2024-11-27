import { useEffect, useState } from "react";
import CounterGroup from "./CounterGroup";
import CounterGroupGenerator from "./CounterGroupGenerator";
import CountersSum from "./CountersSum";

const MultipleCounter = () => {
  const [size, setSize] = useState(0);
  const [sizeArray, setSizeArray] = useState(Array.from({ length: size }));
  const [realCounts, setRealCounts] = useState([]);

  useEffect(() => {
    setSizeArray(Array.from({ length: size }));
    setRealCounts(Array.from({ length: size }).fill(0));
  },[size]);


  return (
    <div>
      <CounterGroupGenerator setGlobalSize={setSize} />
      <CountersSum realCounts={realCounts} />
      <CounterGroup size={size} sizeArray={sizeArray} realCounts={realCounts} setRealCounts={setRealCounts}/>
    </div>
  );
};

export default MultipleCounter;
