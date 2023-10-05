import "../css/main.css"
import Img1Carrusel from '../img/ImgDeCarrusel/Img1Carrusel.webp'
import Img2Carrusel from '../img/ImgDeCarrusel/Img2Carrusel.webp'
import Img3Carrusel from '../img/ImgDeCarrusel/Img3Carrusel.webp'
import Img4Carrusel from '../img/ImgDeCarrusel/Img4Carrusel.webp'
import Img5Carrusel from '../img/ImgDeCarrusel/Img5Carrusel.webp'
import Img6Carrusel from '../img/ImgDeCarrusel/Img6Carrusel.webp'
import Img7Carrusel from '../img/ImgDeCarrusel/Img7Carrusel.webp'
import Citibanamexs from '../img/ImgPaginaPrincipal/Citibanamexs.png'
import Img1 from '../img/ImgDeCarruselCard/Img1.webp'
import Img2 from '../img/ImgDeCarruselCard/Img2.webp'
import Img3 from '../img/ImgDeCarruselCard/Img3.webp'
import Img4 from '../img/ImgDeCarruselCard/Img4.webp'
import Img5 from '../img/ImgDeCarruselCard/Img5.webp'
import Img6 from '../img/ImgDeCarruselCard/Img6.webp'
import Img7 from '../img/ImgDeCarruselCard/Img7.webp'
import Img8 from '../img/ImgDeCarruselCard/Img8.webp'
import Img9 from '../img/ImgDeCarruselCard/Img9.webp'
import Img10 from '../img/ImgDeCarruselCard/Img10.webp'
import Img11 from '../img/ImgDeCarruselCard/Img11.webp'
import Img12 from '../img/ImgDeCarruselCard/Img12.webp'
import Img13 from '../img/ImgDeCarruselCard/Img13.webp'
import Img14 from '../img/ImgDeCarruselCard/Img14.webp'
import Img15 from '../img/ImgDeCarruselCard/Img15.webp'
import Img16 from '../img/ImgDeCarruselCard/Img16.png'
import Img17 from '../img/ImgDeCarruselCard/Img17.png'
import Img18 from '../img/ImgDeCarruselCard/Img18.jpg'
import Img19 from '../img/ImgDeCarruselCard/Img19.jpg'
import Img20 from '../img/ImgDeCarruselCard/Img20.jpg'
import Img21 from '../img/ImgDeCarruselCard/Img21.jpg'
import Img22 from '../img/ImgDeCarruselCard/Img22.jpg'
import Img23 from '../img/ImgDeCarruselCard/Img23.jpg'
import Img24 from '../img/ImgDeCarruselCard/Img24.jpg'
import Img25 from '../img/ImgDeCarruselCard/Img25.jpg'
import Img26 from '../img/ImgDeCarruselCard/Img26.jpg'
import Img27 from '../img/ImgDeCarruselCard/Img27.jpg'
import Img28 from '../img/ImgDeCarruselCard/Img28.jpg'
import Img29 from '../img/ImgDeCarruselCard/Img29.jpg'
import Img30 from '../img/ImgDeCarruselCard/Img30.jpg'
import Img31 from '../img/ImgDeCarruselCard/Img31.jpg'
import Img32 from '../img/ImgDeCarruselCard/Img32.jpg'
import Img33 from '../img/ImgDeCarruselCard/Img33.jpg'
import Img34 from '../img/ImgDeCarruselCard/Img34.jpg'
import Img35 from '../img/ImgDeCarruselCard/Img35.jpg'
import Img36 from '../img/ImgDeCarruselCard/Img36.jpg'
import Img37 from '../img/ImgDeCarruselCard/Img37.jpg'
import Img38 from '../img/ImgDeCarruselCard/Img38.webp'
import Img39 from '../img/ImgDeCarruselCard/Img39.webp'
import Img40 from '../img/ImgDeCarruselCard/Img40.jpg'
import Img41 from '../img/ImgDeCarruselCard/Img41.jpg'
import Img42 from '../img/ImgDeCarruselCard/Img42.webp'
import Img43 from '../img/ImgDeCarruselCard/Img43.webp'
import Img44 from '../img/ImgDeCarruselCard/Img44.webp'
import Img45 from '../img/ImgDeCarruselCard/Img45.webp'
import Img46 from '../img/ImgDeCarruselCard/Img46.webp'
import Img47 from '../img/ImgDeCarruselCard/Img48.webp'
import Img48 from '../img/ImgDeCarruselCard/Img49.webp'
import Img49 from '../img/ImgDeCarruselCard/Img50.webp'
import Img50 from '../img/ImgDeCarruselCard/Img50.webp'
import Img51 from '../img/ImgDeCarruselCard/Img51.webp'
import Img53 from '../img/ImgDeCarruselCard/Img53.png'
import Img54 from '../img/ImgDeCarruselCard/Img54.png'
import Img55 from '../img/ImgDeCarruselCard/Img55.png'
import Img56 from '../img/ImgDeCarruselCard/Img56.png'
import Img57 from '../img/ImgDeCarruselCard/Img57.png'
import Img58 from '../img/ImgDeCarruselCard/Img58.png'
import Img59 from '../img/ImgDeCarruselCard/Img59.png'
import Img60 from '../img/ImgDeCarruselCard/Img60.png'
import Img61 from '../img/ImgDeCarruselCard/Img61.png'
import Img62 from '../img/ImgDeCarruselCard/Img62.png'
import Img63 from '../img/ImgDeCarruselCard/Img63.png'
import Img64 from '../img/ImgDeCarruselCard/Img64.png'
import Img65 from '../img/ImgDeCarruselCard/Img65.png'
import Img67 from '../img/ImgDeCarruselCard/Img67.png'
import payment from '../img/ImgDeCarruselCard/payment.svg'
import protecteds from '../img/ImgDeCarruselCard/protected.svg'
import shipping from '../img/ImgDeCarruselCard/shipping.svg'
import {Footer} from '../components/Footer';
export const Home = () => {
  return (
    <>

      {/* CARD DE CARRUSEL */}
      <div className="card">
        {/* CONTENIDO */}
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Img1Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img2Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img3Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img4Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img5Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img6Carrusel} className="img-fluid" alt="" />
            </div>
            <div className="carousel-item">
              <img src={Img7Carrusel} className="img-fluid" alt="" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* CONTENIDO */}
      </div>
      {/* CARD DE CARRUSEL */}


      {/* CONTENIDO DE CARD */}
      <div className="container mt-4">
        <div className="row">
          <div className="col">

            <div className='card mt-4 shadow p-3 mb-5 bg-body-tertiary rounded border-0'>
              <div className='card-body'>
                {/* CONTENIDO */}
                <div className="row row-cols-1 row-cols-md-4 g-4">
                  <div className="col">

                    <p>Paga cómodo y seguro <br />con Mercado Pago</p>

                  </div>
                  <div className="col">

                    <p>Hasta 3 meses sin intereses con: <br /> Ver condiciones</p>

                  </div>
                  <div className="col">

                    <img src={Citibanamexs} className='TamañoDeImgCitibanamex' alt="" />

                  </div>
                  <div className="col">

                    {/* contenido */}
                    <div className="row">
                      <div className="col-sm-6 mb-3 mb-sm-0">
                        <div className="card rounded-5 TamañoDeCardCirculo">
                          <div className="card-body">
                            <button className="btn btn-primary rounded-5 TamañoDeBotonCirculo"></button>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">

                        <p>Más medios de pago <br /> Ver todos</p>


                        {/* contenido */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* CONTENIDO */}
              </div>
            </div>
            {/* CONTENIDO */}
            <div>
              <h2>Ofertas <a href="#">Ver todas</a> </h2>
            </div>
            {/* CONTENIDO */}
          </div>
        </div>
      </div>
      {/* CONTENIDO DE CARD */}

      <div className="container">
        <div className="row">
          <div className="col">
            {/* CONTENIDO */}
            <div id="carouselExampleDos" className="carousel slide mt-4">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img1} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img2} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img3} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img4} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img5} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img6} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img7} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img8} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img9} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img10} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img11} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img12} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img13} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img14} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img15} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDos" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDos" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* CONTENIDO */}
            <div className="card rounded-3 shadow  bg-body-tertiary rounded border-0">             <div className="ColorUl rounded-top">
              <h2 className="text-white mt-4 mb-4 ms-5">Suscríbete a <img src={Img16} className="TamañoDeImgMeli" alt="" />  | $ 99 /mes </h2>
            </div>
              <div className="card-body">
                <p className="mt-4 mb-4 ms-4">Consigue los mejores beneficios en Mercado Libre</p>
                {/* CARD 3 */}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                  <div className="col">
                    <div className="card border-0 ColorTransparente">
                      <div className="card-body">
                        {/* CONTENIDO */}
                        <div className="row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card rounded-5 TamañodeCirculoDeCarrito ms-5 mt-4">
                              <div className="card-body">
                                <img src={Img17} className="TamañoDeCarrito" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">

                            <p className="mt-4">Envíos gratis en millones de productos</p>

                          </div>
                        </div>
                        {/* CONTENIDO */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 ColorTransparente">
                      <div className="card-body">
                        {/* CONTENIDO */}
                        <div className="row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card rounded-5 TamañodeCirculoDeCarrito ms-5 mt-4">
                              <div className="card-body">
                                <img src={Img18} className="TamañoDeCarrito" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">

                            <p className="mt-4">Disney+ y Star+ sin cargo</p>

                          </div>
                        </div>
                        {/* CONTENIDO */}
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card border-0 ColorTransparente">
                      <div className="card-body">
                        {/* CONTENIDO */}
                        <div className="row">
                          <div className="col-sm-6 mb-3 mb-sm-0">
                            <div className="card rounded-5 TamañodeCirculoDeCarrito ms-5 mt-4">
                              <div className="card-body">
                                <img src={Img19} className="TamañoDeCarrito" alt="" />
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">

                            <p className="mt-4">12 meses gratis de Deezer Premium</p>
                            <a href="#" className="btn btn-primary mt-4 ms-4">Suscribirme</a>
                          </div>
                        </div>
                        {/* CONTENIDO */}

                      </div>

                    </div>
                  </div>
                </div>
                {/* CARD 3 */}
              </div>
            </div>
            {/* CONTENIDO */}
            <div className="mt-4">
              <br />
              <h3 className="mt-4">Beneficios en contenidos</h3>
            </div>
            {/* CONTENIDO */}

            {/* 3CARD */}
            <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">

              <div className="col">
                <div className="card rounded-4 border-0">
                  <img src={Img20} className="rounded-4" alt="" />
                  <div className="card-body">
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0">
                  <img src={Img21} className="rounded-4" alt="" />
                  <div className="card-body">
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0">
                  <img src={Img22} className="rounded-4" alt="" />
                  <div className="card-body">
                  </div>
                </div>
              </div>
            </div>
            {/* 3CARD */}

            {/* CONTENIDO DE CAFE */}
            <div className="mt-4">
              <div className="card-group">
                <div className="card border-0">
                  <img src={Img23} alt="" />
                  <div className="card-body">
                  </div>
                </div>
                {/* UNCION DE CARD */}
                <div className="card ColorNegroFondoDeCafe border-0">
                  <div className="card-body">
                    <h5 className="text-white mt-4 ms-5">DISFRUTA TU FAVORITO</h5>
                    <h1 className="text-white mt-2 ms-5">YA DISPONIBLES EN <br />MERCADO LIBRE</h1>
                    <h4 className="text-white mt-2 ms-5">COMPRAR </h4>
                  </div>
                </div>
              </div>
            </div>
            {/* CONTENIDO DE CAFE */}

            {/* CARD 2 IMAGENES */}
            <div className="row mt-4">
              <div className="col-sm-6 mb-3 mb-sm-0 mt-4">

                {/* CONTENIDO */}
                <div className="card-group shadow  bg-body-tertiary rounded">
                  <div className="card  ColorTransparente border-0">
                    <div className="card-body">
                      <p>MASCOTAS</p>
                      <h5>HASTA 30% <br /> DE DESCUENTO </h5>
                      <button className="btn btn-primary">Ver Más</button>
                    </div>
                  </div>
                  <div className="card">
                    <img src={Img24} className="TamañoDeImgPerro" alt="" />

                  </div>
                </div>
                {/* CONTENIDO */}

              </div>
              <div className="col-sm-6 mt-4">

                {/* CONTENIDO */}
                <div className="card-group shadow  bg-body-tertiary rounded">
                  <div className="card ColorTransparente border-0">
                    <div className="card-body">
                      <p>DESCUENTOS</p>
                      <h5>OCTUBRE DEPORTIVO <br /> HASTA 35% OFF </h5>
                      <button className="btn btn-primary">Ver Más</button>
                    </div>
                  </div>
                  <div className="card">
                    <img src={Img25} alt="" />

                  </div>
                </div>
                {/* CONTENIDO */}

              </div>
            </div>
            {/* CARD 2 IMAGENES */}


            {/* DIV CONTIENE TEXTO */}
            <div className="ms-5 mt-4">
              <br />
              <h4 className="mt-4">Las mejores tiendas te esperan <a href="" className="ms-4">Ver tiendas</a></h4>
            </div>
            {/* DIV CONTIENE TEXTO */}

            {/* CONTENIDO DE CARRUSEL CARD */}
            <div id="carouselExampleTres" className="carousel slide mt-4">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* CONTENIDO CARD */}
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img26} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Hasbro</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img27} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Avent Philips</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img28} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">GoPro</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img29} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Samsumg</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO CARD */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO CARD */}
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img30} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Stanley</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img31} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Michelin</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img32} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Restonic</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img33} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">DC Shoes</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO CARD */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO CARD */}
                  <div className="row row-cols-1 row-cols-md-4 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img34} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Sony</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img35} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Andrea</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img36} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Nintendo</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                        <img src={Img37} alt="" />
                        <div className="card-body">
                          <img src={Img38} className="mx-auto d-block rounded-4" alt="" />
                          <h5 className="text-center">Bosch</h5>
                          {/* CONTENIDO */}
                          <div className="row row-cols-1 row-cols-md-3 g-4">

                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="card border-0">
                                <img src={Img39} className="" alt="" />
                                <div className="card-body">

                                </div>
                              </div>
                            </div>
                          </div>
                          {/* CONTENIDO */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO CARD */}
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleTres" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleTres" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* CONTENIDO DE CARRUSEL CARD */}


            {/* CONTENIDO */}
            {/* CARD 2 IMAGENES */}
            <div className="row mt-4">
              <div className="col-sm-6 mb-3 mb-sm-0 mt-4">

                {/* CONTENIDO */}
                <div className="card-group shadow  bg-body-tertiary rounded">
                  <div className="card  ColorTransparente border-0">
                    <div className="card-body">
                      <p>RUNNING WEEK</p>
                      <h5>HASTA 25% <br /> DE DESCUENTO </h5>
                      <button className="btn btn-primary">Ver Más</button>
                    </div>
                  </div>
                  <div className="card">
                    <img src={Img40} className="TamañoDeImgPerro" alt="" />

                  </div>
                </div>
                {/* CONTENIDO */}

              </div>
              <div className="col-sm-6 mt-4">

                {/* CONTENIDO */}
                <div className="card-group shadow  bg-body-tertiary rounded">
                  <div className="card ColorTransparente border-0">
                    <div className="card-body">
                      <p>TODO EN</p>
                      <h5>HOGAR Y <br /> MUEBLES </h5>
                      <button className="btn btn-primary">Ver Más</button>
                    </div>
                  </div>
                  <div className="card">
                    <img src={Img41} alt="" />

                  </div>
                </div>
                {/* CONTENIDO */}

              </div>
            </div>
            {/* CARD 2 IMAGENES */}
            {/* CONTENIDO */}
            <div className="mt-4">
              <br />
              <h4 className="mt-4 ms-5 mb-4">Colecciones:Calzado</h4>
            </div>
            {/* CONTENIDO */}


            {/* CONTENIDO */}
            <div className="row">
              <div className="col-sm-6 mb-3 mb-sm-0">
                <div className="card border-0 shadow p-3 mb-5 bg-body-tertiary rounded">
                  <img src={Img42} className="TamañoDeImgZapatosCatalogo" alt="" />
                  <div className="card-body">
                    <h5>DESCUBRE</h5>
                    <h1>CALZADO</h1>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="card border-0">
                  <div className="card-body mt-4">
                    {/* CARD 4 */}
                    <div className="row row-cols-1 row-cols-md-4 g-4 mt-4">
                      <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img43} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img43} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img44} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img44} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img45} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img45} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                      </div>
                      <div className="col">
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img46} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded border-0">
                          <br />
                          <img src={Img46} className="rounded-4" alt="" />
                          <div className="card-body">

                          </div>
                        </div>
                      </div>
                    </div>
                    {/* CARD 4 */}



                  </div>
                </div>
              </div>
            </div>
            {/* CONTENIDO */}

            {/* CONTENIDO */}
            <div className="mt-4 mb-4">
              <h4 className="mt-4 mb-4">Más vendidos en Mocasines y Oxfords Ver más vendidos</h4>
            </div>
            {/* CONTENIDO */}

            {/* CONTENIDO */}
            <div id="carouselExampleCuatro" className="carousel slide mt-4">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img47} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img48} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img49} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img50} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img51} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img51} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img50} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img49} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img48} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img47} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
                <div className="carousel-item">
                  {/* CONTENIDO */}
                  <div className="row row-cols-1 row-cols-md-5 g-4">
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img47} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img48} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img49} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img50} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div className="card shadow p-3 mb-5 bg-body-tertiary rounded rounded-4 border-0">
                        <img src={Img51} alt="" />
                        <div className="card-body">
                          <h6>$ 2,536 27% OFF </h6>
                          <p>12x $ 2211.40 sin intereses <br /> Envio gratis FULL <br />
                            Celular Cubot P80 Dual Sim <br />256 Gb Gblobal 8 Gb Ram... </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* CONTENIDO */}
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCuatro" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCuatro" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            {/* CONTENIDO */}

            {/* DIV CONTIENE INFORMACION */}
            <div className="mt-4">
              <h4 className="mt-4 ms-4">Categorías populares</h4>
            </div>
            {/* DIV CONTIENE INFORMACION */}

            {/* CARD QUE CONTIENE VARIOS CARD JUNTOS */}
            <div className="card mt-4">
              {/* CONTENIDO */}
              <div className="card-group">
                <div className="card">
                  <div className="text-center">
                    <div className="text-center mt-4">
                      <img src={Img53} className="TamañoDeIconosTabla" alt="" />
                    </div>

                  </div>
                  <div className="card-body">
                    <p className="text-center">Autos, Motos Y Otros</p>
                  </div>

                </div>

                <div className="card">
                  <div className="text-center">
                    <div className="text-center mt-4">
                      <img src={Img54} className="TamañoDeIconosTabla" alt="" />
                    </div>
                  </div>
                  <div className="card-body">
                    <p className="text-center">Supermercado</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img55} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Accesorios Para Vehiculos</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img56} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Dportes Y Fitness</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img57} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Computacion</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img58} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Consolas Y VideoJuegos</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img59} className="TamañoDeIconosTabla" alt="" />
                  </div>

                  <div className="card-body">
                    <p className="text-center">Electrodomesticos</p>
                  </div>
                </div>
              </div>
              <div className="card-group">
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img60} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Autos, Motos Y Otros</p>
                  </div>

                </div>

                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img61} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Supermercado</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img62} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Accesorios Para Vehiculos</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img63} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Dportes Y Fitness</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img64} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Computacion</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img65} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body">
                    <p className="text-center">Consolas Y VideoJuegos</p>
                  </div>
                </div>
                <div className="card">
                  <div className="text-center mt-4">
                    <img src={Img67} className="TamañoDeIconosTabla" alt="" />
                  </div>
                  <div className="card-body mt-1">
                    <p className="text-center">Electrodomesticos</p>
                  </div>
                </div>
              </div>
              {/* CONTENIDO */}

            </div>
            {/* CARD QUE CONTIENE VARIOS CARD JUNTOS */}


          </div>
        </div>
      </div>
      <br /><br />

      {/* CONTENIDO DE CARD FOOTER */}
      <div className="card mt-4 shadow bg-body-tertiary rounded border-0">
        <div className="card-body mt-4">
          {/* CONTENIDO DENTRO */}
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card border-0 ColorTransparente">
                <div className="text-center">
                  <img src={payment} className="" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Elige cómo pagar</h3>
                  <h5 className="text-center mt-2">Con Mercado Pago, paga con tarjeta, débito o efectivo. También puedes pagar en hasta 12 mensualidades sin tarjeta con Mercado Crédito.</h5>
                  <p className="text-center">Cómo pagar con Mercado Pago</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 ColorTransparente">
                <div className="text-center">
                  <img src={shipping} className="TamañoDeIconosTabla" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Elige cómo pagar</h3>
                  <h5 className="text-center mt-2">Al registrarte en Mercado Libre tienes envíos gratis en miles de productos.</h5>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card border-0 ColorTransparente">
                <div className="text-center">
                  <img src={protecteds} className="TamañoDeIconosTabla" alt="" />
                </div>
                <div className="card-body">
                  <h3 className="text-center">Elige cómo pagar</h3>
                  <h5 className="text-center mt-2">¿No te gusta? ¡Devuélvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</h5>
                  <p className="text-center">Cómo te protegemos</p>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
          {/* CONTENIDO DENTRO */}
        </div>
      </div>
      {/* CONTENIDO DE CARD FOOTER */}






    </>
  )
}
