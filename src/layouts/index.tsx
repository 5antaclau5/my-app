import { Outlet } from "react-router-dom"
import { Navber } from "../pages/navber"

export const Layout = () => {
    return (
        <div className="App">
            <Navber />
            <header className="App-header">
                <Outlet></Outlet>
            </header>
        </div>
    )
}