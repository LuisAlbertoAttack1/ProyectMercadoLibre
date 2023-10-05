import { CardHistorial } from '../components/CardHistorial';
import {Footer} from '../components/Footer';

export const Historial = () => {
    return (    
      <>
        <div className="container mt-5 mb-4">
            <div className="row justify-content-start">
                <div className="col-12 mb-3">
                    <h4>Tu Historial</h4>
                </div>
                <div className="col mt-3">
                    <span>Hoy</span>
                </div>
                <div className="col-12 mt-3">
                    <CardHistorial/>
                </div>
            </div>
        </div>  
        <Footer/>      
      </>
    )
  }
  