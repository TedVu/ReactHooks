import { useState, React } from "react";
import Increase from "./Increase";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      {count}
      <Increase
        onClick={() => {
          setCount(count + 1);
        }}
      />
    </div>
  );
};

export default Counter;
