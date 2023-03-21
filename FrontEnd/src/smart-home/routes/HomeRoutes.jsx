import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../ui"
import { CameraPage, HomePage } from "../pages"


export const HomeRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <Routes>
                    <Route path="home" element={<HomePage />} />
                    <Route path="camera" element={<CameraPage />} />

                    <Route path="/" element={<Navigate to="home" replace/>} />
                </Routes>

            </div>

        </>
    )
}
