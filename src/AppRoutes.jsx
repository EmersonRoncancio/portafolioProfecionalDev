import { Route, Routes } from "react-router-dom"
import { AppPortafolio } from "./AppPortafolio"
import { Proyectos } from "./routes/Proyectos"

export const AppRoutes = () => {
  return (
    <>
        <Routes>
            <Route index path="/" element={<AppPortafolio/>}/>
            <Route path="/proyectos" element={<Proyectos/>}/>
        </Routes>
    </>
  )
}