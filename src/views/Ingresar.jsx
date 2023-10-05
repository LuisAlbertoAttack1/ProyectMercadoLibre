
import { FiUser } from 'react-icons/fi';
import { GiSmartphone } from 'react-icons/gi';
import { IoIosArrowForward } from 'react-icons/io';

export const Ingresar = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row justify-content-around">
            <div className="col-md-4 mb-3">
                <div className='card bg-none border-0'>
                    <div className='card-body'>
                        <div className='row justify-content-center'>
                            <div className='col-10'>
                                <p className='lead fs-2'><b>Ingresa tu e-mail, teléfono o usuario de Mercado Libre</b></p>  
                                <hr />
                                <p>Reportar un problema</p>          
                                <span className="btn btn-outline-light text-secondary px-0 w-100 text-start"><GiSmartphone/> Robo o pérdida de teléfono <IoIosArrowForward className='text-end'/></span>
                                <hr className='mb-0 mt-0'/>
                                <span className="btn btn-outline-light text-secondary px-0 mb-2 w-100 text-start"><FiUser/> Robo de cuenta <IoIosArrowForward className='ml-5'/></span><br/>
                                <span className="text-primary">Necesito ayuda con otros temas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
            <div className="col-md-5">
                <div className="card py-5">
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-11">
                                <label htmlFor="">E‑mail, teléfono o usuario</label>
                                <input type="text" className="form-control form-control-lg mb-4" />
                                <button className="btn btn-light me-2 btn-lg disabled text-secondary border">Continuar</button>
                                <button className="btn btn-light text-primary me-2 btn-lg">Crear cuenta</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
      </div>
    </>
  )
}