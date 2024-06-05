import { useCallback, useEffect, useRef, useState } from "react";

export const UserRef = () => {
    return <>
        <div>UserRef</div>
        {/* <Reference /> */}
        <RefVariable />
    </>
}

const Reference = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const onFocus = () => {
        if (inputRef.current) {
            inputRef.current?.focus();
            console.log("onFocus" + inputRef.current?.value)
        }
    }

    return <div>
        <input type="text" ref={inputRef} title="Enter your input here" placeholder="Type something..." />
        <button onClick={() => onFocus()}>Focus</button>
    </div>
}

const RefVariable = () => {
    console.log("Renderes")
    const [count, setCount] = useState(0);
    const value = useRef("");

    return <div>
        <input type="text" onChange={(e) => (value.current = e.target.value)} title="Enter your input here" placeholder="Type something..." />
        <button onClick={() => alert(value.current)}>Submit</button>
        <button onClick={() => setCount(prev => prev + 1)}>Count</button>
    </div>
}