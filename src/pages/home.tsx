import { useLocation } from "react-router-dom"
import { Navber } from "./navber"

export const HomePage = () => {
    const location = useLocation();
    return (
        <>
            <p>Home</p>
            <p>{location.state}</p>
        </>
    )
}
