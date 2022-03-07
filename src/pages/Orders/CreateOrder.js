// import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";

export const CreateOrder = () => {
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


  // const getCreateOrders = () => {
  //   setLoading(true);
  //   axios
  //     .get('http://panelordenes.test/ordenes/create')
  //     .then((res) => {
  //       console.log(res)
  //       const { areas, condivas, confirmacions } = res.data;
  //       console.log(areas, condivas, confirmacions)
  //       setOrders(orders.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       return error;
  //     });
  // };
  // useEffect(() => {
    
  //   getCreateOrders();
  // }, []);

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
              <PageHeading title="Cargar Orden de Trabajo" />

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
                            <b>Datos Equipo</b>
                          </h3>
                        </div>

                        {/* <!-- Seccion contenido Cliente --> */}

                        <div className="card-body">
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Categoria
                            </label>
                            <div className="col-sm-10">
                              <select
                                name="tipodeequipo_id"
                                id="tipodeequipo_id"
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
                              Modelo Equipo
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("modeloequipo")}
                                name="modeloequipo"
                                id="modeloequipo"
                                type="text"
                                className="form-control form-control-sm"
                                required
                              />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Password
                            </label>
                            <div className="col-sm-10">
                              <input
                                {...register("passwordequipo")}
                                name="passwordequipo"
                                id="passwordequipo"
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Ingresar contraseña del equipo"
                                required
                              />
                            </div>
                          </div>
                          <div className="col-sm-12">
                            <div className="form-check">
                              <input
                                {...register("cargador")}
                                name="cargador"
                                type="checkbox"
                                className="form-check-input"
                                id="cargador"
                              />
                              <label className="form-control-sm">
                                Cargador
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                {...register("bateria")}
                                className="bateria"
                                type="checkbox"
                                className="form-check-input"
                                id="bateria"
                              />
                              <label className="form-control-sm">Bateria</label>
                            </div>
                            <div className="form-check">
                              <input
                                {...register("bolsofunda")}
                                name="bolsofunda"
                                type="checkbox"
                                className="form-check-input"
                                id="bolsofunda"
                              />
                              <label className="form-control-sm">
                                Bolso o Funda
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="row" style={{ marginBottom: "20px" }}>
                    <div className="col-sm-12 .col-xs-12">
                      <div className="card">
                        {/* <!-- Seccion Titular Orden de Trabajo --> */}

                        <div
                          className="card-header"
                          style={{ backgroundColor: "#00BFFF", color: "white" }}
                        >
                          <h3 className="card-title">
                            <b>Datos Reparacion</b>
                          </h3>
                        </div>

                        {/* <!-- Seccion datos Orden de trabajo --> */}
                        <div className="card-body">
                          <div className="row">
                            <div className="col">
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Sucursal
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register("sucursal")}
                                    name="sucursal"
                                    id="sucursal"
                                    className="form-control form-control-sm"
                                    placeholder="Sucursal ..."
                                    required
                                  >
                                    <option value=""></option>
                                    {/* @foreach ($sucursales as $sucursal)
                                        <option value="{{ $sucursal['id'] }}">{{ $sucursal['sucursal'] }}</option>
                                    @endforeach */}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Area Reparacion
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register("area")}
                                    name="area"
                                    id="area"
                                    className="form-control form-control-sm"
                                    placeholder="Indicar si corresponde a hardware o software ..."
                                    required
                                  >
                                    <option value=""></option>
                                    {/* @foreach ($areas as $area)
                                        <option value="{{ $area['id'] }}">{{ $area['areas'] }}</option>
                                    @endforeach */}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Tecnico Encargado
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register("nombretecnico")}
                                    name="nombretecnico"
                                    id="nombretecnico"
                                    className="form-control form-control-sm"
                                    placeholder="Indicar Tecnico a cargo ..."
                                    required
                                  >
                                    <option value=""></option>
                                    {/* @foreach ($tecnicos as $tecnico)
                                        <option value="{{ $tecnico['id'] }}">{{ $tecnico['name'] }}</option>
                                    @endforeach */}
                                  </select>
                                </div>
                              </div>

                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Repuesto
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register("necesitarepuesto")}
                                    name="necesitarepuesto"
                                    className="form-control form-control-sm"
                                    placeholder="Indicar si requiere de repuesto ..."
                                    id="necesitarepuesto"
                                    required
                                  >
                                    {/* <option value="{{ $estadoderepuestos[0]->id }}">{{ $estadoderepuestos[0]->estadoderepuesto }}</option>
                                        <option value="{{ $estadoderepuestos[1]->id }}">{{ $estadoderepuestos[1]->estadoderepuesto }}</option> */}
                                  </select>
                                </div>
                              </div>

                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Presupuesto
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register("presupuesto")}
                                    name="presupuesto"
                                    id="presupuesto"
                                    type="text"
                                    className="form-control form-control-sm"
                                    placeholder="Indicar presupuesto del trabajo ..."
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col">
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Estado
                                </label>
                                <div className="col-sm-10">
                                  <select
                                    {...register("estado")}
                                    name="estado"
                                    className="form-control form-control-sm"
                                    id="estado"
                                    placeholder="Indicar estado de la orden ..."
                                    required
                                  >
                                    {/* <option value="{{ $estados[0]->id }}">{{ $estados[0]->estadoot }}</option>
                                    <option value="{{ $estados[1]->id }}">{{ $estados[1]->estadoot }}</option>
                                    <option value="{{ $estados[4]->id }}">{{ $estados[4]->estadoot }}</option> */}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Fecha Ingreso
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register("fechaingreso")}
                                    name="fechaingreso"
                                    type="datetime-local"
                                    className="form-control form-control-sm"
                                    id="fechaingreso"
                                    readOnly
                                    required
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Fecha Entrega
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register("fechaentrega")}
                                    name="fechaentrega"
                                    type="date"
                                    className="form-control form-control-sm"
                                    id="fechaentrega"
                                    required
                                    required
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-2 col-form-label form-control-sm">
                                  Contraseña Orden
                                </label>
                                <div className="col-sm-10">
                                  <input
                                    {...register("passwordot")}
                                    name="passwordot"
                                    type="text"
                                    className="form-control form-control-sm"
                                    id="passwordot"
                                    readOnly
                                    required
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Detalles / Roturas / Marcas
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                {...register("detalles")}
                                className="form-control form-control-sm"
                                rows="3"
                                placeholder="Detalles, roturas y marcas del equipo ..."
                                name="detalles"
                                id="detalles"
                                required
                              ></textarea>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-2 col-form-label form-control-sm">
                              Sintomas / Diagnostico
                            </label>
                            <div className="col-sm-10">
                              <textarea
                                {...register("sintoma")}
                                className="form-control form-control-sm"
                                rows="3"
                                placeholder="Sintoma y diagnostico de corresponder ..."
                                name="sintoma"
                                id="sintoma"
                                required
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
                      Register
                    </button>
                    <button
                      type="reset"
                      className="btn btn-danger"
                      onClick={reset}
                      style={{ marginLeft: "20px" }}
                    >
                      Reset
                    </button>
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

export default CreateOrder;
