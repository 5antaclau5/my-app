import { NavLink } from "react-router-dom"

export const Navber = () => {
    return <nav>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Home -</NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- About -</NavLink>
        <NavLink to="/blog" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Blog -</NavLink>
        <NavLink to="/contract" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Contract -</NavLink>
        <NavLink to="/ex3" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Ex3 -</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- dashboard -</NavLink>
         <NavLink to="/hook" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Hook -</NavLink> 
        <NavLink to="/donoclick" className={({ isActive }) => (isActive ? 'link-active' : 'link-unactive')}>- Do Not Click -</NavLink>
    </nav>
}
