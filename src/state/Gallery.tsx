import React, { ReactNode, useState } from "react";


const sculptureList = [{
    name: 'Homenaje a la Neurocirugía',
}, {
    name: 'Floralis Genérica',
}, {
    name: 'Eternal Presence',
}, {
    name: 'Moai',
}, {
    name: 'Blue Nana',
}, {
    name: 'Ultimate Form',
}];

export const Gallery1 = () => {
    const [count, setCount] = useState(0);
    let index = sculptureList[count];
    
    return (
        <div style={{ padding: 10 }}>
            <h1>Gallery # {index.name}</h1>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}