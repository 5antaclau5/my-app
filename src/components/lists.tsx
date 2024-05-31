const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
];
//MAP
export const ListPeopleV1 = () => {
    return (
        <ul>
            {
                people.map((element, inx) => (
                    <li key={inx}>{element}</li>
                ))
            }
        </ul>
    )
}

export const ListPeopleV2 = () => {
    const list = people.map((e, inx) => <li key={inx}>{e}</li>)
    return <ul>{list}</ul>
}

