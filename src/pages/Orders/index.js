import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../api/services/ordersAxios";
import Sidebar from "../../components/Navigation/Sidebar";
import Topbar from "../../components/Navigation/Topbar";
import PageHeading from "../../components/PageHeading";
import { statusBadge } from "../../utils/statusBadge";

export const Orders = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <div>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <PageHeading title="Listado Ordenes de Trabajo" />
              {loading && (
                <>
                  <h2>Cargando Ordenes</h2>
                  <div className="spinner-border m-5" role="status">
                    <span className="sr-only">Cargando Ordenes...</span>
                  </div>
                </>
              )}
              {error && (
                <>
                  <h2 style={{ color: "red" }}>
                    <b>Hubo un error en carga de ordenes</b>
                  </h2>
                </>
              )}
              {data && (
                <div className="table-responsive">
                  <table
                    className="table table-striped"
                    // style={{ margin: "2vw" }}
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
                      {data.map((order, i) => {
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
                            <td style={{ textAlign: "center" }}>
                              {statusBadge(order.estadoot)}
                            </td>
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
