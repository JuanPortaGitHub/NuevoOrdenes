import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

export const PinModal = ({ open, formData }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [statusMsg, setStatusMsg] = useState(true);
  const [enabledPin, setEnabledPin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [responseData, setResponseData] = useState(null);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEnabledPin(false);
      setLoading(true);
      const pinData = { pincode: e.target.value };
      const formDataWithPin = { ...formData, ...pinData };
      createNewOrder(formDataWithPin);
    }
  };

  const createNewOrder = async (formDataWithPin) => {
    
    console.log("data antes axios", formDataWithPin);
    axios
      .post(`http://panelordenes.test/ordenes`, formDataWithPin)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if (res.data.errors) {
          setErrorMsg("Pin Incorrecto");
          setStatusMsg(null);
          setLoading(false);
          setEnabledPin(true);
          return;
        }
        if (res.status === 201) {
          setStatusMsg("Orden creada! No se envio el mail!");
          setResponseData(res.data)
          setErrorMsg(null);
          setLoading(false);
          return;
        } else if (res.status === 200) {
          setStatusMsg("Orden creada! Mail enviado!");
          setResponseData(res.data)
          setErrorMsg(null);
          setLoading(false);
          return;
        }
      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.log("errorMsg.message", error.message);
        setLoading(false);
        return;
      });
  };

  return (
    <>
      <Modal show={open}>
        <Modal.Header style={{ alignSelf: "center" }}>
          <Modal.Title>Ingrese Pin</Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ alignSelf: "center" }}>
          {loading ? (
            <div className="spinner-border m-5" role="status">
              <span className="sr-only">Cargando...</span>
            </div>
          ) : (
            <>
              <div className="col-sm-12" style={{ marginBottom: "20px" }}>
                {enabledPin && (
                  <input
                    name="pincode"
                    id="pincode"
                    type="password"
                    className="form-control form-control-sm"
                    placeholder="PIN"
                    onKeyDown={handleKeyDown}
                    style={{ textAlign: "center" }}
                  />
                )}
              </div>
              {errorMsg && (
                <div className="col-sm-12">
                  <h6 style={{ color: "red", textAlign: "center" }}>
                    {errorMsg}
                  </h6>
                </div>
              )}
              {statusMsg && (
                <>
                  <div className="col-sm-12">
                    <h6 style={{ textAlign: "center" }}>{statusMsg}</h6>
                  </div>
                  <div className="row">
                    <button type="button" className="btn btn-primary">
                      <b>Imprimir</b>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ marginLeft: "20px" }}
                    >
                      <b>Cargar Otra Orden</b>
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
