import "../css/navbar.css";
import logo from '../img/navbar/logo.png';
import promo from '../img/navbar/promocion.webp';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
export const Header = () => {
  return (
    <div className="">
      <div className="container-fluid bg-yellow">
        <div className="container">
            <div className="row p-2 justify-content-between">
                <div className="col-12 col-md-2 mb-3 mb-sm-0 mt-1">
                    <a href="/">
                    <img src={logo} className="mx-auto d-block" alt="Mi Logo"/>
                    </a>
                </div> 
                <div className="col-1 d-none d-md-block mb-3 mb-sm-0 mt-1">
                    <span className="fs-6"><AiOutlineQuestionCircle/></span>
                </div>         
            </div>
        </div>
      </div>
    </div>
  )
}
