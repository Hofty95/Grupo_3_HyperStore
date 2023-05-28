import React from 'react'
import logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <ul
    className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion"
    id="accordionSidebar"
  >
    <Link
      className="sidebar-brand d-flex align-items-center justify-content-center"
      to="/"
    >
      <div className="sidebar-brand-icon">
        <img
          className="w-100"
          src={logo}
          alt="HyperStore"
        />
      </div>
    </Link>

    <hr className="sidebar-divider my-0" />

    <li className="nav-item active">
      <a className="nav-link" href="/">
        <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard - HyperStore</span>
      </a>
    </li>

    <hr className="sidebar-divider" />

    <div className="sidebar-heading">Actions</div>

    <li className="nav-item">
      <Link className="nav-link collapsed" to="/">
        <i className="fas fa-fw fa-chart-pie"></i>
        <span>Home</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/products">
        <i className="fas fa-fw fa-laptop-code"></i>
        <span>Productos</span>
      </Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to="/users">
        <i className="fas fa-fw fa-user"></i>
        <span>Usuarios</span>
      </Link>
    </li>

    <hr className="sidebar-divider d-none d-md-block" />
  </ul>
)
}
