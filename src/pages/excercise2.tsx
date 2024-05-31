import NameSearch from "../components/ex2/NameSearch"
import Square from "../components/ex2/Square"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function StateExcercise() {

  const renderRow = (rowNumbers: number[]) => (
    <div className="board-row">
      {rowNumbers.map((number) => (
        <Square key={number} ></Square>
      ))}
    </div>
  );

  return (
    <>

      {/* TODO: Refactor this using map */}
      <div>
        {renderRow(numbers.slice(0, 3))}
        {renderRow(numbers.slice(3, 6))}
        {renderRow(numbers.slice(6, 9))}
      </div>

      <div><NameSearch /></div>
    </>
  )
}

export default StateExcercise 