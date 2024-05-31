import React, { ReactNode } from "react";


export const Toolber = () => {
    return (
        <div onClick={() => alert('onClick')} style={{background:"red"}}>
            <Button onClick={() => alert('button 1')}>button 1</Button>
            <Button onClick={() => alert('button 2')}>button 2</Button>
            <Button onClick={() => alert('button 3')}>button 3</Button>
        </div>
    )
}
interface Props {
    onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
    children: ReactNode
}

const Button = ({ onClick, children }: Props) => {
    return (
        <div style={{ padding: 10 }}>
            <button onClick={(e) => {
                if (onClick) {
                    e.stopPropagation();
                    onClick(e);
                }
            }}>{children}</button>
        </div>
    )
}

export default Button