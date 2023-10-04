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


          </div>
        </div>
      </div>
    </>
  )
}
