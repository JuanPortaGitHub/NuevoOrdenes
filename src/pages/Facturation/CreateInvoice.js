// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import { clientFormFields } from "../../interface/client";
import { invoiceFormFields } from "../../interface/invoice";

export const CreateInvoice = () => {
  // const validationSchema = ...
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />
        {/* <!-- End of Sidebar --> */}

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Topbar />
            {/* <!-- End of Topbar --> */}

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              {/* <!-- Page Heading --> */}
              <PageHeading title="Cargar Factura Venta" />

              {/* <!-- Content Row --> */}
              <div className="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row" style={{ marginBottom: "20px" }}>
                    {/* <!-- Seccion Titular Cliente --> */}
                    <div className="col-sm-6 .col-xs-12">
                      <div className="card">
                        <div
                          className="card-header"
                          style={{ backgroundColor: "#00BFFF", color: "white" }}
                        >
                          <h3 className="card-title">
                            <b>Datos Cliente</b>
                          </h3>
                        </div>

                        {/* <!-- Seccion contenido Cliente --> */}

                        <div className="card-body">
                          <div className="form-group row">
                            <label
                              id="busquedacliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Buscar Cliente
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("busquedacliente")}
                                name="busquedacliente"
                                id="busquedacliente"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Busca por DNI/CUIT o apellido de cliente ..."
                              />
                            </div>
                          </div>

                          {clientFormFields.map((client, i) => {
                            return (
                              <div className="form-group row" key={i}>
                                <label className={client.labelClassName}>
                                  {client.label}
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register(client.id)}
                                    name={client.name}
                                    id={client.id}
                                    type={client.type}
                                    className={client.inputClassName}
                                    placeholder={client.placeholder}
                                    readOnly={client.readOnly}
                                    required={client.required}
                                  />
                                </div>
                              </div>
                            );
                          })}

                          {/* <!-- Boton modal para edicion de equipo --> */}
                          <div className="row">
                            <div className="col-md-12">
                              <button
                                type="button"
                                id="cargacliente"
                                className="btn btn-warning"
                                data-toggle="modal"
                                data-target=".cargacliente"
                                style={{ float: "right" }}
                              >
                                <b>Carga cliente nuevo</b>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* <!-- Cierra boton modal carga cliente --> */}
                    </div>
                    <div className="col-sm-6 .col-xs-12">
                      <div className="card">
                        <div
                          className="card-header"
                          style={{ backgroundColor: "#00BFFF", color: "white" }}
                        >
                          <h3 className="card-title">
                            <b>Datos Factura</b>
                          </h3>
                        </div>

                        {/* <!-- Seccion contenido Cliente --> */}

                        <div className="card-body">
                          {invoiceFormFields.map((invoice, i) => {
                            return invoice.component === "select" ? (
                              <div className="form-group row" key={i}>
                                <label className={invoice.labelClassName}>
                                  {invoice.label}
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register(invoice.id)}
                                    name={invoice.name}
                                    id={invoice.id}
                                    type={invoice.type}
                                    className={invoice.inputClassName}
                                    placeholder={invoice.placeholder}
                                    readOnly={invoice.readOnly}
                                    required={invoice.required}
                                  >
                                    {invoice.optionsSelect.map((option, i) =>{
                                      return (
                                      <option key={i} value={option.value}>{option.text}</option>
                                      )
                                    })}
                                  </select>
                                </div>
                              </div>
                            ) : (
                              <div className="form-group row" key={i}>
                                <label className={invoice.labelClassName}>
                                  {invoice.label}
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register(invoice.id)}
                                    name={invoice.name}
                                    id={invoice.id}
                                    type={invoice.type}
                                    className={invoice.inputClassName}
                                    placeholder={invoice.placeholder}
                                    readOnly={invoice.readOnly}
                                    required={invoice.required}
                                  />
                                </div>
                              </div>
                            );
                          })}

                          
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Factura Interna Nro.
                            </label>
                            <div
                              className="col-sm-10"
                              style={{ display: "flex", alignItems: "center" }}
                            >
                              <div
                                className="col-sm-4"
                                style={{ paddingLeft: "0px" }}
                              >
                                <input
                                  name="tipofactura"
                                  id="tipofactura"
                                  type="text"
                                  readOnly
                                  className="form-control form-control-sm"
                                  value="X"
                                  required
                                />
                              </div>
                              -
                              <div className="col-sm-4">
                                <input
                                  name="nrolocalfactura"
                                  id="nrolocalfactura"
                                  type="text"
                                  readOnly
                                  className="form-control form-control-sm"
                                  required
                                />
                              </div>
                              -
                              <div className="col-sm-4">
                                <input
                                  name="nrofactura"
                                  id="nrofactura"
                                  type="text"
                                  readOnly
                                  className="form-control form-control-sm"
                                  required
                                />
                              </div>
                            </div>
                          </div>                         
                        </div>
                      </div>
                    </div>
                  </div>

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

                  <div className="row">
                    <div className="col-6"></div>
                    {/* <!-- /.col --> */}
                    <div className="col-6">
                      <div className="table-responsive">
                        <table
                          className="table"
                          style={{ backgroundColor: "white" }}
                        >
                          <tbody>
                            <tr>
                              <th>NETO 21%</th>
                              <td id="sumneto21">0.00</td>
                              <th>IVA 21%</th>
                              <td id="total21">0.00</td>
                            </tr>
                            <tr>
                              <th>NETO 10.5%</th>
                              <td id="sumneto105">0.00</td>
                              <th>IVA 10.5%</th>
                              <td id="total105">0.00</td>
                            </tr>
                            <tr>
                              <th>TOTAL NETO</th>
                              <td id="totalneto">0.00</td>
                              <th>TOTAL IVA</th>
                              <td id="totalivas">0.00</td>
                            </tr>
                            <tr>
                              <th colSpan="2">
                                <h3>
                                  <b>TOTAL FACTURA</b>
                                </h3>
                              </th>
                              <td
                                id="montototalfinal"
                                colSpan="2"
                                style={{ textAlign: "center" }}
                              >
                                <h3>
                                  <b>0.00</b>
                                </h3>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!-- Boton de Carga de Orden. Llama a modal para carga de pin --> */}
                      <div className="card-footer">
                        <button
                          type="button"
                          className="btn btn-warning"
                          id="abremodal"
                          // onclick="abrirmodal()"
                        >
                          <b>Cargar Factura</b>
                        </button>

                        <button
                          type="reset"
                          className="btn btn-danger"
                          // onClick={reset}
                          style={{ marginLeft: "20px" }}
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                    {/* <!-- /.col --> */}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateInvoice;
