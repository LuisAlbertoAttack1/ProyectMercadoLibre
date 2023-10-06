import { BsSearch } from 'react-icons/bs';
import { GiSettingsKnobs } from 'react-icons/gi';
import { SlArrowDown } from 'react-icons/sl';
import { CardCompras } from '../components/CardCompras';
import {Footer} from '../components/Footer';
import { AiOutlineMenu } from 'react-icons/ai';
import { GiShoppingBag } from 'react-icons/gi';
import { IoIosPricetag } from 'react-icons/io';
import { GiReceiveMoney } from 'react-icons/gi';
import { GiAlliedStar } from 'react-icons/gi';
import { ImFileText } from 'react-icons/im';
import { BiUserCircle } from 'react-icons/bi';
import { FiSettings } from 'react-icons/fi';

export const MisCompras = () => {
return (
  <>
    <div className="container-fluid mb-4">
      <div className='row'>
        <div className="col-1">
          <div className="row" style={{background:"#f0efef",width:"57px", height:'100%'}}>
            <div className='col-1'>
              <div className='row'>
                <div className="col-12">
                  <AiOutlineMenu className='fs-3 mt-4 text-primary' />
                </div>
                <div className="col-12 mt-4"></div>
                <div className="col-12">
                  <GiShoppingBag className='fs-3 mt-4 text-primary' />
                </div>
                <div className="col-12">
                  <IoIosPricetag className='fs-3 mt-4 text-muted' />
                </div>
                <div className="col-12">
                  <GiReceiveMoney className='fs-3 mt-4 text-muted' />
                </div>
                <div className="col-12">
                  <GiAlliedStar className='fs-3 mt-4 text-muted' />
                </div>
                <div className="col-12">
                  <ImFileText className='fs-3 mt-4 text-muted' />
                </div>
                <div className="col-12">
                  <BiUserCircle className='fs-3 mt-4 text-muted' />
                </div>
                <div className="col-12 mb-4">
                  <FiSettings className='fs-3 mt-4 text-muted' />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 d-block d-md-none"></div>
        <div className='col-10 col-md-10 mt-5'>
          <div className="row justify-content-start">
            <div className="col-12 mb-3">
              <h4>Compras</h4>
            </div>
            <div className="col-md-4">
              <div className="input-group mb-3">
                <span className="input-group-text"
                  style={{borderBottomLeftRadius:"20px",borderTopLeftRadius:"20px",background:"#fefefe"}}>
                  <BsSearch className="siz" /></span>
                <input type="text" className="form-control" placeholder="Buscar" aria-label="Buscar"
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
                <ul className="pagination">
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item"><a className="page-link active" href="#">1</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">Siguiente</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
)
}