import img from '../img/usuario/login.png';

export const CrearCuenta = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row justify-content-center">
          <div className="col-md-4 mb-3 border rounded mt-2">
            <div className="card text-center py-4 border-0" style={{background:"#fff"}}>
                <div className='card-body bg-none'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            <img src={img} className='mx-auto d-block' width='60%' alt="Login"/> 
                            <p className='lead fs-4'><b>Para crear tu cuenta te pediremos algunos datos</b></p> 
                            <span>Solo te tomará unos minutos.</span>
                            <button className='btn btn-primary btn-lg w-100 mb-2 mt-3'>Crear cuenta personal</button>
                            <button className='btn btn-outline-secondary btn-lg w-100 mb-3 text-primary'>Crear cuenta empresa</button>
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