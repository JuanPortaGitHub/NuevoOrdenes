import React from "react";
import dayjs from "dayjs";
import { useSelector } from "react-redux";

export const WorkDataSection = ({ register }) => {
  const {
    areas,
    estadoderepuestos,
    estados,
    sucursales,
    tecnicos,
    passwordot,
  } = useSelector((state) => state.orders.createData);

  return (
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
                    {estadoderepuestos.map((estadoRepuesto, i) => {
                      return (
                        <option key={i} value={estadoRepuesto.id}>
                          {estadoRepuesto.estadoderepuesto}
                        </option>
                      );
                    })}
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
                    {...register("estado_id")}
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
                    type="datetime"
                    className="form-control form-control-sm"
                    id="fechaingreso"
                    defaultValue={dayjs().format("DD-MM-YYYY H:mm:s")}
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
                    value={passwordot}
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
  );
};
