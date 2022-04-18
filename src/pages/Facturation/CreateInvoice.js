import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { fetchCreateOrdersData } from "../../api/services/ordersAxios";
import { ClientSection } from "../../components/clientFinder";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import { InvoiceData } from "./InvoiceData";
import { ProductsInvoice } from "./ProductsInvoice";
import { TotalsInvoice } from "./TotalsInvoice";

export const CreateInvoice = () => {
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCreateOrdersData());
  }, []);

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <PageHeading title="Cargar Factura Venta" />
              <div className="register-form">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row" style={{ marginBottom: "20px" }}>
                    {/* <!-- Seccion Titular Cliente --> */}
                    <ClientSection register={register} setValue={setValue} />
                   <InvoiceData register={register}/>
                  </div>

<ProductsInvoice/>
                 
                 <TotalsInvoice/>
                 <div style={{margin: '20px', textAlign: 'end'}}>
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

export default CreateInvoice;
