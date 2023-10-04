import { BsSearch } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SlArrowDown } from 'react-icons/sl';
import { CardCompras } from '../components/CardCompras';

export const MisCompras = () => {
  return (
    <>
      <div className="container mt-5 mb-4">
        <div className="row justify-content-start">
          <div className="col-12 mb-3">
            <h4>Compras</h4>
          </div>
          <div className="col-md-4">
            <div class="input-group mb-3" style={{background:"#fefefe"}}>
              <span class="input-group-text" style={{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px"}}>
                <BsSearch className="siz" /></span>
              <input type="text" class="form-control" placeholder="Buscar" aria-label="Buscar"
                aria-describedby="basic-addon1"
                style={{background:"#fefefe",borderBottomRightRadius:"20px",borderTopRightRadius:"20px"}} />
            </div>
          </div>
          <div className="col-6 col-md-2">
            <button className='btn btn-light'>
              <GiSettingsKnobs className="me-2" />Todas
              <SlArrowDown className="me-2" style={{fontSize:"10px"}} /></button>
          </div>
          <div className="col-6 col-md-2 text-start">
            <span className='text-muted'>5 compras</span>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <CardCompras />
          </div>
          <div className="col-3">
            <nav aria-label="Page navigation example mx-auto d-block">
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li class="page-item"><a class="page-link active" href="#">1</a></li>
                <li class="page-item">
                  <a class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">Siguiente</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  )
}