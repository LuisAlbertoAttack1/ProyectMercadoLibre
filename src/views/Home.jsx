import "../css/style.css"
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
          </div>
        </div>
      </div>
    </>
  )
}
