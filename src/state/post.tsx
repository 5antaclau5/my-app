import React, { ReactNode, useState } from "react";

export const Post = () => {
    const [name, setName] = useState('Ant');
    const [message, setMessage] = useState('Empty');

    const UpdateMessage = () => {
        setName('Future');
        setMessage('Hello' + name);
    }

    return (
        <div style={{ padding: 10 }}>
            <div>
                {message} and {name}
            </div>
            <button onClick={UpdateMessage}>Post</button>
        </div>
    )
}

export const Counter = () => {
    const [num, setNumber] = useState(0);

    return (
        <div style={{ padding: 10 }}>
            <div>
                {num}
            </div>
            <button onClick={() => {
                setNumber(num + 1)
                setNumber(num + 1)
                setNumber(num + 2)
            }
            }>Counter</button>
        </div>
    )
}

export const EditCounter = () => {
    const [num, setNumber] = useState(0);

    return (
        <div style={{ padding: 10 }}>
            <div>
                {num}
            </div>
            <button onClick={() => {
                setNumber(num + 3)
                setNumber((prev) => prev + 1)
                setNumber(num + 2)
            }
            }>Counter</button>
        </div>
    )
}

export const EditCounterV1 = () => {
    const [num, setNumber] = useState(0);

    return (
        <div style={{ padding: 10 }}>
            <div>
                {num}
            </div>
            <button onClick={() => {
                setNumber(num + 3)
                setNumber((prev) => prev + 1)
                setNumber(num + 3)
                setNumber((prev) => prev + 2)
            }
            }>Counter</button>
        </div>
    )
}
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const RequestTracker = () => {
    const [pending, setPending] = useState(0);
    const [completed, setCompleted] = useState(0);

    async function onClick() {
        setPending(pending + 1);
        await delay(3000);
        setPending(pending - 1);
        setCompleted(completed + 1);
    }

    return (
        <div style={{ padding: 10 }}>
            <div>
                {pending}
            </div>
            <div>
                {completed}
            </div>
            <button onClick={onClick}>Click</button>
        </div>
    )
}

interface artists {
    id: number;
    name: string;
}

let nextId = 0;
export const StateList = () => {
    const [name, setName] = useState('');
    const [artists, setArtists] = useState([] as Array<artists>);

    return (
        <div style={{ padding: 10 }}>
            <h1> alb </h1>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={() => {
                // artists.push({
                //     id: nextId++,
                //     name: name
                // })
                // setArtists([...artists]);
                setArtists([...artists, { id: nextId++, name: name }]);
            }}>Click</button>
            <ul>
                {
                    artists.map((artist: any) => (
                        <li key={artist.id}>{artist.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
