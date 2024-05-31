import React, { ReactNode, useState } from "react";

export const Gallery = () => {
    const [count, setCount] = useState(1);

    return (
        <div style={{ padding: 10 }}>
            <h1>Gallery #{count}</h1>
            <button onClick={() =>  setCount(count + 1) }>+</button>
            <button onClick={() =>  setCount(count - 1) }>-</button>
        </div>
    )
}




