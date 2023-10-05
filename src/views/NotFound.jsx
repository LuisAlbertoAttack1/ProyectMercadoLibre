import "../css/NotFound.css"
export const NotFound = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col mt-5 py-4 text-center">
            <h1 className="display-1">Error 404</h1>
            <p className="lead fs-2">Pagina no localizada</p>
            <a href="/" className="btn btn-outline-primary">Regresar</a>
          </div>
        </div>
      </div>
    </>
  )
}

