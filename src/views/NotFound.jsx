import "../css/NotFound.css"
export const NotFound = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* espacio de trabajo */}
            <div className="card  border-0 shadow-lg p-3 mb-5 bg-body-tertiary rounded rounded-4 text-center TipoDeLetra " >
              <div className="card-body">
                {/* espacio de trabajo */}
                <div className="row">
                  <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card border-0 ColorTransparente">
                      <div className="card-body">
                        <img src="/src/assets/img/ImgDePaginaNoEncontrada/Error404.gif" className="img-fluid rounded-4" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="card border-0 ColorTransparente mt-4">
                      <div className="card-body mt-4">
                        <img src="/src/assets/img/ImgDePaginaNoEncontrada/IconoDeUser.png" className="TamañoDeIconoUser mt-4" alt="" />
                        <h1 className="mt-4 mb-3">Dirrección No Encontrada</h1>
                        <h2>Hello NotFound 404</h2>
                        <p>___________________</p>

                      </div>
                    </div>
                  </div>
                </div>
                {/* espacio de trabajo */}
              </div>
            </div>
            {/* espacio de trabajo */}
          </div>
        </div>
      </div>
    </>
  )
}

