import { useState } from "react";
//Fix this code
const Square = () => {
  const [value, setValue] = useState("");

  function handleClick() {
    //TODO: change value to 'X' when user click
    setValue(v => (v === 'X' ? '' : 'X'));
  }

  return (
    <button onClick={() => handleClick()} className="square"> {value} </button>
  );
};

export default Square;
