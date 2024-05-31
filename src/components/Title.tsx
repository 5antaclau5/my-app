import { ReactNode } from "react";

interface PropsType {
    ComponentName: keyof JSX.IntrinsicElements;
    children: string;
}

const Title = (props: PropsType) => {
    const { ComponentName, children } = props;
    return (<ComponentName> {children}</ComponentName>)
}

export default Title