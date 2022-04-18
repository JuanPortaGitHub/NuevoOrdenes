import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Select from "react-select";

export const ClientSection = ({register, setValue}) => {
  const { clients } = useSelector((state) => state.orders.createData);
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
  return (
    <div className="col-sm-6 .col-xs-12" style={{ marginBottom: "20px" }}>
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
                    setSelectedClient(client);                    
                    setValue("idclient", client.id);
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
                placeholder={selectedClient.nombre || "Apellido ..."}
                readOnly
                required
              />
            </div>
          </div>
          <div className="form-group row" 
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
                name="nombrecliente"
                id="nombrecliente"
                type="text"
                className="form-control form-control-sm"
                placeholder={selectedClient.nombre || "Nombre ..."}
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
                placeholder={selectedClient.celular || "Celular ..."}
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
                placeholder={selectedClient.condicion || "Condición IVA ..."}
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
                placeholder={selectedClient.dnicuit || "CUIT / DNI ..."}
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
                placeholder={selectedClient.telefono || "Telefono ..."}
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
                placeholder={selectedClient.mail || "Mail ..."}
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
                onClick={() => console.log(selectedClient)}
              >
                <b>Carga cliente nuevo</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
