import { useState } from "react";

export default function PitfallState() {
  const [count, setCount] = useState(0);

  const handleAlertClick = () => {
    setTimeout(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  };

  return (
    <div>
      <h1>Pitfall 1</h1>
      <p>
        <strong>You clicked {count} times</strong>
      </p>
      <button onClick={handleAlertClick}>Show count</button>
    </div>
  );
}