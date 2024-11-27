import Counter from "./Counter";

const CounterGroup = (props) => {
  const { size } = props;

  const sizeArray = Array.from({ length: size });

  return (
    <div>
      {sizeArray.map((_,index) => (
          <Counter 

          id={index + `${Math.random()}`} key={index +`${Math.random()}`} />
      ))}
    </div>
  );
};

export default CounterGroup;
