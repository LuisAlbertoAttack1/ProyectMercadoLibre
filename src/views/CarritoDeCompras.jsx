import img1 from '../img/ImgDeCarruselCard/Img2.webp';
import Img1 from '../img/ImgDeCarruselCard/Img1.webp'
import Img2 from '../img/ImgDeCarruselCard/Img2.webp'
import Img3 from '../img/ImgDeCarruselCard/Img3.webp'
import Img4 from '../img/ImgDeCarruselCard/Img4.webp'
import Img5 from '../img/ImgDeCarruselCard/Img5.webp'
import { AiFillThunderbolt } from 'react-icons/ai';

export const CarritoDeCompras = () => {
  return (    
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 mb-3">
            <div className="card">
              <div className="card-header" style={{background:"#fff"}}>
                <div className='py-2'>
                  <span className='fs-5'>Productos </span>
                  <span className='text-success'><b><em><AiFillThunderbolt className='mb-1'/>FULL</em></b></span>
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-2 mb-2">
                    <img src={img1} className='mx-auto d-block' width='80px' height='80px'/>
                  </div>
                  <div className="col-md-6 mb-2">
                    <p>Asistente Virtual Amazon Echo Dot 5ta Gen Con Relo...</p>
                    <span className="text-primary me-3" style={{fontSize:"14px"}}>Eliminar</span>
                    <span className="text-primary me-3" style={{fontSize:"14px"}}>Guardar</span>
                    <span className="text-primary me-3" style={{fontSize:"14px"}}>Comprar ahora</span>
                  </div>
                  <div className="col-md-2 mb-2 text-center">
                    <div className="btn-group mb-2" role="group" aria-label="Basic outlined example">
                      <button type="button" className="btn btn-outline-light border text-dark">-</button>
                      <button type="button" className="btn btn-outline-light border text-dark">1</button>
                      <button type="button" className="btn btn-outline-light border text-primary">+</button>
                    </div>
                    <p className='text-muted' style={{fontSize:"12px"}}>135 disponibles</p>
                  </div>
                  <div className="col-md-2 text-center">
                    <p className='fs-5'>$ 865</p>
                  </div>
                  <div className="col-12">
                    <hr />
                    <div className="row justify-content-between">
                      <div className="col-2">
                        <span>Envío</span>
                      </div>
                      <div className="col-2 text-end">
                        <span className='text-success'>Gratis</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className='row justify-content-center'>
                  <div className='col-md-10'>
                    <div className="progress mt-2 mb-2" style={{height:"7px"}}>
                      <div className="progress-bar bg-success" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width:"100%"}}></div>
                    </div>
                  </div>
                  <div className="col-md-2 text-start align-self-center">
                    <span className='text-success' style={{fontSize:'14px'}}><b>Envió gratis</b></span>
                  </div>
                </div>
                <p>Aprovecha tu envío gratis agregando más. <span className='text-primary'>Ver más productos Full&gt;</span></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-header" style={{background:"#fff"}}>
                <p className='mt-1'>Resumen de compra</p>
              </div>
              <div className="card-body">
                <div className="row justify-content-between">
                  <div className="col-5">
                    <p className='mb-0' style={{fontSize:"15px"}}>Producto</p>
                    <p style={{fontSize:"15px"}}>Envió</p>
                    <p style={{fontSize:"17px"}}><b>Total</b></p>
                  </div>
                  <div className="col-3 text-end">
                    <p className='mb-0' style={{fontSize:"15px"}}>$ 865</p>
                    <p className='text-success' style={{fontSize:"15px"}}>Gratis</p>
                    <p style={{fontSize:"17px"}}><b>$ 865</b></p>
                  </div>
                </div>
                <button className='btn btn-primary btn-lg w-100'>Continuar compra</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-5">
          <div className="col-12">
            <p className='fs-4'>Recomendaciones para ti</p>
          </div>
        </div>
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
      </div>      
    </>
  )
}
