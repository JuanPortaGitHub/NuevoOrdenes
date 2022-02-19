import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickMenuOpen } from '../../../redux/actions';

class Sidebar extends Component {
  // componentDidMount() {
  //   document.getElementById('body').className = 'page-top';
  // }
  // state = {
  //   sidebarToggled: false,
  // }

  // handleSideBarToggle() {
  //   if (this.sidebarToogled === true) {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top sidebar-toggled';
  //   } else {
  //     this.setState({ sidebarToggled: !this.state.sidebarToggled });
  //     document.getElementById('body').className = 'page-top';
  //   }

  // }

  render() {
    const { clickMenuOpen, toggled } = this.props;
    return (
      <ul className={toggled ? 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled' : 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'} id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">HotSpot <sup>2</sup></div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Panel
        </div>


        {/* <!-- Nav Item - Orders Collapse Menu --> */}
        <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseOrders" aria-expanded="true" aria-controls="collapseOrders">
          <i className="fas fa-fw fa-table"></i>
            <span>Ordenes</span>
          </a>
          <div id="collapseOrders" className="collapse" aria-labelledby="headingOrders" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Ordenes</h6>
              <a className="collapse-item" href="utilities-color.html">Ingresar Orden</a>
              <a className="collapse-item" href="orders">Ver Listado</a>
              <a className="collapse-item" href="utilities-animation.html">Anotaciones</a>
            </div>
          </div>
        </li>

{/* <!-- Nav Item - Facturation Collapse Menu --> */}
<li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFacturation" aria-expanded="true" aria-controls="collapseFacturation">
          <i className="fas fa-fw fa-table"></i>
            <span>Facturación</span>
          </a>
          <div id="collapseFacturation" className="collapse" aria-labelledby="headingFacturation" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Facturación</h6>
              <a className="collapse-item" href="utilities-color.html">Registrar Venta</a>
              <a className="collapse-item" href="utilities-border.html">Ver Ventas</a>
              <a className="collapse-item" href="utilities-animation.html">Cobros y adelantos</a>
              <a className="collapse-item" href="utilities-border.html">Devolución</a>

            </div>
          </div>
        </li>

{/* <!-- Nav Item - Cash  Collapse Menu --> */}
<li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseCash" aria-expanded="true" aria-controls="collapseCash">
          <i className="fas fa-fw fa-table"></i>
            <span>Caja</span>
          </a>
          <div id="collapseCash" className="collapse" aria-labelledby="headingCash" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Ordenes</h6>
              <a className="collapse-item" href="utilities-color.html">Ingreso Caja</a>
              <a className="collapse-item" href="utilities-border.html">Egreso Caja</a>
              <a className="collapse-item" href="utilities-border.html">Retiro Caja</a>
              <a className="collapse-item" href="utilities-animation.html">Apertura Caja</a>
              <a className="collapse-item" href="utilities-animation.html">Cierre Caja</a>
            </div>
          </div>
        </li>

          {/* <!-- Nav Item - Products Collapse Menu --> */}
          <li className="nav-item">
          <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProducts" aria-expanded="true" aria-controls="collapseProducts">
          <i className="fas fa-fw fa-table"></i>
            <span>Artículos</span>
          </a>
          <div id="collapseProducts" className="collapse" aria-labelledby="headingProducts" data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Ordenes</h6>
              <a className="collapse-item" href="utilities-color.html">Ingresar Artículos</a>
              <a className="collapse-item" href="utilities-color.html">Modificar Artículos</a>
              <a className="collapse-item" href="utilities-border.html">Ver Listado</a>
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Configuraciones
        </div>

        {/* <!-- Nav Item - Users Config --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/users">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Usuarios</span></Link>
        </li>

        {/* <!-- Nav Item - Users Config --> */}

        <li className="nav-item">
          <Link className="nav-link" to="/params">
            <i className="fas fa-fw fa-chart-area"></i>
            <span>Cotización</span></Link>
        </li>

    
        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button onClick={() => { clickMenuOpen() }} className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>

      </ul>)
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickMenuOpen }, dispatch);

const mapStateToProps = store => ({
  toggled: store.menuState.menuOpen
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);