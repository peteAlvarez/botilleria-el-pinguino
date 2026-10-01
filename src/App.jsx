import React from 'react';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { Wine, MapPin } from 'lucide-react';
import Productos from './pages/Productos';
import Contacto from './pages/Contacto';
import './App.css';

// Intentar cargar la imagen si existe en assets
import logoPinguino from './assets/pinguino.png';

// Ícono SVG de pingüino estilizado y profesional para el logo
function PenguinIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Cuerpo y cabeza */}
      <path d="M12 2C8.5 2 6 5 6 9.5C6 13 4 15.5 4 17.5C4 19.5 5.5 21 7.5 21C8.5 21 9.5 20.5 10.5 19.5C11.3 18.7 12.7 18.7 13.5 19.5C14.5 20.5 15.5 21 16.5 21C18.5 21 20 19.5 20 17.5C20 15.5 18 13 18 9.5C18 5 15.5 2 12 2Z" />
      {/* Pecho / Vientre */}
      <path d="M9 11C9 8.5 10.3 7 12 7C13.7 7 15 8.5 15 11C15 13.5 13.7 16 12 16C10.3 16 9 13.5 9 11Z" />
      {/* Ojos */}
      <circle cx="10" cy="5.5" r="0.8" fill="currentColor" />
      <circle cx="14" cy="5.5" r="0.8" fill="currentColor" />
      {/* Pico */}
      <path d="M11 7L12 8L13 7" />
    </svg>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        {/* Navbar con el nombre corregido y el ícono de pingüino */}
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="brand-group">
              <div className="brand-symbol">
                {logoPinguino ? (
                  <img src={logoPinguino} alt="Botillería El Pingüino" className="brand-logo-img" />
                ) : (
                  <PenguinIcon />
                )}
              </div>
              <div>
                <span className="brand-title">BOTILLERÍA EL PINGÜINO</span>
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
          <p>© {new Date().getFullYear()} Botillería El Pingüino — Andrés Marambio 4158, Santiago</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}