import React from 'react'

export const ProductsInvoice = () => {
  return (
    <div className="row" style={{ marginBottom: "20px" }}>
    <div className="col-sm-12 .col-xs-12">
      <div className="card">
        <div
          className="card-header"
          style={{ backgroundColor: "#00BFFF", color: "white" }}
        >
          <h3 className="card-title">Articulos</h3>

          <div className="card-tools"></div>
        </div>
        {/* <!-- /.card-header --> */}
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-hover text-nowrap"
              id="productosfactura"
            >
              <thead>
                <tr>
                  <th>N</th>
                  <th>COD</th>
                  <th>ARTICULO</th>
                  <th>DESCRIPCION</th>
                  <th>CANTIDAD</th>
                  <th>PRECIO</th>
                  <th>DTO</th>
                  <th>SUBTOTAL</th>
                  <th>IVA %</th>
                  <th>IVA21</th>
                  <th>IVA105</th>
                </tr>
              </thead>
              <tbody>
                <tr id="filaproductoagregado">
                  <td id="nroproducto">1</td>
                  <td>
                    <input
                      id="busquedaproducto1"
                      name="busquedaproducto[]"
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Busca por cod o descripcion"
                      required
                    />
                  </td>
                  <td>
                    <input
                      id="articuloproducto1"
                      name="articuloproducto[]"
                      className="form-control form-control-sm"
                      type="text"
                      readOnly
                      required
                    />
                  </td>
                  <td>
                    <input
                      id="descripcionproducto1"
                      name="descripcionproducto[]"
                      className="form-control form-control-sm"
                      type="text"
                      required
                    />
                  </td>
                  <td>
                    <input
                      id="cantprod1"
                      name="cantprod[]"
                      className="form-control form-control-sm"
                      type="number"
                      required
                    />
                  </td>
                  <td style={{ display: "none" }}>
                    <input
                      id="idprod1"
                      name="idprod[]"
                      type="text"
                      className="form-control"
                      placeholder="ID ..."
                    />
                  </td>
                  <td>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text form-control-sm">
                          $
                        </span>
                      </div>
                      <input
                        id="precioprod1"
                        name="precioprod[]"
                        className="form-control form-control-sm"
                        type="number"
                        step=".01"
                        required
                      />
                    </div>
                  </td>
                  <td>
                    <div className="input-group mb-3">
                      <input
                        id="descprod1"
                        name="descprod[]"
                        className="form-control form-control-sm"
                        type="text"
                        required
                      />
                      <div className="input-group-append">
                        <span className="input-group-text form-control-sm">
                          %
                        </span>
                      </div>
                    </div>
                  </td>
                  <td id="subtotalarticulo1"></td>
                  <td id="ivaprod1"></td>
                  <td id="valorivaprod211"></td>
                  <td id="valorivaprod1051"></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="row"
            style={{
              marginBottom: "20px",
              display: "flex",
              justifyContent: "space-evenly",
            }}
          >
            <button type="submit" className="btn btn-primary">
              Ingresar Artículo
            </button>
          </div>
        </div>

        {/* <!-- /.card-body --> */}
      </div>
    </div>
  </div>

  )
}
