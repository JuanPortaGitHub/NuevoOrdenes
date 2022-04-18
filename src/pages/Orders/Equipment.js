import React from "react";
import { useSelector } from "react-redux";

export const EquipmentSection = ({register}) => {
  const { tipoequipos } = useSelector((state) => state.orders.createData);

  return (
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
        <div className="card-body">
          <div className="form-group row">
            <label className="col-sm-2 col-form-label form-control-sm">
              Categoria
            </label>
            <div className="col-sm-10">
              <select
                {...register("tipodeequipo_id")}
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
              <label className="form-control-sm">Cargador</label>
            </div>
            <div className="form-check">
              <input
                {...register("bateria")}
                className="form-check-input"
                type="checkbox"
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
              <label className="form-control-sm">Bolso o Funda</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
