import { NavLink } from "react-router-dom";
import "../css/navbar.css";
import logo from '../img/navbar/logo.png';
import promo from '../img/navbar/promocion.webp';
import { CiLocationOn } from 'react-icons/ci';
import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { BsSearch } from 'react-icons/bs';
import { SlArrowDown } from 'react-icons/sl';

export const Navbar = () => {
  return (
    <div className="">
      <div className="container-fluid bg-yellow">
        <div className="row p-2 justify-content-center">
          <div className="col-12 col-md-2 mb-3 mb-sm-0 mt-1">
            <a href="/">
              <img src={logo} className="mx-auto d-block" alt="Mi Logo"/>
            </a>
          </div>
          <div className="col-11 col-md-5 mb-3 mb-sm-0 mt-1">
            <div class="input-group">
              <input type="text" className="form-control" placeholder="Buscar productos, marcas y más..."/>
              <span class="input-group-text" style={{background:"#fff"}}><BsSearch className="siz"/></span>
            </div>
          </div>
          <div className="col-5 d-none d-md-block col-md-3 mb-3 mb-sm-0 mt-1">
            <img src={promo} className="img-fluid mx-auto d-block" alt="" />
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-yellow">
        <div className="container">
          <div className="mr-5 ml-5 mx-5 ms-5">    
            <div className="">
              <NavLink className="btn btn-nav" aria-current="page" to='/ca' style={{fontSize:"0.9rem", backgroundImage: {promo}}}><CiLocationOn className="fs-5 mb-2 me-2"/>Ingresa tu domicilio</NavLink>
            </div>        
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse text-center" id="navbarNavAltMarkup">
            <div className="navbar-nav mx-auto">
              <li class="nav-item dropdown">
                <a class="nav-link btn btn-nav" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{fontSize:"0.9rem",color: "#857b7b"}}>
                  Categorías <SlArrowDown style={{fontSize:"10px"}}/>
                </a>
                <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                  <li><a class="btn btn-dark w-100 text-start" href="#">Vehículos</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Supermercado</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Tecnología</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Electrodomésticos</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Hogar y Muebles</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Moda</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Deportes y Fitness</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Herramientas</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Construcción</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Industrias y Oficinas</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Accesorios para Vehículos</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Juegos y Juguetes</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Bebés</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Salud y Equipamiento Médico</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Belleza y Cuidado Personal</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Inmuebles</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Compra Internacional</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Productos Sustentables</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Más vendidos</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Tiendas oficiales</a></li>
                  <li><a class="btn btn-dark w-100 text-start" href="#">Ver más categorías</a></li>
                </ul>
              </li>
              <div className="">
                <a className="btn btn-nav" href="#" style={{fontSize:"0.9rem",color: "#857b7b"}}>Ofertas</a>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/Historial' style={{fontSize:"0.9rem",color: "#857b7b"}}>Historial</NavLink>
              </div>
              <div className="">
                <a className="btn btn-nav" href="#" style={{fontSize:"0.9rem",color: "#857b7b"}}>Supermercado</a>
              </div>
              <div className="">
                <a className="btn btn-nav" href="#" style={{fontSize:"0.9rem",color: "#857b7b"}}>Moda</a>
              </div>
              <div className="">
                <a className="btn btn-nav" href="#" style={{fontSize:"0.9rem",color: "#857b7b"}}>Vender</a>
              </div>
              <div className="">
                <a className="btn btn-nav" href="#" style={{fontSize:"0.9rem",color: "#857b7b"}}>Ayuda</a>
              </div>
            </div>

            <div className="navbar-nav">            
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CrearCuenta' style={{fontSize:"0.9rem"}}>Crea tu cuenta</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/Ingresar' style={{fontSize:"0.9rem"}}>Ingresa</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/MisCompras' style={{fontSize:"0.9rem"}}>Mis compras</NavLink>
              </div>
              <div className="">
                <NavLink className="btn btn-nav" aria-current="page" to='/CarritoDeCompras'><PiShoppingCartSimpleLight className="fs-5 mb-2"/></NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
  )
}

