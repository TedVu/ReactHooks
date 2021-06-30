import React from "react";
const Increase = ({ onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
};

export default Increase;
