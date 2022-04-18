// import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import { fetchCreateOrdersData } from "../../api/services/ordersAxios";
import { PinModal } from "../../components/Modals/PinModal";
import { ClientSection } from "../../components/clientFinder";
import { EquipmentSection } from "./Equipment";
import { WorkDataSection } from "./WorkData";

export const CreateOrder = () => {
  const [modalPinOpen, setModalPinOpen] = useState(false);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.orders);
  const {
    register,
    handleSubmit,
    setValue
  } = useForm({});
  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    console.log("submitee", data);
    setModalPinOpen(true);
    setFormData(data);
  };
  useEffect(() => {
    dispatch(fetchCreateOrdersData());
  }, []);

  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
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
                  <PinModal open={modalPinOpen} formData={formData} />
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row" style={{ marginBottom: "20px" }}>
                      <ClientSection register={register} setValue={setValue}/>
                      <EquipmentSection register={register}/>
                    </div>
                    <div className="row" style={{ marginBottom: "20px" }}>
                      <WorkDataSection register={register}/>
                    </div>
                    <div
                      style={{
                        marginBottom: "20px",
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <button type="submit" className="btn btn-primary">
                        Ingresar
                      </button>
                      <button
                        type="reset"
                        className="btn btn-danger"
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
