import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./views/NotFound"
import { Home } from "./views/Home"
import { MisCompras } from "./views/MisCompras"
import { CarritoDeCompras } from "./views/CarritoDeCompras"
import { Navbar } from "./components/Navbar"
import { Historial } from "./views/Historial"
import "./css/main.css";


export const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MisCompras" element={<MisCompras />}  />
            <Route path="/Historial" element={<Historial />}  />
            <Route path="/CarritoDeCompras" element={<CarritoDeCompras />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
