import React, { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Search, X, MessageCircle } from 'lucide-react';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://oathlgqjadjzxyhsackq.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9hdGhsZ3FqYWRqenh5aHNhY2txIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODk3NjAxNDEsImV4cCI6MjEwNTMzNjE0MX0.Kt9D6bFE6JN8cZqp2ywz0uWauPP5PJIquRvJ8X_F0Zc';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function Productos() {
  const [bebidas, setBebidas] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSel, setCategoriaSel] = useState('Todas');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBebidas();
  }, []);

  const fetchBebidas = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('bebidas')
      .select('*')
      .order('id', { ascending: true });

    if (error) console.error('Error en Supabase:', error);
    else setBebidas(data || []);
    setLoading(false);
  };

  const categorias = ['Todas', ...new Set(bebidas.map((b) => b.categoria))];

  const bebidasFiltradas = bebidas.filter((item) => {
    const coincideNombre = item.nombre.toLowerCase().includes(busqueda.toLowerCase());
    const coincideCat = categoriaSel === 'Todas' || item.categoria === categoriaSel;
    return coincideNombre && coincideCat;
  });

  return (
    <main className="page-main">
      <section className="hero-banner">
        <span className="hero-tag">SIEMPRE CERCA, SIEMPRE AL DÍA</span>
        <h1 className="hero-title">Botillería El Pingüino.</h1>
        <p className="hero-subtitle">
          Catálogo: Aquí tienes el valor de nuestros productos.
        </p>
      </section>

      <div className="filter-section">
        <div className="search-box">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar por producto (ej. Pipeño, Corona, Coca Cola)..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <button onClick={() => setBusqueda('')} className="btn-clear">
              <X size={18} />
            </button>
          )}
        </div>

        <div className="chips-container">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSel(cat)}
              className={`chip-btn ${categoriaSel === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading-box">
          <div className="spinner"></div>
          <p>Cargando productos de Botillería El Pingüino...</p>
        </div>
      ) : (
        <>
          <div className="result-count">
            Mostrando <strong>{bebidasFiltradas.length}</strong> de {bebidas.length} productos
          </div>

          <div className="product-grid">
            {bebidasFiltradas.map((prod) => {
              const mensajeWsp = `¡Hola! Necesito información sobre el producto: ${prod.nombre} en Botillería El Pingüino`;

              return (
                <div key={prod.id} className="product-card">
                  <div>
                    <div className="card-top">
                      <span className="card-category">{prod.categoria}</span>
                      <span className="card-tag">SELECCIÓN</span>
                    </div>

                    <h3 className="product-name">{prod.nombre}</h3>

                    <div className="specs-row">
                      <span className="spec-badge">{prod.formato || 'Envase'}</span>
                      {prod.capacidad && prod.capacidad !== '-' && (
                        <span className="spec-badge">{prod.capacidad}</span>
                      )}
                    </div>
                  </div>

                  <div className="price-row">
                    <div>
                      <span className="price-label">Precio Referencial</span>
                      <div className="price-amount">
                        \${Number(prod.precio).toLocaleString('es-CL')}
                        <span className="price-currency"> CLP</span>
                      </div>
                    </div>

                    <a
                      href={`https://wa.me/56990993668?text=${encodeURIComponent(mensajeWsp)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wsp"
                      title="Consultar por WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </>
      )}
    </main>
  );
}