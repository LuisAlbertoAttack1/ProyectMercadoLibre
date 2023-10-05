import { MdKeyboardArrowUp } from 'react-icons/md';
export const Footer = () => {
  return (
    <>
        <div className="text-center">
            <span className="btn btn-secondary mb-0 text-center text-muted" style={{fontSize:"13px",background:"rgb(0,0,0,0)",border: "1px solid #a3a1a1",borderBottom:"none"}}>
                Más Infromacion <b><MdKeyboardArrowUp className="fs-5"/></b>
            </span>
            </div>
            <hr className="mb-0 mt-0"/>
            {/* CONTENIDO DENTRO */}
            <div className="card border-0" style={{fontSize:"12px", background:"rgb(0,0,0,0)"}}>
            <div className="card-body">
                <div className="row justify-content-center">
                <div className="col-10">
                    <span className="me-4">Trabaja con nosotros</span>
                    <span className="me-4"> Términos y condiciones</span>
                    <span className="me-4">Cómo cuidamos tu privacidad</span>
                    <span className="me-4">Accesibilidad Ayuda</span>
                    <p className="text-muted mb-0 mt-1">Copyright © 1999-2023 El presente canal de instrucción o ambiente, es operado por DeRemate.Com de México, S. de R.L. de C.V. identificada bajo la marca comercial "Mercado Libre".</p>
                    <p className="text-muted mb-0">Insurgentes Sur 1602 Piso 9 Suite 900, Crédito Constructor Benito Juarez, 03940 Ciudad de México, CDMX, Mexico.</p>
                </div>
                </div>
            </div>
        </div>
    </>
  )
}
