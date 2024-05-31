import { useLocation, useNavigate } from "react-router-dom"
import { Navber } from "./navber"

export const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>404 Not Found</p>
            <button onClick={() => navigate('/')}>Go To Home</button>
        </>
    )
}
