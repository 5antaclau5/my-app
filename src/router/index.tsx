import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import { AboutPage } from "../pages/about"
import { BlogDetailPage, BlogPage, BlogTextPage } from "../pages/blog"
import { ContractPage } from "../pages/contract"
import { DashboardPage } from "../pages/dashboard"
import { Layout } from "../layouts"
import { NotFoundPage } from "../pages/notfound"
import StateExcercisePitfall from "../pages/excercise3"

export const AppRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog" element={<BlogPage />} >
                    <Route path=":id" element={<BlogTextPage />} />
                </Route>
                <Route path="/ex3" element={<StateExcercisePitfall />} />
                {/* <Route path="/blog/:id" element={<BlogDetailPage />} /> */}

                <Route path="/dashboard" element={<DashboardPage />} >
                    <Route path="stats" element={<div>Stats</div>} />
                    <Route path="settings" element={<div>Settings</div>} />
                </Route>

                <Route path="/contract" element={<ContractPage />} />
                <Route path="/donoclick" element={<Navigate to={"/"} state={'From About Page Do Not Click'} />} />

                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}
