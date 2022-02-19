// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";

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

                          <div className="form-group row">
                            <label
                              id="apellidocliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Apellido
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("apellidocliente")}
                                name="apellidocliente"
                                id="apellidocliente"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Apellido ..."
                                readOnly
                                required
                              />
                            </div>
                          </div>
                          <div
                            className="form-group row"
                            style={{ display: "none" }}
                          >
                            <label
                              name="idclient"
                              id="idclient"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              ID
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("idclient")}
                                name="idclient"
                                id="idclient"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="ID ..."
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label
                              id="nombrecliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Nombre
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("nombrecliente")}
                                name="nombrecliente"
                                id="nombrecliente"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Nombre ..."
                                readOnly
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              id="celularcliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Celular
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("celularcliente")}
                                name="celularcliente"
                                id="celularcliente"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Celular ..."
                                readOnly
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              id="condivaclient"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Condicion IVA
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("condivaclient")}
                                name="condivaclient"
                                id="condivaclient"
                                type="text"
                                className="form-control form-control-sm"
                                readOnly
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              id="cuitcliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              CUIT / DNI
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("cuitcliente")}
                                name="cuitcliente"
                                id="cuitcliente"
                                type="text"
                                className="form-control form-control-sm"
                                readOnly
                                required
                              />
                            </div>
                          </div>

                          <div className="form-group row">
                            <label
                              id="telefonocliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Telefono
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("telefonocliente")}
                                name="telefonocliente"
                                id="telefonocliente"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Telefono ..."
                                readOnly
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label
                              id="mailcliente"
                              className="col-sm-2 col-form-label form-control-sm"
                            >
                              Mail
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("mailcliente")}
                                name="mailcliente"
                                id="mailcliente"
                                type="email"
                                className="form-control form-control-sm"
                                placeholder="Mail ..."
                                readOnly
                              />
                            </div>
                          </div>

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
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              SUCURSAL
                            </label>
                            <div className="col-sm-10">
                              <select
                                {...register("local")}
                                name="local"
                                id="local"
                                className="form-control form-control-sm"
                                required
                              >
                                <option value=""></option>
                                {/* @foreach ($tipoequipos as $tipoequipo)
                                        <option value="{{ $tipoequipo['id'] }}">{{ $tipoequipo['tipodeequipo'] }}</option>
                                    @endforeach */}
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Fecha Factura
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("fechafactura")}
                                name="fechafactura"
                                id="fechafactura"
                                type="text"
                                className="form-control form-control-sm"
                                required
                              />
                            </div>
                          </div>
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
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Dolar
                            </label>
                            <div className="col-sm-10">
                              <input
                                name="cotizaciondolar"
                                id="cotizaciondolar"
                                type="text"
                                className="form-control form-control-sm"
                                readOnly
                                required
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-sm-12 .col-xs-12">
                      <div className="card">
                        <div className="card-header">
                          <h3 className="card-title">Articulos</h3>

                          <div className="card-tools"></div>
                        </div>
                        {/* <!-- /.card-header --> */}
                        <div className="card-body">
                          <div className="row">dasda</div>

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
