
interface Props {
    name: string;
    isPacked: boolean;
}
const Item = ({ name, isPacked }: Props) => {
    if (isPacked) {
        return <li>{name}✔</li>
    }
    return <li>{name}</li>
}

export const PackingList = () => {
    return (
        <section>
            <ul>
                <Item name="สมชาย" isPacked={false} />
                <Item name="สมหญิง" isPacked={false} />
                <Item name="กัญญา" isPacked={true} />
            </ul>
        </section>
    )
}

const people =
    [
        { "name": "สมชาย", "isPacked": false },
        { "name": "สมหญิง", "isPacked": false },
        { "name": "กัญญา", "isPacked": true }
    ];

export const PackingListV2 = () => {
    const list = people.map((e, inx) => <Item key={inx} name={e.name} isPacked={e.isPacked} />)
    return <ul>{list}</ul>
}
export const PackingListV3 = () => {
    return (
        <ul>
            {
                people.map((e, inx) => <Item key={inx} name={e.name} isPacked={e.isPacked} />)
            }
        </ul>
    )
}