import { ReactNode, useState } from "react";

export const Litting = () => {
    return (
        <div>
            <h2>Litting</h2>
            {/* <Expanded/> */}
            <MyApp />
            {/* <Accordion /> */}
        </div>
    )
}

const Accordion = () => {
    const [ActiveIndex, setActiveIndex] = useState(0);

    return <div>
        <h4>Accordion</h4>
        <PanelAccordion title="About" children={"ทดสอบ About"} IsActive={ActiveIndex == 0} onShow={() => setActiveIndex(0)} />
        <PanelAccordion title="Contract" children={"ทดสอบ Contract"} IsActive={ActiveIndex == 1} onShow={() => setActiveIndex(1)} />
    </div>
}

interface PanelAccordion {
    title: string
    children: ReactNode
    IsActive: boolean
    onShow: () => void
}
const PanelAccordion = ({ title, children, IsActive, onShow }: PanelAccordion) => {
    return <div>
        <h3>{title}</h3>
        {IsActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
    </div>
}


const MyApp = () => {
    const [num, setNum] = useState(0);
    return (
        <div>
            <h3>{num}</h3>
            <MyBt title={num} onShow={() => setNum(v => v + 1)} />
            <MyBt title={num} onShow={() => setNum(v => v + 1)} />
        </div>
    )
}

interface MyBtProps {
    title: number;
    onShow: () => void
}

const MyBt = ({ title, onShow }: MyBtProps) => {
    return (
        <section>
            <h3>{title}</h3>
            <button type="button" onClick={onShow}>Count</button>
        </section>
    )
}

const Expanded = () => {
    return (
        <div>
            <h2>Litting</h2>
            <PanelExpanded title="About">  TEST About</PanelExpanded>
            <PanelExpanded title="Contract">  TEST Contract </PanelExpanded>
        </div>
    )
}
interface Props {
    title: string
    children: ReactNode
}
const PanelExpanded = ({ title, children }: Props) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button onClick={() => setIsActive(true)}>Show</button>}
        </section>
    )
}
