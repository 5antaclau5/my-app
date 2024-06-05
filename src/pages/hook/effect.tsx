import { useEffect, useState } from "react";

export const UserEffect = () => {
    return <FristTime />
}

const Away = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect")
    });

    return (
        <div>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount(c => c + 1)}>Count</button>
        </div>
    )
}

const FristTime = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect")
    }, []);

    return (
        <div>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount(c => c + 1)}>Count</button>
        </div>
    )
}

const Changed = () => {
    const [count, setCount] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        console.log("useEffect : " + count)
    }, [count]);


    useEffect(() => {
        console.log("FirstName :" + firstName)
        console.log("LastName :" + lastName)
    }, [firstName, lastName]);

    return (
        <div>
            <h3>{count}</h3>
            <button type="button" onClick={() => setCount(c => c + 1)}>Count</button>
            <button type="button" onClick={() => setFirstName("T O N K L A")}>FirstName</button>
            <button type="button" onClick={() => setLastName("J K A A I T")}>LastName</button>
        </div>
    )
}

const Cleanup = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const onResize = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', onResize)
        //Cleanup
        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, []);

    return <div>
        <h1>{width}</h1>
    </div>
}