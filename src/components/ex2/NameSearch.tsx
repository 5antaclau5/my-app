import { useState } from "react";

const nameList = ['Jone Doe', 'Tom Cruise', 'Terry Crew', 'Adam Sandler', 'Shah Rukh Khan', 'Hrithik Roshan']

const NameSearch = () => {
  const [value, setValue] = useState({
    nameList: nameList,
    search: ''
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const searchValue = e.target.value.toLowerCase();
    const filteredList = nameList.filter(name => name.toLowerCase().includes(searchValue));
    setValue({ nameList: filteredList, search: e.target.value });
  }

  return (<>
    <div>Filter <input name="filterName" onChange={handleChange}></input></div>
    {
      value.search && <label>Searce value : {value.search}</label>
    }
    
    <ul>
      {value.nameList.map((x: string, key: number) => {
        return (<li key={key}>{x}</li>)
      })}
    </ul>
  </>)
}

export default NameSearch