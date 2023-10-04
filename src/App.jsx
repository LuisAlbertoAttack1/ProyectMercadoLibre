import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./components/views/VistaNoEncontrada/NotFound"
import { Index } from "./components/views/Inicio"
import { MisCompras } from "./components/views/MisCompras/MisCompras"
import { CarritoDeCompras } from "./components/views/CarritoDeCompras/CarritoDeCompras"
import { Navbar } from "./components/Navbar/Navbar"


export const App = () => {
  return (
    <>

      <BrowserRouter>
      <Navbar />
          <Routes>
            {/* Rutas De Paginas Que Vamos A Visitar */}
            <Route path="/" element={<Index />} />
            <Route path="/MisCompras" element={<MisCompras />}  />
            <Route path="/CarritoDeCompras" element={<CarritoDeCompras />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}
