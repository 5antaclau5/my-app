import { useNavigate } from "react-router-dom";
import PitfallState from "../components/ex3/pitfall"
import { Pitfall2 } from "../components/ex3/pitfall2"

const StateExcercisePitfall = () => {
  const navigate = useNavigate();
  function goBackHome() {
    //TODO: navigate back to home with state
    navigate('/', { state: "From About Page StateExcercisePitfall" })
  }
  return (<>
    <PitfallState />
    <Pitfall2 />
    <button onClick={goBackHome}>Take me home</button>
  </>)
}

export default StateExcercisePitfall