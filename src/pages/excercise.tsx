import { ReactNode } from "react"

interface Props {
  ComponentName: ReactNode
}

function ComponentExcercise(Props: Props) {

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  const renderRow = (rowNumbers: number[]) => (
    <div className="board-row">
      {rowNumbers.map((number) => (
        <button key={number} className="square">{number}</button>
      ))}
    </div>
  );
  
  return (
    <>
      <div style={{ padding: 10 }}>
        {Props.ComponentName}
      </div>
      <div>
        {renderRow(numbers.slice(0, 3))}
        {renderRow(numbers.slice(3, 6))}
        {renderRow(numbers.slice(6, 9))}
      </div>
    </>
  )
}

export default ComponentExcercise