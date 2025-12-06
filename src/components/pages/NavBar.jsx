import "../../styles/NavBar.css";
import React, { useState } from "react";
import Login from "../pages/Login";
import Registro from "../pages/Registro";
import { Link, useLocation } from "react-router-dom"; // Importamos useLocation para detectar si estamos en inicio

const NavBar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegistro, setShowRegistro] = useState(false);
  
  // Hook para saber en qué ruta estamos (opcional, pero útil para estilos activos)
  const location = useLocation();
  const isHome = location.pathname === "/";

  const abrirLogin = () => setShowLogin(true);
  const abrirRegistro = () => setShowRegistro(true);

  return (
    <>
      <nav className="navbar">
        {/* LADO IZQUIERDO: Logo + Botón Inicio */}
        <div className="brand-container">
          <Link 
            to="/" 
            className="logo-video-container" 
            aria-label="Ir al inicio"
          >
            <video className="logo-video" autoPlay loop muted playsInline>
              <source src="/dibuSuperSayayinCancherosreRePower.mp4" type="video/mp4" />
              Tu navegador no soporta video.
            </video>
          </Link>

          {/* BOTÓN INICIO (No rectangular, fuente blanca) */}
          <Link 
            to="/" 
            className="btn-inicio-oval"
            // ARIA KEY: Esto le dice al lector de pantalla que esta es la página actual
            aria-current={isHome ? "page" : undefined}
          >
            Inicio
          </Link>
        </div>

        {/* LADO DERECHO: Botones de Acción (Login/Registro) */}
        <div className="auth-buttons-container">
          <button
            className="btn btn-primary btn-sm"
            onClick={abrirLogin}
          >
            Ingresar
          </button>

          <button
            className="btn btn-success btn-sm"
            onClick={abrirRegistro}
          >
            Registro
          </button>
        </div>

        {/* MODALES */}
        <Login
          show={showLogin}
          handleClose={() => setShowLogin(false)}
          abrirRegistro={abrirRegistro}
        />
        <Registro
          show={showRegistro}
          handleClose={() => setShowRegistro(false)}
          abrirLogin={abrirLogin}
        />
      </nav>
    </>
  );
};

export default NavBar;