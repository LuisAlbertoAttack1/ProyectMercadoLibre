import { NavLink } from "react-router-dom"
import "../css/Navbar.css"
import logo from '../img/navbar/logo.png';
import promo from '../img/navbar/promocion.webp';
import { CiLocationOn } from 'react-icons/ci';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { BsSearch } from 'react-icons/bs';

export const Navbar = () => {
  return (
    <>
      <div className="container-fluid bg-yellow">
        <div className="row p-2 justify-content-center">
          <div className="col-2">
            <img src={logo} className="mx-auto d-block" alt="Mi Logo" />
          </div>
          <div className="col-5">
            <div class="input-group">
              <input type="text" className="form-control" placeholder="Buscar productos, marcas y más..."/>
              <span class="input-group-text"><BsSearch className="siz"/></span>
            </div>
          </div>
          <div className="col-3">
            <img src={promo} className="img-fluid mx-auto d-block" alt="" />
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-yellow">
        <div className="container">
          <div className="mr-5 ml-5 mx-5 ms-5">    
            <div className="">
              <NavLink className="btn btn-nav" aria-current="page" to='/ca'><CiLocationOn className="fs-5 mb-2 me-2"/>Ingresa tu domicilio</NavLink>
            </div>        
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">            
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/ca'>Categorías</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/MisCompras'>Ofertas</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'>Historial</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'>Supermercado</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'>Moda</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'>Vender</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'>Ayuda</NavLink>
              </div>
            </div>

            <div className="navbar-nav">            
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/a'>Crea tu cuenta</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/s'>Ingresa</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/s'>Mis compras</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/s'><PiShoppingCartSimpleLight className="fs-5"/></NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

