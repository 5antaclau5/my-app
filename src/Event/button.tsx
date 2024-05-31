
const Button = () => {

    const onClickMe = () => {
        console.log("Click Me");
    }

    return (
        <div style={{ padding: 10 }}>
            <button onClick={onClickMe}>Click Me 1</button>
            <button onClick={() => console.log("Click Me 2")}>Click Me 2</button>
            <button onClick={() => {
                console.log("Click Me 3")
                console.log("Click Me 4")
            }}>Click Me 3</button>
            <button onClick={function () { console.log("Click Me 5") }}>Click Me 4</button>
        </div>
    )
}

export default Button