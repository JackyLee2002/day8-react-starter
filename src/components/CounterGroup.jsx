import Counter from "./Counter";

const CounterGroup = ({ sizeArray, realCounts, setRealCounts }) => {

  const updateRealCounts = (index, value) => {
    const newCounts = [...realCounts];
    newCounts[index] = value;
    setRealCounts(newCounts);
  };

  return (
    <div>
        {sizeArray.map((_,index) => (
          <Counter 
          index={index}
          count={realCounts[index]}
          setCount={updateRealCounts}
          id={index + `${Math.random()}`} key={index +`${Math.random()}`} />
      ))}
    </div>
  );
};

export default CounterGroup;
