import { Link } from "react-router-dom"
import { Navber } from "./navber"

export const DashboardPage = () => {
    return (
        <>
            <p>Dashboard</p>
            <Link to="stats">Stats</Link>
            <Link to="settings">Settings</Link>
        </>
    )
}