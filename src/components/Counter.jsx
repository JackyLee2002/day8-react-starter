const Counter = ({ index, count, setCount }) => {
  return (
    <div>
      <button
        style={{ marginRight: "5px" }}
        onClick={() => setCount(index, count + 1)}
      >
        +
      </button>
      {count}
      <button
        style={{ marginLeft: "5px" }}
        onClick={() => setCount(index, count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
