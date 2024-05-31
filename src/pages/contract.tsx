import { useNavigate } from "react-router-dom"
import { Navber } from "./navber"

export const ContractPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>Contract</p>
            <button onClick={() => { navigate('/', { state: "From About Page Contract" }) }}>Navigate to Home</button>
        </>
    )
}
