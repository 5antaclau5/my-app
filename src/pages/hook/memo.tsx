import { useEffect, useMemo, useState } from "react";

export const UserMemo = () => {
    const [id, setid] = useState(0);
    const [no, setno] = useState(0);

    return <div>
        <div>UserMemo</div>
        <UsMemo id={id} no={no} />
        <button onClick={() => setid(prev => prev + 1)}> ID</button>
        <button onClick={() => setno(prev => prev + 1)}> NO</button>
    </div>
}

interface IusMemo {
    id: number;
    no: number;
}
const UsMemo = ({ id, no }: InoMemo) => {
    const result = useMemo(() => {
        console.log("complex calculation");
        let cal = 0;
        for (let index = 0; index < 100; index++) {
            cal += no;
        }
        return cal;
    }, [no]);

    useEffect(() => {
        console.log("active useEffect : " + result);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [id, no])
    return (
        <div>
            Child id :{id},cal : {result}
        </div>
    )
}



interface InoMemo {
    id: number;
    no: number;
}
const NoMemo = ({ id, no }: InoMemo) => {
    console.log("complex calculation");
    let cal = 0;
    for (let index = 0; index < 100; index++) {
        cal += no;
    }

    useEffect(() => {
        console.log("active useEffect : " + cal);
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, [id, no])
    return (
        <div>
            Child id :{id},cal : {cal}
        </div>
    )
}