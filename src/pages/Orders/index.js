import axios from "axios";
import React, { useState, useEffect } from "react";
import { url } from "../../api/axios";
// import { getOrders } from "../../api/services/ordersAxios";

import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import { statusBadge } from "../../utils/statusBadge";

export const Orders = () => {
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = () => {
      setLoading(true);
      axios
        .get(url)
        .then((res) => {
          const { orders } = res.data;
          setOrders(orders.data);
          setLoading(false);
        })
        .catch((error) => {
          return error;
        });
    };
    getOrders();
  }, []);

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
              <PageHeading title="Listado Ordenes de Trabajo" />

              {/* <!-- Content Row --> */}
              {loading ? (
                <>
                  <h2>Cargando Ordenes</h2>
                  <div class="spinner-border m-5" role="status">
                    <span class="sr-only">Cargando Ordenes...</span>
                  </div>
                </>
              ) : (
                <div className="row">
                  <table
                    className="table table-striped"
                    style={{ margin: "2vw" }}
                  >
                    <thead>
                      <tr>
                        <th scope="col">Orden</th>
                        <th scope="col">Suc</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Apellido</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha Ingreso</th>
                        <th scope="col">Fecha Entrega</th>
                        <th scope="col">Categoria</th>
                        <th scope="col">Equipo</th>
                        <th scope="col">Imprimir</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order, i) => {
                        return (
                          <tr key={i}>
                            <th scope="row">
                              <a href="{{route('ordenes.anotaciones', $order->ot_id)}}">
                                {order.ot_id}
                              </a>
                            </th>
                            <td>{order.sucursal}</td>
                            <td>{order.area}</td>
                            <td>{order.apellido}</td>
                            <td>{order.nombre}</td>
                            <td style={{ textAlign: "center" }}>{statusBadge(order.estadoot)}</td>
                            <td>{order.fechaingreso}</td>
                            <td>{order.fechaentrega}</td>
                            <td>{order.tipodeequipo}</td>
                            <td>{order.modelo}</td>
                            <td style={{ textAlign: "center" }}>
                              <a href="/">
                                <i className="fas fa-print"></i>
                              </a>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
