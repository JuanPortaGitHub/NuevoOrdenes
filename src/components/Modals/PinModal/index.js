import React, { useState } from "react";
import axios from "axios";
import { Modal } from "react-bootstrap";

export const PinModal = ({ open, formData }) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [statusMsg, setStatusMsg] = useState(null);
  const [enabledPin, setEnabledPin] = useState(true)
  const [loading, setLoading] = useState(false)

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log("e.target.value");
      const pinData = { pincode: e.target.value };
      const formDataWithPin = { ...formData, ...pinData };
      createNewOrder(formDataWithPin);
    }
  };

  const createNewOrder = async (formDataWithPin) => {
    setLoading(true)
    setEnabledPin(false)
    console.log("data antes axios", formDataWithPin);
    axios
      .post(`http://panelordenes.test/ordenes`, formDataWithPin)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        if(res.data.errors){
          setErrorMsg('Pin Incorrecto');
          setLoading(false)
          setEnabledPin(true)
          return
        }
        if(res.status === 201){
          setStatusMsg('Orden creada! No se envio el mail!')
          setErrorMsg(null);
          setLoading(false)
          return
        }else if (res.status === 200){
          setStatusMsg('Orden creada! Mail enviado!')
          setErrorMsg(null);
          setLoading(false)
          return
        }

      })
      .catch((error) => {
        setErrorMsg(error.message);
        console.log("errorMsg.message", error.message);
        setLoading(false)
        return
        // return error;
      });
  };

  return (
    <>
      <Modal show={open}>
        <Modal.Header style={{alignSelf: 'center'}}>
          <Modal.Title >Ingrese Pin</Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{alignSelf: 'center'}}>
        {loading ? (
            <div className="spinner-border m-5" role="status">
            <span className="sr-only">Cargando...</span>
          </div>
        ) : (
          <>
          <div className="col-sm-12" style={{marginBottom: '20px'}}>
            {enabledPin && <input
              name="pincode"
              id="pincode"
              type="password"
              className="form-control form-control-sm"
              placeholder="PIN"
              onKeyDown={handleKeyDown}
              style={{textAlign: 'center'}}
            /> }
          </div>
          {errorMsg && (
            <div className="col-sm-12">
              <h6 style={{color: 'red', textAlign: 'center'}}>{errorMsg}</h6>
            </div>
          )}
          {statusMsg && (
            <div className="col-sm-12">
              <h6 style={{textAlign: 'center'}}>{statusMsg}</h6>
            </div>
          )}
          </>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};
