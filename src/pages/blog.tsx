import { Outlet, useParams } from "react-router-dom"
import { Navber } from "./navber"

export const BlogPage = () => {
    return (
        <>
            <p>Blog</p>
            <Outlet />
        </>
    )
}

export const BlogTextPage = () => {
    const { id } = useParams();

    return (
        <div className="App">
            <div>Text :{id}</div>
        </div>
    )
}


export const BlogDetailPage = () => {
    const { id } = useParams();

    return (
        <div className="App">
            <Navber />
            <header className="App-header">
                <p>Blog ID :{id}</p>
            </header>
        </div>
    )
}
