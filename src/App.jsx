import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Wine, MapPin } from 'lucide-react';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="brand-group">
              <div className="brand-symbol">
                <span>P</span>
              </div>
              <div>
                <span className="brand-title">BODEGA EL PINGÜINO</span>
                <span className="brand-subtitle">CATÁLOGO DE PRODUCTOS</span>
              </div>
            </Link>

            <div className="nav-tabs">
              <NavLink
                to="/"
                className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
              >
                <Wine size={16} />
                <span>Productos & Precios</span>
              </NavLink>
              <NavLink
                to="/contacto"
                className={({ isActive }) => `nav-tab ${isActive ? 'active' : ''}`}
              >
                <MapPin size={16} />
                <span>Ubicación & Contacto</span>
              </NavLink>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Bodega El Pingüino — Andrés Marambio 4158, Santiago</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}