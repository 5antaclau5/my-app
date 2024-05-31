import { Link } from "react-router-dom"
import { Navber } from "./navber"

export const AboutPage = () => {
    return (
        < >
            <p>About</p>
            <Link to='/' state={'From About Page About'}>Back</Link>
        </>
    )
}
