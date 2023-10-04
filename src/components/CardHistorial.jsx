import img1 from '../img/ImgDeCarruselCard/Img5.webp'
import img2 from '../img/ImgDeCarruselCard/Img6.webp'
import img3 from '../img/ImgDeCarruselCard/Img7.webp'
import img4 from '../img/ImgDeCarruselCard/Img8.webp'
import img5 from '../img/ImgDeCarruselCard/Img9.webp'
import img6 from '../img/ImgDeCarruselCard/Img10.webp'
import { AiFillThunderbolt } from 'react-icons/ai';

export const CardHistorial = () => {
  return (
    <div className='row'>
        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img1} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$298</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>

        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img2} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$500</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>

        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img3} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$3,200</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>

        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img4} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$10,000</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>

        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img5} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$6,999</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>

        <div className='col-6 col-lg-2'>
            <div className="card mb-3">
                <div className="card-img py-0">
                    <img src={img6} className='mx-auto d-block' width="120px" height="120px" alt="Imagen de producto"/>  
                    <hr />                  
                </div>
                <div className="card-body text-start py-0">
                    <p className='mb-0' style={{fontSize:"13px"}}>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>                    
                    <p className='lead p-0 mb-0'><b>$5,000</b></p>
                    <p className='text-success' style={{fontSize:"13px"}}><b>Envío gratis <em><AiFillThunderbolt/>FULL</em></b></p>
                    <p className='text-primary mb-5'>Eliminar</p>
                </div>
            </div>
        </div>
    </div>
  )
}
