// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../redux/action-creators/index";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import axios from "axios";
import Select from "react-select";

export const CreateOrder = () => {
  const [selectedClient, setSelectedClient] = useState({
    id: "",
    apellido: "",
    nombre: "",
    celular: "",
    condicion: "",
    dnicuit: "",
    telefono: "",
    mail: "",
  });
  const dispatch = useDispatch();
  const AC = bindActionCreators(actionCreators, dispatch);
  console.log("Action Creators", AC);
  const {
    areas,
    estadoderepuestos,
    estados,
    sucursales,
    tecnicos,
    tipoequipos,
    clients,
  } = useSelector((state) => state.orders.data);
  // const state = useSelector((state) => state.orders.data);
  const { loading } = useSelector((state) => state.orders);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log("clients", clients);
  const fetchCreateOrdersData = async () => {
    await axios
      .get("http://panelordenes.test/ordenes/create")
      .then((res) => {
        const data = res.data;
        dispatch(AC.CREATE_ORDERS_DATA(data));
      })
      .catch((error) => {
        return error;
      });
  };

  useEffect(() => {
    fetchCreateOrdersData();
  }, []);

  // const clientSelected = { id: '', apellido: '', nombre: '', celular: '', condicionIva: '', cuitDni: '', telefono: '', mail: '' },

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
              {loading ? (
                <>
                  <h2>Cargando...</h2>
                  <div className="spinner-border m-5" role="status">
                    <span className="sr-only">Cargando...</span>
                  </div>
                </>
              ) : (
                // <!-- Formulario -->
                <div className="register-form">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row" style={{ marginBottom: "20px" }}>
                      {/* <!-- Seccion Titular Cliente --> */}
                      <div className="col-sm-6 .col-xs-12">
                        <div className="card">
                          <div
                            className="card-header"
                            style={{
                              backgroundColor: "#00BFFF",
                              color: "white",
                            }}
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
                                <Select
                                  placeholder="Busca por DNI/CUIT o apellido de cliente ..."
                                  options={clients}
                                  onChange={(client) => {
                                    setValue("idclient", client.id);
                                    setSelectedClient(client);
                                  }}
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
                                  name="apellidocliente"
                                  id="apellidocliente"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.nombre || "Apellido ..."
                                  }
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
                                  // value={selectedClient.id}
                                  required
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
                                  name="nombrecliente"
                                  id="nombrecliente"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.nombre || "Nombre ..."
                                  }
                                  readOnly
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
                                  name="celularcliente"
                                  id="celularcliente"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.celular || "Celular ..."
                                  }
                                  readOnly
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
                                  name="condivaclient"
                                  id="condivaclient"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.condicion ||
                                    "Condición IVA ..."
                                  }
                                  readOnly
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
                                  name="cuitcliente"
                                  id="cuitcliente"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.dnicuit || "CUIT / DNI ..."
                                  }
                                  readOnly
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
                                  name="telefonocliente"
                                  id="telefonocliente"
                                  type="text"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.telefono || "Telefono ..."
                                  }
                                  readOnly
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
                                  name="mailcliente"
                                  id="mailcliente"
                                  type="email"
                                  className="form-control form-control-sm"
                                  placeholder={
                                    selectedClient.mail || "Mail ..."
                                  }
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
                            style={{
                              backgroundColor: "#00BFFF",
                              color: "white",
                            }}
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
                                  {tipoequipos.map((tipoEquipo, i) => {
                                    return (
                                      <option key={i} value={tipoEquipo.id}>
                                        {tipoEquipo.tipodeequipo}
                                      </option>
                                    );
                                  })}
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
                                <label className="form-control-sm">
                                  Bateria
                                </label>
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
                            style={{
                              backgroundColor: "#00BFFF",
                              color: "white",
                            }}
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
                                      {sucursales.map((sucursal, i) => {
                                        return (
                                          <option key={i} value={sucursal.id}>
                                            {sucursal.sucursal}
                                          </option>
                                        );
                                      })}
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
                                      {areas.map((area, i) => {
                                        return (
                                          <option key={i} value={area.id}>
                                            {area.areas}
                                          </option>
                                        );
                                      })}
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
                                      {tecnicos.map((tecnico, i) => {
                                        return (
                                          <option key={i} value={tecnico.id}>
                                            {tecnico.name}
                                          </option>
                                        );
                                      })}
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
                                      {estadoderepuestos.map(
                                        (estadoRepuesto, i) => {
                                          return (
                                            <option
                                              key={i}
                                              value={estadoRepuesto.id}
                                            >
                                              {estadoRepuesto.estadoderepuesto}
                                            </option>
                                          );
                                        }
                                      )}
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
                                      {estados.map((estado, i) => {
                                        return (
                                          <option key={i} value={estado.id}>
                                            {estado.estadoot}
                                          </option>
                                        );
                                      })}
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrder;
