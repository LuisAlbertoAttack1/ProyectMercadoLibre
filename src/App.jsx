import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "./views/NotFound"
import { Home } from "./views/Home"
import { MisCompras } from "./views/MisCompras"
import { CarritoDeCompras } from "./views/CarritoDeCompras"
import { Navbar } from "./components/Navbar"
import { Header } from "./components/Header"
import { Historial } from "./views/Historial"
import { CrearCuenta } from "./views/CrearCuenta"
import { Ingresar } from "./views/Ingresar"
import "./css/main.css";


export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <>
            <Navbar />
            <Home />
          </>} />
          <Route path="/MisCompras" element={<>
            <Navbar />
            <MisCompras />
          </>}  />
          <Route path="/Historial" element={
          <>
            <Navbar />
            <Historial />
          </>}  />
          <Route path="/CarritoDeCompras" element={
          <>
            <Navbar />
            <CarritoDeCompras />
          </>} />
          <Route path="/CrearCuenta" element={<>
            <Header/>
            <CrearCuenta />
          </>} />
          <Route path="/Ingresar" element={<>
            <Header/>
            <Ingresar />
          </>} />
          <Route path="/*" element={
          <>
            <Header/>
            <NotFound />
          </>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
