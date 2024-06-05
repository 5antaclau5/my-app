import { useCallback, useEffect, useState } from "react";

export const UserCallback = () => {
    return <>
        <div>UserMemo</div>
        <UsCallback></UsCallback>
    </>
}

const FuncCount: Set<() => void> = new Set();
const NoCallback = () => {
    console.log("Rendered");
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = () => {
        setCount(prev => prev + 1)
    };

    const decrementCounter = () => {
        setCount(prev => prev - 1)
    };

    const inncrementNumber = () => {
        setNumber(prev => prev + 1)
    };
    FuncCount.add(incrementCounter);
    FuncCount.add(decrementCounter);
    FuncCount.add(inncrementNumber);
    console.log(FuncCount.size)
    return (
        <div>
            Count: {count}
            <button type="button" onClick={incrementCounter}>incrementCounter</button>
            <button type="button" onClick={decrementCounter}>decrementCounter</button>
            <button type="button" onClick={inncrementNumber}>inncrementNumber</button>
        </div>
    )
}


const UsCallback = () => {
    console.log("Rendered");
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);

    const incrementCounter = useCallback(() => {
        setCount(prev => prev + 1)
    }, [count]);

    const decrementCounter = useCallback(() => {
        setCount(prev => prev - 1)
    }, [count]);

    const inncrementNumber = useCallback(() => {
        setNumber(prev => prev + 1)
    }, [number]);

    FuncCount.add(incrementCounter);
    FuncCount.add(decrementCounter);
    FuncCount.add(inncrementNumber);
    console.log(FuncCount.size)
    return (
        <div>
            Count: {count}
            <button type="button" onClick={incrementCounter}>incrementCounter</button>
            <button type="button" onClick={decrementCounter}>decrementCounter</button>
            <button type="button" onClick={inncrementNumber}>inncrementNumber</button>
        </div>
    )
}